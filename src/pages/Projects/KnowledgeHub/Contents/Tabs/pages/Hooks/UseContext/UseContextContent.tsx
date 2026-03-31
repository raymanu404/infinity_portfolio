import React from 'react';
import { TemplatePageContent } from '../../components';
import { USE_CONTEXT_PAGE_CONTENTS } from '../contents';
import { AuthProvider } from './Contexts/AuthContext';
import { ThemeProvider } from './Contexts/ThemeContext';

const PAGE_TITLE = 'Use Context Hook';

const UseContextContent: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <TemplatePageContent pageTitle={PAGE_TITLE} pageContentList={USE_CONTEXT_PAGE_CONTENTS} />
      </ThemeProvider>
    </AuthProvider>
  );
};

UseContextContent.displayName = 'UseContextContent';

export default UseContextContent;
