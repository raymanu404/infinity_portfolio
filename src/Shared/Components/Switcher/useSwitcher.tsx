import { useUrlQueryParams } from '@/Shared/Hooks';
import { useState } from 'react';
import { Switcher } from './Switcher';

interface SwitcherProps {
  label?: string;
  isClosed?: boolean;
  showIcons?: boolean;
}

const useSwitcher = (props: SwitcherProps) => {
  const { isClosed, label, showIcons } = props;
  const [isSwitched, setIsSwitched] = useState(isClosed);
  const { getUrlQuery } = useUrlQueryParams();

  const isSwitchedLocal = getUrlQuery ? !!getUrlQuery.openAll : (isSwitched ?? false);

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
