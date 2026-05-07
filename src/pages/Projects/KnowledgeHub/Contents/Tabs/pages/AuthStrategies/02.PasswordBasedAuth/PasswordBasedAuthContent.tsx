import React from 'react';
import { TemplatePageContent } from '../../components';
import { PASSWORD_BASED_AUTH_PAGE_CONTENTS } from '../contents';

const PAGE_TITLE = 'Password based Authentication';

const PasswordBasedAuthContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={PASSWORD_BASED_AUTH_PAGE_CONTENTS}
    />
  );
};

PasswordBasedAuthContent.displayName = 'PasswordBasedAuthContent';

export default PasswordBasedAuthContent;
