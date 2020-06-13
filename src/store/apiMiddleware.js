import axios from "axios";
import { apiEnd, apiError, apiStart } from "./actions/api";
import { API } from "./actions/types";

const apiMiddleware = ({ dispatch }) => (next) => (action) => {
  next(action);

  if (action.type !== API) return;

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers,
  } = action.payload;

  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios default configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `Bearer`;

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      dispatch(onSuccess(data));
    })
    .catch((error) => {
      dispatch(apiError(error));
      dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
