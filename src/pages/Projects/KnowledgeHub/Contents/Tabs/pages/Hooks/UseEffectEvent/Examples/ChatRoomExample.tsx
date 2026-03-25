import Notes from '@/Shared/Components/Notes/Notes';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';
import { PageContentList } from '../../../components';
import { PageContentI } from '../../../interfaces';
import ChatRoomEffectEvent from './ChatRoom/ChatRoomEffectEvent';
import ChatRoomNormal from './ChatRoom/ChatRoomNormal';
import {
  CHAT_IDS,
  ChatRoomIdType,
  DEFAULT_CHAT_ROOM_ID,
  DEFAULT_THEME,
  THEME_ARRAY,
  ThemeChatRoomType,
  upperFirstChars,
} from './ChatRoom/utils';

const PAGE_CONTENT = ({
  roomId,
  theme,
}: {
  roomId: ChatRoomIdType;
  theme: ThemeChatRoomType;
}): PageContentI[] => [
  {
    elementId: 'chat-room-without-useEffectEvent',
    title: 'Chat room Without useEffectEvent Example',
    children: <ChatRoomNormal roomId={roomId} theme={theme} />,
  },
  {
    elementId: 'chat-room-with-useEffectEvent',
    title: 'Chat room with useEffectEvent Example',
    children: <ChatRoomEffectEvent roomId={roomId} theme={theme} />,
  },
];

const UseEffectEventBasic: React.FC = () => {
  const [roomId, setRoomId] = useState<ChatRoomIdType>(DEFAULT_CHAT_ROOM_ID);
  const [localTheme, setLocalTheme] = useState<ThemeChatRoomType>(DEFAULT_THEME);

  const handleChangeChatRoom = (event: SelectChangeEvent<ChatRoomIdType>) => {
    const { value } = event.target;
    setRoomId(value as ChatRoomIdType);
  };

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement, Element>) => {
    const { value } = event.target;
    setLocalTheme(value as ThemeChatRoomType);
  };

  return (
    <div>
      <h3>
        For this example, we have 2 separate cases when useEffectEvent is very useful to be used!
      </h3>
      <Notes
        notes={[
          {
            note: 'In first place, we should make the right choice between reactive and non-reactive elements/logic',
            subNotes: [
              {
                note: 'For Chat room example, we should re-render chatRoom settings when user change the roomId',
              },
              {
                note: 'theme prop should be non-reactive element bc we don t want to re-run useEffect for such case',
              },
            ],
          },
        ]}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '0 20px',
          margin: '20px 0',
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="chat-room-select-label">Age</InputLabel>
          <Select
            labelId="chat-room-select-label"
            id="chat-room-select"
            value={roomId}
            label="RoomId"
            onChange={handleChangeChatRoom}
          >
            <MenuItem value={CHAT_IDS[0]}>{upperFirstChars(CHAT_IDS[0])}</MenuItem>
            <MenuItem value={CHAT_IDS[1]}>{upperFirstChars(CHAT_IDS[1])}</MenuItem>
            <MenuItem value={CHAT_IDS[2]}>{upperFirstChars(CHAT_IDS[2])}</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel id="theme-radio-buttons-group-label">Theme</FormLabel>
          <RadioGroup
            row
            aria-labelledby="theme-radio-buttons-group-label"
            name="theme-radio-buttons-group"
            value={localTheme}
            onChange={handleChangeTheme}
          >
            <FormControlLabel
              value={THEME_ARRAY[0]}
              control={<Radio />}
              label={upperFirstChars(THEME_ARRAY[0])}
            />
            <FormControlLabel
              value={upperFirstChars(THEME_ARRAY[1])}
              control={<Radio />}
              label={upperFirstChars(THEME_ARRAY[1])}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <PageContentList pageContentList={PAGE_CONTENT({ roomId, theme: localTheme })} />
    </div>
  );
};

UseEffectEventBasic.displayName = 'UseEffectEventBasic';

export default UseEffectEventBasic;
