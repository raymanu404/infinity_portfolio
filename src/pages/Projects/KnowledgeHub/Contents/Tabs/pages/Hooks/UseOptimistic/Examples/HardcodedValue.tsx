import { Spinner } from '@/Shared/Components';
import { Button } from '@mui/material';
import { Download } from 'lucide-react';
import React, { startTransition, useOptimistic, useState } from 'react';
import { downloadDataFake } from './utils';

const HardcodedValue: React.FC = () => {
  const [optimistic, setOptimistic] = useOptimistic(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const onLoadFakeData = () => {
    startTransition(async () => {
      setOptimistic(true);
      const result = await downloadDataFake();

      setIsDownloaded(result.isDownloaded);
    });
  };

  return (
    <div style={{ display: 'flex', gap: '12px', flexDirection: 'column' }}>
      <div>
        <h2>HardcodedValue With hardcoded value Example like primitives directly</h2>

        <Button
          variant="outlined"
          onClick={onLoadFakeData}
          disabled={optimistic}
          sx={{ padding: '8px 10px', width: 'auto' }}
        >
          {optimistic ? <Spinner size="1.5em" /> : <Download />} Download Data
        </Button>
      </div>

      <div>
        {isDownloaded ? 'Your data is downloaded!' : 'Download your data by clicking on button!'}
      </div>
    </div>
  );
};

HardcodedValue.displayName = 'HardcodedValue';

export default HardcodedValue;
