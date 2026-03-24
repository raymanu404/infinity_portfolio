import Notes from '@/Shared/Components/Notes/Notes';
import React from 'react';
import { PageContentList } from '../../../components';
import { PageContentI } from '../../../interfaces';
import ChatRoomEffectEvent from './ChatRoom/ChatRoomEffectEvent';
import ChatRoomNormal from './ChatRoom/ChatRoomNormal';

const PAGE_CONTENT: PageContentI[] = [
  {
    elementId: 'chat-room-without-useEffectEvent',
    title: 'Chat room Without useEffectEvent Example',
    children: <ChatRoomNormal />,
  },
  {
    elementId: 'chat-room-with-useEffectEvent',
    title: 'Chat room with useEffectEvent Example',
    children: <ChatRoomEffectEvent />,
  },
];

const UseEffectEventBasic: React.FC = () => {
  return (
    <div>
      <h3>
        For this example, we have 2 separate cases when useEffectEvent is very useful to be used!
      </h3>
      <Notes
        notes={[
          {
            note: '',
          },
        ]}
      />
      <PageContentList pageContentList={PAGE_CONTENT} />
    </div>
  );
};

UseEffectEventBasic.displayName = 'UseEffectEventBasic';

export default UseEffectEventBasic;
