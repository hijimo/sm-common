import { useState, useCallback, useEffect } from 'react';

const useSwiper = () => {
  const [swiper, updateSwiper] = useState<any>(null);
  const [isBeginning, setIsBeginning] = useState<any>(true);
  const [isEnd, setIsEnd] = useState<any>(false);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const goTo = (index: number) => {
    if (swiper !== null) {
      swiper.slideTo(index);
    }
  };

  const updateIndex = useCallback(() => {
    updateCurrentIndex(swiper.realIndex);

    if (swiper.isBeginning) {
      setIsBeginning(true);
      setIsEnd(false);
    } else if (swiper.isEnd) {
      setIsBeginning(false);
      setIsEnd(true);
    } else {
      setIsBeginning(false);
      setIsEnd(false);
    }
  }, [swiper]);

  const onReachBeginning = useCallback(() => {
    setIsBeginning(true);
    setIsEnd(false);
  }, [swiper]);

  const onReachEnd = useCallback(() => {
    setIsBeginning(false);
    setIsEnd(true);
  }, [swiper]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', updateIndex);
      swiper.on('reachBeginning', onReachBeginning);
      swiper.on('reachEnd', onReachEnd);
    }

    return () => {
      if (swiper !== null) {
        swiper.off('slideChange', updateIndex);
        swiper.off('reachBeginning', onReachBeginning);
        swiper.off('reachEnd', onReachEnd);
      }
    };
  }, [swiper, updateIndex]);

  useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', updateIndex);
    }
  }, [swiper]);

  return {
    swiper,
    updateSwiper,
    currentIndex,
    goNext,
    goPrev,
    goTo,
    isBeginning,
    isEnd,
  };
};

export default useSwiper;
