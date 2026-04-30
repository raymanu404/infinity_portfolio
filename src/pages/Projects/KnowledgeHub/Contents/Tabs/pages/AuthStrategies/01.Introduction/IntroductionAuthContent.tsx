import { useModal } from '@/Shared/Components/Modal/useModal';
import { BookCheck } from 'lucide-react';
import React from 'react';
import { TemplatePageContent } from '../../components';
import { INTRODUCTION_TO_AUTH_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Introduction to Authentication';

const IntroductionAuthContent: React.FC = () => {
  const {
    handleOpen: handleAuthTaskManagerOpen,
    isOpen: isAuthTaskManagerOpen,
    handleClose: handleAuthTaskManagerClose,
  } = useModal();

  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      appMenus={[
        {
          appValueName: 'authTaskManager',
          handleDialogOpen: handleAuthTaskManagerOpen,
          isOpenDialog: isAuthTaskManagerOpen,
          icon: <BookCheck />,
          description: 'Task Manager Auth Application',
          children: <div>Task Manager Auth Application</div>,
          handleClose: handleAuthTaskManagerClose,
        },
        {
          appValueName: 'authTaskManager',
          handleDialogOpen: handleAuthTaskManagerOpen,
          isOpenDialog: isAuthTaskManagerOpen,
          icon: <BookCheck />,
        },
        {
          appValueName: 'authTaskManager',
          handleDialogOpen: handleAuthTaskManagerOpen,
          isOpenDialog: isAuthTaskManagerOpen,
          icon: <BookCheck />,
        },
      ]}
      pageContentList={INTRODUCTION_TO_AUTH_PAGE_CONTENTS}
    />
  );
};

IntroductionAuthContent.displayName = 'IntroductionAuthContent';

export default IntroductionAuthContent;
