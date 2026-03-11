import { TextField } from '@mui/material';
import React, { useDeferredValue, useState } from 'react';
import SlowList from './SlowList';

const PreventBlockingUI: React.FC = () => {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);

  return (
    <div>
      <h1>PreventBlockingUI</h1>
      <p>
        In this situation, the user is not blocked when is typing into input, due to
        useDeferredValue
      </p>
      <TextField value={text} onChange={e => setText(e.target.value)} />

      <SlowList text={deferredText} />
    </div>
  );
};

PreventBlockingUI.displayName = 'PreventBlockingUI';

export default PreventBlockingUI;
