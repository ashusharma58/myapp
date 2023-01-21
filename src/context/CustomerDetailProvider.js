import React, { createContext, FC, ReactNode, useReducer } from "react";
import { Postapi } from "../services";

const CustomerDetailActionType = {
  CUSTOMER_DETAIL_REQUEST: "CUSTOMER_DETAIL_REQUEST",
  CUSTOMER_DETAIL_SUCCESS: "CUSTOMER_DETAIL_SUCCESS",
  CUSTOMER_DETAIL_ERROR: "CUSTOMER_DETAIL_ERROR",
};
const DataStatus = {
  NOT_LOADED: "NOT_LOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERRORED: "ERRORED",
};

const customerDetailReducer = (state, action) => {
  switch (action.type) {
    case CustomerDetailActionType.CUSTOMER_DETAIL_REQUEST:
      return {
        ...state,
        customerStatus: DataStatus.LOADING,
      };
    case CustomerDetailActionType.CUSTOMER_DETAIL_ERROR:
      return {
        ...state,
        customerStatus: DataStatus.ERRORED,
        customerError: action.payload,
      };
    case CustomerDetailActionType.CUSTOMER_DETAIL_SUCCESS:
      return {
        ...state,
        customerStatus: DataStatus.LOADED,
        ...action.payload,
      };
    default:
      return state;
  }
};
const initialState = {
  customerId: "900066016",
  mobile: "8107357801",
  email: "test@gmail.com",
  timestamp: new Date(),
  customerStatus: DataStatus.LOADED,
  accountDetail: [],
};
export const CustomerContext = createContext({
  ...initialState,
});
export const CustomerDetailsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(customerDetailReducer, initialState);

  const getCustomerDetail = (url, data) => {
    dispatch({ type: CustomerDetailActionType.CUSTOMER_DETAIL_REQUEST });
    return Postapi(url, data)
      .then((respData) => {
        console.log("respData", respData);
        dispatch({
          type: CustomerDetailActionType.CUSTOMER_DETAIL_SUCCESS,
          payload: respData,
        });
        // return respData;
      })
      .catch((e) => {
        dispatch({
          type: CustomerDetailActionType.CUSTOMER_DETAIL_ERROR,
          payload: e,
        });
        throw e;
      });
  };
  return (
    <CustomerContext.Provider
      value={{
        ...state,
        action: {
          getCustomerDetail,
        },
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};
