import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { saga } from './saga';
import { key, countryReducer } from './reducer';
import { actions } from './actions';
import { selectCountry, selectLoading, selectError } from './selectors';
import { LoadingIndicator } from 'app/components/LoadingIndicator';
import { PageWrapper } from 'app/components/PageWrapper';
import { CountryRouteParam } from './types';

export function Country() {
  useInjectReducer({ key: key, reducer: countryReducer });
  useInjectSaga({ key: key, saga });

  const { name, currency_code } = useSelector(selectCountry);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const params: CountryRouteParam = useParams();
  useEffect(() => {
    const { id } = params;
    if (id) {
      dispatch(actions.fetchCountryById(id));
    }
  }, [dispatch, params]);

  return (
    <PageWrapper>
      <h1>Country</h1>
      {isLoading && <LoadingIndicator small />}
      {name && currency_code ? (
        <CountryContainer>
          {name} - {currency_code}
        </CountryContainer>
      ) : error ? (
        <ErrorText>{error}</ErrorText>
      ) : null}
    </PageWrapper>
  );
}

const CountryContainer = styled.div`
  color: ${p => p.theme.primary};
`;

const ErrorText = styled.span`
  color: ${p => p.theme.text};
`;
