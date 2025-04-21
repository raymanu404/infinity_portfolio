import ComponentsSection from './Contents/ComponentsSection';
import { ContentI } from './interfaces';

const LEARNING_SECTIONS: ContentI[] = [
  {
    title: 'Components',
    elementId: 'components-section',
    children: <ComponentsSection />,
    subTitle: 'We need to understand the components',
  },
  {
    title: 'Props Vs State',
    elementId: 'props-vs-state-section',
    children: <ComponentsSection />,
  },
  {
    title: 'Conditional Rendering',
    elementId: 'conditional-rendering-section',
    children: <ComponentsSection />,
  },
];

export { LEARNING_SECTIONS };
