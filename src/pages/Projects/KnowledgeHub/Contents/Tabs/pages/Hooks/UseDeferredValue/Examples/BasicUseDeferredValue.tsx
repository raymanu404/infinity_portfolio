import { Spinner } from '@/Shared/Components';
import { TextField } from '@mui/material';
import React, { Suspense, useDeferredValue, useState } from 'react';
import Artists from './Artists';

const BasicUseDeferredValue: React.FC = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <div>
        <p>Current Query: {query}</p>
        <p>Deferred Query: {deferredQuery}</p>

        <TextField value={query} onChange={e => setQuery(e.target.value)} />
        <Suspense fallback={<Spinner size="2em" />}>
          <Artists query={deferredQuery} />
        </Suspense>
      </div>
    </>
  );
};

BasicUseDeferredValue.displayName = 'BasicUseDeferredValue';

export default BasicUseDeferredValue;
