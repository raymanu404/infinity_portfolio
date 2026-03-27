import { Spinner } from '@/Shared/Components';
import { Button, IconButton } from '@mui/material';
import { Trash } from 'lucide-react';
import React, { startTransition, useActionState } from 'react';
import { basicExampleCartApi } from './utils';

interface StateI {
  count: number;
}

interface ActionPayloadI {
  type: 'add' | 'decrease';
  nextState?: Partial<StateI>;
}

const reducerAction = async (prevState: StateI, actionPayload: ActionPayloadI): Promise<StateI> => {
  switch (actionPayload.type) {
    case 'add': {
      const result = await basicExampleCartApi(prevState.count + 1);

      return { count: result };
    }
    case 'decrease': {
      const result = await basicExampleCartApi(prevState.count - 1);

      return { count: result };
    }

    default: {
      return prevState;
    }
  }
};

const initialState: StateI = {
  count: 0,
};

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  currency: 'USD',
  style: 'currency',
});

const UseActionStateBasicExample: React.FC = () => {
  const [stateAction, dispatchAction, isPending] = useActionState(reducerAction, initialState);

  const addCountHandler = () => {
    startTransition(() => {
      dispatchAction({ type: 'add' });
    });
  };

  const decreaseCountHandler = () => {
    startTransition(() => {
      dispatchAction({ type: 'decrease' });
    });
  };

  return (
    <div>
      <h2>UseActionState basic Example </h2>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <p>You have {stateAction.count} tickets</p>
          {isPending ? (
            <Spinner size="1.2em" />
          ) : (
            <div>
              <span>Total Price {formatter.format(stateAction.count * 9999)}</span>
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Button onClick={addCountHandler} variant="contained">
            Buy tickets{' '}
          </Button>
          <IconButton
            onClick={() => {
              if (stateAction.count > 0) {
                decreaseCountHandler();
              }
            }}
          >
            <Trash />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

UseActionStateBasicExample.displayName = 'UseActionStateBasicExample';

export default UseActionStateBasicExample;
