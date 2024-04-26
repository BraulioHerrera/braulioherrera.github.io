import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { marvelHomeCharacters } from '@api';
import { CharacterCard, Loading, Pagination } from '@components/common';
import { ErrorPage } from '@components/ErrorPage/ErrorPage';

export function HomeRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuery = useMemo(() => Math.floor(Number(searchParams.get('page'))), [searchParams]);
  const currentPage = useMemo(
    () => (pageQuery <= 1 || Number.isNaN(pageQuery) ? 1 : pageQuery),
    [pageQuery]
  );
  const offsetCalculation = useMemo(() => currentPage * 20 - 20, [currentPage]);

  const [pageNumber, setPageNumber] = useState(currentPage.toString());
  const [enabled, setEnable] = useState(true);

  const { data, isLoading, error } = useQuery(
    ['marvel-home', offsetCalculation],
    marvelHomeCharacters,
    { enabled }
  );

  function handlePagination(type: 'next' | 'prev') {
    const pageCalc = type === 'next' ? currentPage + 1 : currentPage - 1;
    const newPageNumber = pageCalc <= 1 ? 1 : pageCalc;
    setSearchParams({ page: newPageNumber.toString() });
    setPageNumber(newPageNumber.toString());
  }

  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pageNumber === '') return;
    setSearchParams({ page: pageNumber });
  }

  function handleOnChange(event: FormEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    const valueToNumber = Number(value);
    const isNaN = Number.isNaN(valueToNumber);
    const newPageNumber = isNaN || value === '' ? '' : valueToNumber.toString();
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    if (error) {
      setEnable(false);
    }
  }, [error]);

  if (error) return <ErrorPage showLink={false} />;

  if (isLoading) return <Loading />;

  if (!data) return null;

  const { results, total } = data;
  const pageTotal = Math.ceil(total / 20);

  if (!Boolean(results.length)) return <ErrorPage message="No hay mas contenido" />;

  return (
    <>
      <Pagination
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        handlePagination={handlePagination}
        pageNumber={pageNumber}
        pageTotal={pageTotal}
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8">
        {results.map((characterData) => {
          const { id } = characterData;
          return <CharacterCard data={characterData} key={id} />;
        })}
      </div>
      <Pagination
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        handlePagination={handlePagination}
        pageNumber={pageNumber}
        pageTotal={pageTotal}
      />
    </>
  );
}
