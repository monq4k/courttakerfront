import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const InfinityScroll = ({
  fetchOptions,
  page,
  setPage,
  requestAllProducts,
  pageLimit,
}) => {
  const lastProductRef = useRef(null);
  let previousY = 0;

  const handleLoadMore = useCallback(
    (entries) => {
      const target = entries[0];
      const currentY = target.boundingClientRect.y;
      const { isIntersecting } = target;

      if (currentY < previousY && isIntersecting && page <= pageLimit) {
        requestAllProducts(fetchOptions).then(() => {
          setPage((state) => state + 1);
        });
      }
      previousY = currentY;
    },
    [fetchOptions],
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25,
    };

    const observer = new IntersectionObserver(handleLoadMore, observerOptions);

    if (lastProductRef.current) {
      observer.observe(lastProductRef.current);
    }

    return () => observer.disconnect();
  }, [lastProductRef, handleLoadMore]);

  return <div ref={lastProductRef} />;
};

InfinityScroll.propTypes = {
  fetchOptions: PropTypes.shape({
    page: PropTypes.number,
    limit: PropTypes.number,
    title_like: PropTypes.string,
  }).isRequired,
  page: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  requestAllProducts: PropTypes.func.isRequired,
};

export default InfinityScroll;
