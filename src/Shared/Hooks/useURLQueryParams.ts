import { HOOKS_SUB_SECTION } from '@/pages/Projects/KnowledgeHub/constants';
import { DASH_SPLIT_STRING } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/constants';
import { getDefaultSubTabSelectedIndex } from '@/pages/Projects/KnowledgeHub/helpful';
import { useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

interface UrlQueryType {
  openAll: boolean;
}

export const useUrlQueryParams = () => {
  const { hash } = useLocation();
  const [value, setValue] = useState(getDefaultSubTabSelectedIndex(hash));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleURLQueryParams = (hashValueIndex: number, omitSearch?: boolean) => {
    const hooksCategoryTypeValues = Object.values(HOOKS_SUB_SECTION);

    console.log(hooksCategoryTypeValues);
    const hashValue = hooksCategoryTypeValues[hashValueIndex];
    const primarySectionHash = hash.split('#')[1].split(DASH_SPLIT_STRING)[0];
    const finalHashValue = primarySectionHash + DASH_SPLIT_STRING + hashValue;

    if (omitSearch) {
      navigate({
        hash: finalHashValue,
      });
    } else {
      navigate({
        hash: finalHashValue,
        search: 'openAll=true',
      });
    }

    setValue(hashValueIndex);
  };

  const handleSearchParams = (checked: boolean) => {
    const urlQuery = { openAll: !!searchParams.get('openAll') } as UrlQueryType;
    setSearchParams(searchParams => {
      searchParams.set('openAll', `${checked}`);
      return searchParams;
    });

    return urlQuery;
  };

  return { handleURLQueryParams, hashValueIndex: value, handleSearchParams };
};

export type { UrlQueryType };
