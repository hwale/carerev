import { createReducer } from '@reduxjs/toolkit';
import { Country, CountryState } from './types';

export const key = 'country';

export const initialState: CountryState = {
  country: {} as Country,
  error: undefined,
  isLoading: false,
};

export const countryReducer = createReducer(initialState, {
  FETCH_COUNTRY_BY_ID_REQUEST: (state, action) => {
    state.isLoading = true;
  },
  FETCH_COUNTRY_BY_ID_SUCCESS: (state, action) => {
    state.isLoading = false;
    state.country = action.payload.country;
  },
  FETCH_COUNTRY_BY_ID_ERROR: (state, action) => {
    state.isLoading = false;
    state.error = action.payload.error;
  },
});
