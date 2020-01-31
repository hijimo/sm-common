import { useEffect, useReducer } from 'react';

const dataFetchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data,
        timestamp: action.payload.timestamp,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        data: action.payload.data,
        timestamp: action.payload.timestamp,
      };
    default:
      throw new Error();
  }
};

const useData = (dataLoader: any, initialData: any) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: true,
    isError: false,
    data: initialData,
    timestamp: -1,
  });

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await dataLoader();

        if (!didCancel) {
          if (result.data) {
            dispatch({ type: 'FETCH_SUCCESS', payload: result });
          } else {
            dispatch({ type: 'FETCH_FAILURE' });
          }
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [dataLoader]);

  return { ...state, dispatch };
};

export default useData;
