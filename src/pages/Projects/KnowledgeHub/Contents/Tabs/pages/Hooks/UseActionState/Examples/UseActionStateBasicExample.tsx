import { Spinner } from '@/Shared/Components';
import { Button } from '@mui/material';
import React, { startTransition, useActionState } from 'react';
import { basicExampleAddCartApi } from './utils';

interface StateI {
  count: number;
}

interface ActionPayloadI {
  type: 'add';
  nextState?: Partial<StateI>;
}

const reducerAction = async (prevState: StateI, actionPayload: ActionPayloadI): Promise<StateI> => {
  switch (actionPayload.type) {
    case 'add': {
      const result = await basicExampleAddCartApi(prevState.count + 1);

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
        <Button onClick={addCountHandler} variant="contained">
          Buy tickets{' '}
        </Button>
      </div>
    </div>
  );
};

UseActionStateBasicExample.displayName = 'UseActionStateBasicExample';

export default UseActionStateBasicExample;
