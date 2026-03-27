import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ChatRoomIdType, createConnection, ThemeChatRoomType, upperFirstChars } from './utils';

interface PropsI {
  roomId: ChatRoomIdType;
  theme: ThemeChatRoomType;
}

const serverUrl = 'https://localhost:1234';

const ChatRoomNormal: React.FC<PropsI> = ({ roomId, theme }) => {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      const message = `Welcome in ${upperFirstChars(roomId)} `;
      toast(message, {
        theme: theme,
      });
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, theme]);

  return (
    <div>
      <h1>ChatRoomNormal Example</h1>
      <p>Basically useEffect re-run when theme is also changed, which is no-reactive element</p>
      <h2>Welcome to the {upperFirstChars(roomId)} room!</h2>
    </div>
  );
};

ChatRoomNormal.displayName = 'ChatRoomNormal';

export default ChatRoomNormal;
