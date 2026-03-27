import { useUrlQueryParams } from '@/Shared/Hooks';
import { useCallback, useState } from 'react';

interface Props {
  fullModal?: boolean;
}

const useModal = (props?: Props) => {
  const { fullModal } = props || {};
  const [isOpen, setIsOpen] = useState(false);

  const { handleSearchParams } = useUrlQueryParams();

  const handleOpen = useCallback(() => {
    if (fullModal) {
      handleSearchParams('fullMode', true);
    }
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    if (fullModal) {
      handleSearchParams('fullMode', undefined);
    }
    setIsOpen(false);
  }, []);

  return { isOpen, handleOpen, handleClose };
};

export { useModal };
