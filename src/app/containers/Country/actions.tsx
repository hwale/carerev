import { createAction } from '@reduxjs/toolkit';

const fetchCountryById = createAction(
  'FETCH_COUNTRY_BY_ID_REQUEST',
  (id: string) => {
    return {
      payload: {
        id,
      },
    };
  },
);

const fetchCountryByIdSuccess = createAction(
  'FETCH_COUNTRY_BY_ID_SUCCESS',
  country => {
    return {
      payload: {
        country,
      },
    };
  },
);

const fetchCountryByIdError = createAction(
  'FETCH_COUNTRY_BY_ID_ERROR',
  error => {
    return {
      payload: {
        error,
      },
    };
  },
);

export const actions = {
  fetchCountryById,
  fetchCountryByIdSuccess,
  fetchCountryByIdError,
};
