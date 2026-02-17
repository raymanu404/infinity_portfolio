import { useUrlQueryParams } from '@/Shared/Hooks';
import { useState } from 'react';
import { Switcher } from './Switcher';

interface SwitcherProps {
  label?: string;
  isClosed?: boolean;
  showIcons?: boolean;
}
//TODO: Fix Toggle all issue
const useSwitcher = (props: SwitcherProps) => {
  const { isClosed, label, showIcons } = props;
  const [isSwitched, setIsSwitched] = useState(isClosed);
  const { getUrlQuery } = useUrlQueryParams();

  const isSwitchedLocal = getUrlQuery ? !!getUrlQuery.openAll : (isSwitched ?? false);

  // TODO: refactor this to not return a component, but just the state and the handler, and move the component to a separate file
  const SwitcherComponent = (
    <Switcher
      isSwitched={isSwitchedLocal}
      setIsSwitched={setIsSwitched}
      label={label}
      showIcons={showIcons}
    />
  );

  return { isSwitched, SwitcherComponent };
};

export { useSwitcher };
export type { SwitcherProps };
