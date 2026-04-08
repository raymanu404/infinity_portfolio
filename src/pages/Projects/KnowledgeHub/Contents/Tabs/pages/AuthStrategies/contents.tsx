import { PageContentI } from '../interfaces';
import { WhatIsAuth } from './01.Introduction/Examples';

const INTRODUCTION_TO_AUTH_PAGE_CONTENTS: PageContentI[] = [
  {
    elementId: 'what-is-auth-example-id',
    title: 'What is Authentication?',
    children: <WhatIsAuth />,
  },
];

export { INTRODUCTION_TO_AUTH_PAGE_CONTENTS };
