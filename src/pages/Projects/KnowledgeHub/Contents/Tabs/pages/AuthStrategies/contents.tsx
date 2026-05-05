import { PageContentI } from '../interfaces';
import {
  AuthTaskMangerApp,
  AuthVsAuthorization,
  CommonAuthFlows,
  WhatIsAuth,
} from './01.Introduction/Examples';

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

const AUTH_TASK_MANAGER_APP_CONTENTS: PageContentI[] = [
  {
    elementId: 'introduction-auth-task-manager-app',
    title: 'Introduction Auth Task Manager App',
    children: <AuthTaskMangerApp />,
  },
];

export { AUTH_TASK_MANAGER_APP_CONTENTS, INTRODUCTION_TO_AUTH_PAGE_CONTENTS };
