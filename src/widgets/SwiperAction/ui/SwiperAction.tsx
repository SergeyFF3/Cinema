import { FC, ReactNode, useEffect, useRef } from 'react';
import { Swiper, SwiperProps } from 'swiper/react';
import styles from './SwiperAction.module.css';
import 'swiper/css/navigation';
import 'swiper/css';
import { Button } from '@mui/material';

interface ISwiperAction {
  children: ReactNode;
  config: SwiperProps;
}

export const SwiperAction: FC<ISwiperAction> = ({ children, config }) => {
  const swiperButtonPrevRef = useRef<HTMLButtonElement | null>(null);
  const swiperButtonNextRef = useRef<HTMLButtonElement | null>(null);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = swiperButtonPrevRef.current;
      swiperRef.current.params.navigation.nextEl = swiperButtonNextRef.current;

      swiperRef.current.navigation.update();
    }
  }, [swiperButtonPrevRef, swiperButtonNextRef]);

  return (
    <Swiper
      {...config}
      navigation={{
        prevEl: swiperButtonPrevRef.current,
        nextEl: swiperButtonNextRef.current,
      }}
    >
      {children}
      <div className={styles.buttonWrapper}>
        <Button ref={swiperButtonPrevRef} className={styles.prev}>
          Назад
        </Button>
        <Button ref={swiperButtonNextRef} className={styles.next}>
          Дальше
        </Button>
      </div>
    </Swiper>
  );
};
