import { PageContentI } from '../interfaces';
import ReferenceValuesExample from './Miscellaneous/Examples/ReferenceValuesExample';

//TODO: https://react.dev/learn/escape-hatches TAKE INSPIRATION FROM THIS ARTICLE AND ADD MORE CONTENTS
// Basically, we should have a page for each article, or more examples related to the topic
const ESCAPE_HATCHES_PAGES_CONTENT: PageContentI[] = [
  {
    elementId: 'reference-values-with-ref-id',
    title: 'Reference Values with Ref',
    children: <ReferenceValuesExample />,
  },
];

export { ESCAPE_HATCHES_PAGES_CONTENT };
