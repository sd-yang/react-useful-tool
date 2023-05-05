import { useCallback, useState } from 'react';

interface DefaultPageProps {
  current: number;
  pageSize: number;
}

interface PageOptionsProps {}

export const usePagination = (
  defaultPage: DefaultPageProps,
  options: PageOptionsProps
) => {
  const [pageData, setPageData] = useState(defaultPage);

  const onChange = useCallback(
    (page: number) => {
      setPageData((prev) => ({ ...prev, current: page }));
    },
    [pageData.pageSize]
  );

  return { onChange };
};
