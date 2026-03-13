import Notes from '@/Shared/Components/Notes/Notes';
import { theme } from '@/theme';
import { Button, IconButton } from '@mui/material';
import { ThumbsUp } from 'lucide-react';
import React, { startTransition, useMemo, useOptimistic, useState } from 'react';
import { subscribeChannelFake, upgradePostFake } from './utils';

const likeProps: Record<string, Record<string, string | number>> = {
  true: {
    fill: '#42A5F5',
    fillOpacity: 1,
  },
  false: {
    fill: '#E3F2FD',
    fillOpacity: 1,
  },
};

const PropsValue: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [subscribers, setSubscribers] = useState(100);
  const [optimisticLike, setOptimisticLike] = useOptimistic(isLiked);
  const [optimisticSubs, setOptimisticSubs] = useOptimistic(subscribers);

  const handleLikeButton = () => {
    startTransition(async () => {
      setOptimisticLike(prev => !prev);

      await upgradePostFake();

      setIsLiked(prev => !prev);
    });
  };

  const handleSubscriptionButton = () => {
    startTransition(async () => {
      setOptimisticSubs(prev => prev + 1);

      const result = await subscribeChannelFake();
      if (result.success) {
        setSubscribers(prev => prev + 1);
      }
    });
  };

  const likePropsIcon = useMemo(() => likeProps[String(optimisticLike)], [optimisticLike]);

  return (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
      <Notes
        specialNotes={true}
        notes={[
          {
            note: `  Props or state passed in like useOptimistic(isLiked): If the parent updates isLiked during
          the Action, the new value is used after the Action completes. This is how the UI reflects
          the result of the Action`,
          },
        ]}
      />

      <div>
        <IconButton
          onClick={handleLikeButton}
          sx={{ padding: '8px 10px', width: 'auto' }}
          color="secondary"
          disabled={optimisticLike !== isLiked}
        >
          <ThumbsUp {...likePropsIcon} />
        </IconButton>
      </div>

      <div>
        <h2
          style={{
            color:
              optimisticSubs !== subscribers ? 'grey' : theme.custom.specialPalette?.variant[600],
          }}
        >
          Subscribers {optimisticSubs}
          {/* Subscribers {subscribers} */}
        </h2>
        <Button
          variant="contained"
          onClick={handleSubscriptionButton}
          disabled={optimisticSubs != subscribers}
          sx={{ padding: '8px 10px', width: 'auto', borderRadius: '20px', color: 'white' }}
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

PropsValue.displayName = 'PropsValue';

export default PropsValue;
