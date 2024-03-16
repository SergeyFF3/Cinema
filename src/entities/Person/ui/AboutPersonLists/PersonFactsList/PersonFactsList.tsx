import { Button, Typography } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { IOnlyValueProp } from '../../../model/types/person';

export const PersonFactsList: FC<{ list: IOnlyValueProp[] }> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const textButton = isOpen ? 'Скрыть' : 'Читать далее';

  useEffect(() => {
    if (listRef.current) {
      const firstFiveHeight = Array.from(listRef.current.children)
        .slice(0, 6)
        .reduce((acc, child) => acc + (child as HTMLElement).offsetHeight, 0);
      setMaxHeight(firstFiveHeight);
    }
  }, [list]);

  return (
    <>
      <ul
        ref={listRef}
        style={{
          maxHeight: isOpen ? '1000px' : `${maxHeight}px`,
          overflow: 'hidden',
          transition: 'max-height .5s ease',
        }}
      >
        {list.map(({ value }) => (
          <li key={value}>
            <Typography color="gray" marginBottom="10px">
              {value}
            </Typography>
          </li>
        ))}
      </ul>
      <Button onClick={() => setIsOpen(!isOpen)}>{textButton}</Button>
    </>
  );
};
