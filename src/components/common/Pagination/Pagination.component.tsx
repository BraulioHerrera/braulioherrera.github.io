import { FormEvent } from 'react';

import { Button } from './Button/Button';

type Props = {
  pageNumber: string;
  pageTotal: number;
  handlePagination: (type: 'next' | 'prev') => void;
  handleOnChange: (event: FormEvent<HTMLInputElement>) => void;
  handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function Pagination({
  handleOnChange,
  handleOnSubmit,
  handlePagination,
  pageNumber,
  pageTotal,
}: Props) {
  return (
    <div className="flex justify-center">
      <Button type="prev" action={() => handlePagination('prev')} />
      <form className="h-14 w-14 border-2 flex" onSubmit={handleOnSubmit}>
        <input
          className="w-full h-full text-center bg-transparent outline-none"
          value={pageNumber}
          type="text"
          onChange={handleOnChange}
        />
      </form>
      <div className="h-14 w-7 flex justify-center items-center text-lg">-</div>
      <div className="h-14 w-14 border-2 flex justify-center items-center">{pageTotal}</div>
      <Button type="next" action={() => handlePagination('next')} />
    </div>
  );
}
