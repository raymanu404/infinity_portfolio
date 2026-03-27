import React, { useEffect, useEffectEvent } from 'react';
import { toast } from 'react-toastify';
import { ChatRoomIdType, createConnection, ThemeChatRoomType, upperFirstChars } from './utils';
interface PropsI {
  roomId: ChatRoomIdType;
  theme: ThemeChatRoomType;
}
const serverUrl = 'https://localhost:1234';

const ChatRoomEffectEvent: React.FC<PropsI> = ({ roomId, theme }) => {
  const onConnectEventEffect = useEffectEvent(() => {
    const message = `Welcome in ${upperFirstChars(roomId)} `;
    toast(message, {
      theme: theme,
    });
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', onConnectEventEffect);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <div>
      <h1>ChatRoomEffectEvent Example</h1>
      <h1>Welcome to the {upperFirstChars(roomId)} room!</h1>
    </div>
  );
};

ChatRoomEffectEvent.displayName = 'ChatRoomEffectEvent';

export default ChatRoomEffectEvent;
