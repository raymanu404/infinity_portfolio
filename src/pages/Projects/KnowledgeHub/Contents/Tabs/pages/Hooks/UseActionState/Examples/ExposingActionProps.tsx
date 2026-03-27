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

interface ActionCallbacksI {
  addHandler: () => Promise<void>;
  decreaseHandler: () => Promise<void>;
}

const TicketsExample: React.FC<{
  state: StateI;
  actionCallbacks: ActionCallbacksI;
  isPending: boolean;
}> = ({ actionCallbacks, state, isPending }) => {
  const [optimisticState, dispatchOptimistic] = useOptimistic(state);
  const isCompleted = Object.is(state, optimisticState);

  const addCountHandler = () => {
    startTransition(async () => {
      dispatchOptimistic(prev => ({ count: prev.count + 1 }));
      await actionCallbacks.addHandler();
    });
  };

  const decreaseCountHandler = () => {
    startTransition(async () => {
      dispatchOptimistic(prev => ({ count: prev.count - 1 }));
      await actionCallbacks.decreaseHandler();
    });
  };

  return (
    <>
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
    </>
  );
};

const ExposingActionProps: React.FC = () => {
  const [stateAction, dispatchAction, isPending] = useActionState(reducerAction, initialState);

  const addCountHandler = async () => {
    startTransition(() => {
      dispatchAction({ type: 'add' });
    });
  };

  const decreaseCountHandler = async () => {
    startTransition(() => {
      dispatchAction({ type: 'decrease' });
    });
  };

  const actionCallbacks: ActionCallbacksI = {
    addHandler: addCountHandler,
    decreaseHandler: decreaseCountHandler,
  };

  return (
    <div>
      <h5>
        Exposing Action Props Example by pass dispatchACtion handlers directly to a child component
        that handle action props with useOptimistic and startTransition{' '}
      </h5>
      <TicketsExample state={stateAction} actionCallbacks={actionCallbacks} isPending={isPending} />
    </div>
  );
};

ExposingActionProps.displayName = 'ExposingActionProps';

export default ExposingActionProps;
