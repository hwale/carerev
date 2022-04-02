import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { actions } from './actions';

export function* fetchCountryById(action) {
  const requestURL = `https://api.carerev.com/api/v1/countries/877`;

  try {
    const country = yield call(request, requestURL);

    if (country) {
      yield put(actions.fetchCountryByIdSuccess(country));
    } else {
      yield put(actions.fetchCountryByIdError('Country not found.'));
    }
  } catch (err) {
    const json = yield err.response.json();
    yield put(actions.fetchCountryByIdError(json.error_message));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* saga() {
  yield takeLatest(actions.fetchCountryById.type, fetchCountryById);
}
