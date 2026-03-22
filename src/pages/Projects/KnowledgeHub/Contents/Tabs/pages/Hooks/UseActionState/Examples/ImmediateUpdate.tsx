import { Spinner } from '@/Shared/Components';
import { Button, IconButton } from '@mui/material';
import { Trash } from 'lucide-react';
import React, { startTransition, useActionState, useOptimistic } from 'react';
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

const ImmediateUpdate: React.FC = () => {
  const [stateAction, dispatchAction, isPending] = useActionState(reducerAction, initialState);
  const [optimisticState, dispatchOptimistic] = useOptimistic(stateAction);
  const isCompleted = Object.is(stateAction, optimisticState);

  const addCountHandler = () => {
    startTransition(() => {
      dispatchOptimistic(prev => ({ count: prev.count + 1 }));
      dispatchAction({ type: 'add' });
    });
  };

  const decreaseCountHandler = () => {
    startTransition(() => {
      dispatchOptimistic(prev => ({ count: prev.count - 1 }));
      dispatchAction({ type: 'decrease' });
    });
  };

  return (
    <div>
      <h2>Immediate Update on UI by useOptimistic in addition with useActionState Example </h2>
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
          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <p>You have {optimisticState.count} tickets </p>
            {isPending && <Spinner size="1.2em" />}
          </span>

          <span
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            Total Price {formatter.format(optimisticState.count * 9999)}
            {isPending && <Spinner size="1.2em" />}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '20px',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Button onClick={addCountHandler} variant="contained">
              Buy tickets{' '}
            </Button>
            <IconButton
              onClick={() => {
                if (optimisticState.count > 0) {
                  decreaseCountHandler();
                }
              }}
            >
              <Trash />
            </IconButton>
          </div>
          {isCompleted && <span>Saved on server!</span>}
        </div>
      </div>
    </div>
  );
};

ImmediateUpdate.displayName = 'ImmediateUpdate';

export default ImmediateUpdate;
