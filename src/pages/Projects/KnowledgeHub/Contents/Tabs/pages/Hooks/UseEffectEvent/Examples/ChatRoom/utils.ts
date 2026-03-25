const THEME_ARRAY = ['dark', 'light'] as const;
type ThemeChatRoomType = (typeof THEME_ARRAY)[number];

const CHAT_IDS = ['general', 'music', 'games'] as const;
type ChatRoomIdType = (typeof CHAT_IDS)[number];

const DEFAULT_THEME = THEME_ARRAY[0];
const DEFAULT_CHAT_ROOM_ID = CHAT_IDS[0];

const CONNECTION_EVENTS = ['connected', 'disconnected'] as const;
type ConnectionEventType = (typeof CONNECTION_EVENTS)[number];

const upperFirstChars = (value: string) => {
  return value.charAt(0).toUpperCase().concat(value.slice(1));
};

function createConnection(serverUrl: string, roomId: ChatRoomIdType) {
  let connectedCallback: () => void;
  let timeout = 0;
  return {
    connect() {
      timeout = setTimeout(() => {
        if (connectedCallback) {
          connectedCallback();
        }
      }, 100);
    },
    on(event: ConnectionEventType, callback: () => void) {
      if (event !== 'connected') {
        throw Error('Only "connected" event is supported.');
      }
      connectedCallback = callback;
    },
    disconnect() {
      clearTimeout(timeout);
    },
    serverInfo: {
      serverUrl,
      roomId,
    },
  };
}

export {
  CHAT_IDS,
  CONNECTION_EVENTS,
  DEFAULT_CHAT_ROOM_ID,
  DEFAULT_THEME,
  THEME_ARRAY,
  createConnection,
  upperFirstChars,
};
export type { ChatRoomIdType, ThemeChatRoomType };
