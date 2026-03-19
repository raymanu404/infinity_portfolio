import { HOOKS_SUB_SECTION_ARRAY } from '@/pages/Projects/KnowledgeHub/constants';
import { DASH_SPLIT_STRING } from '@/pages/Projects/KnowledgeHub/Contents/Tabs/pages/Hooks/constants';
import { getDefaultSubTabSelectedIndex } from '@/pages/Projects/KnowledgeHub/helpful';
import { useCallback, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { SearchQueryParamsT, SearchQueryParamsV } from '../interfaces';

interface UrlQueryType {
  openAll: boolean;
  fullMode: boolean;
}

// TODO: Refactor this hook to be more generic and reusable for other sections, not only hooks. Maybe we can pass the array of sub sections as a parameter and the main section hash as well.
export const useUrlQueryParams = () => {
  // TODO: Fix toggle issue for openAll, also we have to open just the current section, not all the sections when we toggle the switcher, maybe we can pass the section
  const { hash } = useLocation();
  const [value, setValue] = useState<number>(+getDefaultSubTabSelectedIndex(hash));
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleURLQueryParams = (hashValueIndex: number, checked?: boolean) => {
    const hooksCategoryTypeValues = Object.values(HOOKS_SUB_SECTION_ARRAY);

    console.log({ hooksCategoryTypeValues });
    let finalHashValue = hash;
    if (hash) {
      const hashValue = hooksCategoryTypeValues[hashValueIndex];
      // const primarySectionHash = hash.split('#')[1].split(DASH_SPLIT_STRING)[0]; // UPDATE WHEN WE HAVE GENERIC METHOD FOR ALL SECTIONS
      finalHashValue = 'hooks' + DASH_SPLIT_STRING + hashValue;
    }

    console.log({ finalHashValue, hash });

    if (typeof checked !== 'undefined') {
      navigate({
        hash: finalHashValue,
        // search: `openAll=${checked}`,
      });
    } else {
      navigate({
        hash: finalHashValue,
        // search: `openAll=${DEFAULT_OPEN_ALL}`,
      });
    }

    setValue(+hashValueIndex);
  };

  //TODO: check openAll toggle (fucks everything) and fix this when we have multiple values for searchParams (openAll + fullModal) in URL
  // check also for both (all) queryParams for sections when you have all of them, it opens all LEARNING_SECTIONS into SectionContentList
  const handleSearchParams = useCallback(
    (key: SearchQueryParamsT, value?: string | boolean | number | undefined) => {
      // console.log({ key, value });

      const url = new URLSearchParams();

      if (value) {
        url.set(key.toString(), `${value}`);
      } else {
        url.delete(key.toString());
      }

      const search = url
        .entries()
        .map(x => `${x[0]}=${x[1]}`)
        .reduce(
          (acc, current, index) => (index === url.size - 1 ? acc + current : acc + current + '&'),
          '',
        );

      navigate({
        hash, // TODO: BUG, check why is previous hash value/ why hash value is changed between rerendering of the openModal component
        search: search,
      });
    },
    [hash, navigate],
  );

  const getUrlQuery = {
    openAll: !!searchParams.get(SearchQueryParamsV.openAll),
    fullMode: !!searchParams.get(SearchQueryParamsV.fullMode),
  } as UrlQueryType;

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
