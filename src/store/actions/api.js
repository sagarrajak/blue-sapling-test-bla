/**
 *
 * @param {String} uniqueKey
 */
export const getApiHelper = (uniqueKey) => {
  const onStart = `${uniqueKey}_onStart`;
  const onFailure = `${uniqueKey}_onFailure`;
  const onSuccess = `${uniqueKey}_onSuccess`;
  const onEnd = `${uniqueKey}_onEnd`;

  const initState = {
    loading: false,
    success: null,
    error: null,
    url: "",
    method: "",
    data: "",
  };

  const apiReducer = (
    state = {
      ...initState,
    },
    action
  ) => {
    switch (action.type) {
      case onStart:
        return {
          ...initState,
          loading: true,
          url: action.payload.url,
          method: action.payload.method,
          data: action.payload.data,
        };
      case onSuccess: {
        return {
          ...state,
          success: action.payload,
          error: null,
        };
      }
      case onFailure: {
        return {
          ...state,
          success: null,
          error: action.payload,
        };
      }
      case onEnd: {
        return {
          ...state,
          loading: false,
        };
      }
      default:
        return state;
    }
  };

  return {
    reducer: apiReducer,
    uniqueKey,
    onStart,
    onFailure,
    onSuccess,
    onEnd,
  };
};
