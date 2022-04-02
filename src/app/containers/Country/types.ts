/* --- STATE --- */

export interface Country {
  code: string;
  code_iso2: string;
  code_iso3: string;
  currency_code: string;
  data_type: string;
  href: string;
  id: string;
  name: string;
}

export interface CountryState {
  isLoading: boolean;
  error?: string;
  country: Country;
}

export interface CountryRouteParam {
  id: string;
}
