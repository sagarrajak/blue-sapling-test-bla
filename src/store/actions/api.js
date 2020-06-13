import { API_END, API_ERROR, API_START } from "./types";

export const apiStart = (payload) => ({
  type: API_START,
  payload,
});

export const apiEnd = (payload) => ({
  type: API_END,
  payload,
});

export const apiError = (error) => ({
  type: API_ERROR,
  error,
});
