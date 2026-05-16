import IntroductionContent from '@/pages/Apps/TaskManagerApp/IntroductionContent';
import { PageContentI } from '../interfaces';
import { AuthVsAuthorization, CommonAuthFlows, WhatIsAuth } from './01.Introduction/Examples';
import { PasswordAndSalting } from './02.PasswordBasedAuth/Examples';

const INTRODUCTION_TO_AUTH_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'what-is-auth-example-id',
    title: 'What is Authentication?',
    children: <WhatIsAuth />,
  },
  {
    elementId: 'authentication-vs-authorization-example-id',
    title: 'Authentication vs. Authorization',
    children: <AuthVsAuthorization />,
  },
  {
    elementId: 'common-authentication-flows-example-id',
    title: 'Common Authentication Flows:A high-level Overview',
    children: <CommonAuthFlows />,
  },
];

const PASSWORD_BASED_AUTH_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'understanding-password-hashing-salting-example-id',
    title: 'Password Hashing & Salting',
    children: <PasswordAndSalting />,
  },
];

const AUTH_TASK_MANAGER_APP_CONTENTS: PageContentI[] = [
  {
    elementId: 'introduction-auth-task-manager-app',
    title: 'Introduction Auth Task Manager App',
    children: <IntroductionContent />,
  },
];

export {
  AUTH_TASK_MANAGER_APP_CONTENTS,
  INTRODUCTION_TO_AUTH_PAGE_CONTENTS,
  PASSWORD_BASED_AUTH_PAGE_CONTENTS,
};
