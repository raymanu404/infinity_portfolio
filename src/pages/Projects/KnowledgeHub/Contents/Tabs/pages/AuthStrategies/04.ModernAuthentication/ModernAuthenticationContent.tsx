import React from 'react';
import { TemplatePageContent } from '../../components';
import { MODERN_AUTHENTICATION_CONTENTS } from '../contents';

const PAGE_TITLE = 'Modern Authentication';
const DESCRIPTION = 'check https://integrauth.com/academy/passkeys-and-webauthn';

const ModernAuthenticationContent: React.FC = () => {
  return (
    <TemplatePageContent
      pageTitle={PAGE_TITLE}
      pageContentList={MODERN_AUTHENTICATION_CONTENTS}
      description={DESCRIPTION}
    />
  );
};

ModernAuthenticationContent.displayName = 'ModernAuthenticationContent';

export default ModernAuthenticationContent;
