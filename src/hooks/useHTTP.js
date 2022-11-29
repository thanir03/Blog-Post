import { useCallback, useReducer } from "react";
import { handleRequest } from "../utils/api";

const useHTTP = (apiCallDetails) => {
  const inititalHttpState = {
    isLoading: false,
    isSuccess: false,
    error: {
      hasError: false,
      errorMessage: "",
    },
  };
  const reducerHttpStatus = (state, action) => {
    switch (action.type) {
      case "LOADING":
        return {
          isLoading: true,
          isSuccess: false,
          error: {
            hasError: false,
            errorMessage: "",
          },
        };
      case "SUCCESS":
        return {
          isLoading: false,
          isSuccess: true,
          error: {
            hasError: false,
            errorMessage: "",
          },
        };
      case "ERROR":
        return {
          isLoading: false,
          isSuccess: false,
          error: {
            hasError: true,
            errorMessage: action.payload.message,
          },
        };

      default:
        break;
    }
  };
  const [httpStatus, dispatchHttpStatus] = useReducer(
    reducerHttpStatus,
    inititalHttpState
  );

  const apiRequest = useCallback(
    async (postData) => {
      try {
        dispatchHttpStatus({ type: "LOADING" });
        const data = await handleRequest(apiCallDetails(postData));
        dispatchHttpStatus({ type: "SUCCESS" });
        return data;
      } catch (error) {
        dispatchHttpStatus({
          type: "ERROR",
          payload: { message: error.message },
        });
      }
    },
    [apiCallDetails]
  );

  return {
    apiRequest,
    ...httpStatus,
  };
};
export { useHTTP };
