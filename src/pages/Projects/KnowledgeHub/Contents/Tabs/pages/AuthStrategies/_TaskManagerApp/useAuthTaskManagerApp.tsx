import { OPTIONS_APP_MENU_TYPE } from '@/pages/Projects/KnowledgeHub/constants';
import { useModal } from '@/Shared/Components/Modal/useModal';
import { useLocalStorage } from '@/Shared/Hooks';
import { BookCheck } from 'lucide-react';
import { useCallback, useEffect, useEffectEvent, useMemo } from 'react';
import { AppMenuProps } from '../../components/PagePanelHeadTitle';
import TaskManagerAppContent from './TaskManagerAppContent';

const useAuthTaskManagerApp = () => {
  const {
    handleOpen: handleAuthTaskManagerOpen,
    isOpen: isAuthTaskManagerOpen,
    handleClose: handleAuthTaskManagerClose,
  } = useModal();

  const { setItem, getItem } = useLocalStorage();

  const openAuthTaskManagerApp = useEffectEvent(() => {
    const authTaskManagerValue = getItem(OPTIONS_APP_MENU_TYPE.authTaskManager) as
      | boolean
      | undefined;

    if (authTaskManagerValue) {
      handleAuthTaskManagerOpen();
    }
  });

  const openAuthTaskManagerHandler = useCallback(() => {
    setItem(OPTIONS_APP_MENU_TYPE.authTaskManager, true);
    handleAuthTaskManagerOpen();
  }, [handleAuthTaskManagerOpen, setItem]);

  const closeAuthTaskManagerHandler = useCallback(() => {
    setItem(OPTIONS_APP_MENU_TYPE.authTaskManager, false);
    handleAuthTaskManagerClose();
  }, [handleAuthTaskManagerClose, setItem]);

  // run once only
  useEffect(() => {
    openAuthTaskManagerApp();
  }, []);

  const AUTH_TASK_MANAGER_APP: AppMenuProps = useMemo(
    () => ({
      appValueName: 'authTaskManager',
      handleDialogOpen: openAuthTaskManagerHandler,
      isOpenDialog: isAuthTaskManagerOpen,
      icon: <BookCheck />,
      description: 'Task Manager Auth Application',
      handleClose: closeAuthTaskManagerHandler,
      children: TaskManagerAppContent,
    }),
    [closeAuthTaskManagerHandler, isAuthTaskManagerOpen, openAuthTaskManagerHandler],
  );

  return { AUTH_TASK_MANAGER_APP };
};

export { useAuthTaskManagerApp };
