import { PageContentI } from '../interfaces';
import { AuthVsAuthorization, WhatIsAuth } from './01.Introduction/Examples';

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
];

export { INTRODUCTION_TO_AUTH_PAGE_CONTENTS };
