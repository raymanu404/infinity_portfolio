import { HOOKS_SUB_SECTION } from '@/pages/Projects/KnowledgeHub/constants';
import { DASH_SPLIT_STRING } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/Hooks/constants';
import { getDefaultSubTabSelectedIndex } from '@/pages/Projects/KnowledgeHub/helpful';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface UrlQueryType {
  openAll: boolean;
}

export const useUrlQueryParams = () => {
  const { hash } = useLocation();
  const [value, setValue] = useState(getDefaultSubTabSelectedIndex(hash));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleURLQueryParams = (hashValueIndex: number, checked?: boolean) => {
    const hooksCategoryTypeValues = Object.values(HOOKS_SUB_SECTION);

    const hashValue = hooksCategoryTypeValues[hashValueIndex];
    const primarySectionHash = hash.split('#')[1].split(DASH_SPLIT_STRING)[0];
    const finalHashValue = primarySectionHash + DASH_SPLIT_STRING + hashValue;

    if (typeof checked !== 'undefined') {
      navigate({
        hash: finalHashValue,
        search: `openAll=${checked}`,
      });
    } else {
      navigate({
        hash: finalHashValue,
        // search: `openAll=${DEFAULT_OPEN_ALL}`,
      });
    }

    setValue(+hashValueIndex);
  };

  const handleSearchParams = (checked: boolean) => {
    setSearchParams(searchParams => {
      searchParams.set('openAll', `${checked}`);
      return searchParams;
    });
  };

  const getUrlQuery = useMemo(
    () => ({ openAll: !!searchParams.get('openAll') }) as UrlQueryType,
    [searchParams],
  );

  return {
    handleURLQueryParams,
    hashValueIndex: +value,
    handleSearchParams,
    searchParams,
    hash,
    getUrlQuery,
  };
};

export type { UrlQueryType };
