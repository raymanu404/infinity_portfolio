import { Spinner } from '@/Shared/Components';
import Notes from '@/Shared/Components/Notes/Notes';
import { Button, IconButton } from '@mui/material';
import { Trash } from 'lucide-react';
import React, { lazy, startTransition, useActionState, useOptimistic } from 'react';
import { countCartApi } from './utils';

const ErrorBoundary = lazy(() =>
  import('react-error-boundary').then(module => ({ default: module.ErrorBoundary })),
);

interface StateI {
  count: number;
  error?: string | null;
}

interface ActionPayloadI {
  type: 'add' | 'decrease';
  nextState?: Partial<StateI>;
}

const reducerAction = async (prevState: StateI, actionPayload: ActionPayloadI): Promise<StateI> => {
  switch (actionPayload.type) {
    case 'add': {
      const result = await countCartApi(actionPayload.nextState?.count, prevState.count);

      if (result.error) {
        return { count: 0, error: result.error };
      }

      return { ...result };
    }
    case 'decrease': {
      const result = await countCartApi(actionPayload.nextState?.count, prevState.count);

      if (result.error) {
        return { count: 0, error: result.error };
      }
      return { ...result };
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

const ErrorHandle: React.FC = () => {
  const [stateAction, dispatchAction, isPending] = useActionState(reducerAction, initialState);
  const [optimisticState, dispatchOptimistic] = useOptimistic(stateAction);
  const isCompleted = Object.is(stateAction, optimisticState);

  const addCountHandler = (count: number) => {
    startTransition(() => {
      dispatchOptimistic(prev => ({ count: prev.count + count }));

      dispatchAction({
        type: 'add',
        nextState: {
          count: count,
        },
      });
    });
  };

  const decreaseCountHandler = () => {
    startTransition(() => {
      dispatchOptimistic(prev => ({ count: prev.count - 1 }));
      dispatchAction({ type: 'decrease', nextState: { count: -1 } });
    });
  };

  return (
    <div>
      <h2>Error Handling Example </h2>
      <div>
        <Notes
          notes={[
            {
              note: 'There are two ways to handle errors with useActionState',
              subNotes: [
                {
                  note: 'For known errors, such as “quantity not available” validation errors from BE, you can return it as part of your reducerAction state and display it in the UI.',
                },
                {
                  note: 'For unknown errors, such as undefined is not a function, you can throw an error. React will cancel all queued Actions and shows the nearest Error Boundary',
                },
              ],
            },
          ]}
        />
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              justifyContent: 'space-between',
            }}
          >
            <Button onClick={() => addCountHandler(1)} variant="contained">
              Buy 1x
            </Button>
            <Button onClick={() => addCountHandler(10)} variant="contained">
              Buy 10x
            </Button>
            <Button onClick={() => addCountHandler(NaN)} variant="contained">
              Buy NaN
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              onClick={() => {
                decreaseCountHandler();
              }}
            >
              <Trash />
            </IconButton>
          </div>
        </div>
        {isCompleted && <span>Saved on server!</span>}
        {optimisticState.error && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#F0f0f0',
              padding: '10px 0',
              backgroundColor: '#f23212',
            }}
          >
            {optimisticState.error}
          </div>
        )}
      </div>
    </div>
  );
};

const ErrorHandleExample: React.FC = () => {
  return (
    <div>
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            <h2>Something went wrong</h2>
            <p>The action could not be completed.</p>
            <Button variant="contained" onClick={resetErrorBoundary}>
              Try again
            </Button>
          </div>
        )}
      >
        <ErrorHandle />
      </ErrorBoundary>
    </div>
  );
};

ErrorHandleExample.displayName = 'ErrorHandleExample';

export default ErrorHandleExample;
