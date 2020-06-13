import axios from "axios";
export const API_ACTION = "api_action";

export const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type !== API_ACTION) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    onStart,
    onEnd,
    uniquekey,
    headers,
  } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = "https://developers.zomato.com/api/v2.1";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common[
    "user-key"
  ] = `fa151c6d43f10c5eaa43e09cfa03673c`;

  if (uniquekey) {
    dispatch({
      type: onStart,
      payload: {
        url,
        method,
        data,
      },
    });
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch({
        type: onSuccess,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: onFailure,
        payload: error,
      });
    })
    .finally(() => {
      if (uniquekey) {
        dispatch({
          type: onEnd,
        });
      }
    });
};
