import { TabContentI } from './interfaces';

const idAttributeProps = (index: number) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const getArrayGroupedByVariant = (tabs: TabContentI[]) => {
  //get all variants grouped
  //return an sub array for each variant grouped

  const result: { key: string; array: [] }[] = [];

  // tabs.forEach(item =>{
  //   result.push({key: })
  // })

  return tabs.filter(x => x.variant === 'STATE HOOKS');
};

export { getArrayGroupedByVariant, idAttributeProps };
