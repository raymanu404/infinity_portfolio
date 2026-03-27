import React, { useState } from 'react';
import Contact from './VisualEffectExample/Contact';
import Posts from './VisualEffectExample/Posts';
import Profile from './VisualEffectExample/Profile';
import TabPanel from './VisualEffectExample/TabPanel';

type TabVisualEffect = 'profile' | 'posts' | 'contact';

const PendingVisualEffect: React.FC = () => {
  const [tab, setTab] = useState<TabVisualEffect>('profile');

  return (
    <div>
      <h2>PendingVisualEffect</h2>
      <div style={{ display: 'flex', gap: '12px', flexDirection: 'row' }}>
        <TabPanel isActive={tab === 'profile'} action={() => setTab('profile')}>
          Profile
        </TabPanel>
        <TabPanel isActive={tab === 'posts'} action={() => setTab('posts')}>
          Posts
        </TabPanel>
        <TabPanel isActive={tab === 'contact'} action={() => setTab('contact')}>
          Contact
        </TabPanel>
      </div>

      <div
        style={{
          marginTop: '24px',
          minHeight: '200px',
          border: '1px solid black',
          padding: '12px',
        }}
      >
        {tab === 'profile' && <Profile />}
        {tab === 'posts' && <Posts />}
        {tab === 'contact' && <Contact />}
      </div>
    </div>
  );
};

PendingVisualEffect.displayName = 'PendingVisualEffect';

export default PendingVisualEffect;
