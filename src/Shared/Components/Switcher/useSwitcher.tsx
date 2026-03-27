import { DEFAULT_OPEN_ALL } from '@/pages/Projects/KnowledgeHub/constants';
import { useUrlQueryParams } from '@/Shared/Hooks';
import { useState } from 'react';

interface SwitcherProps {
  label?: string;
  isClosed?: boolean;
  showIcons?: boolean;
}
//TODO: Fix Toggle all issue
const useSwitcher = () => {
  const [isSwitched, setIsSwitched] = useState(DEFAULT_OPEN_ALL);
  const { getUrlQuery } = useUrlQueryParams();

  const isSwitchedLocal = getUrlQuery ? !!getUrlQuery.openAll : (isSwitched ?? false);

  return { isSwitched, isSwitchedLocal, setIsSwitched };
};

export { useSwitcher };
export type { SwitcherProps };
