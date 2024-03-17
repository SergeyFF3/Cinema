import { Button } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { IOnlyValueProp } from '../../../model/types/person';
import { PersonFactsListItem } from '../PersonFactsListItem';

export const PersonFactsList: FC<{ list: IOnlyValueProp[] }> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const textButton = isOpen ? 'Скрыть' : 'Читать далее';

  useEffect(() => {
    if (listRef.current && list.length > 5) {
      const firstFiveHeight = Array.from(listRef.current.children)
        .slice(0, 6)
        .reduce((acc, child) => acc + (child as HTMLElement).offsetHeight, 0);
      setMaxHeight(firstFiveHeight);
    }
  }, [list.length]);

  if (list.length < 6) {
    return (
      <ul>
        {list.map(({ value }) => (
          <PersonFactsListItem key={value} value={value} />
        ))}
      </ul>
    );
  }

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
          <PersonFactsListItem key={value} value={value} />
        ))}
      </ul>
      <Button onClick={() => setIsOpen(!isOpen)}>{textButton}</Button>
    </>
  );
};
