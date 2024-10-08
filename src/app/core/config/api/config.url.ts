import { endpoint } from '../../constants/endpoints.api';

export const url: string = 'http://localhost:3000/v1/api';
export const BASE_URL = `${url}`;

export const URL_AUTH_SIGNIN = `${BASE_URL}/${endpoint.LOGIN_ENDPOINT}`;
export const URL_AUTH_CHECK_STATUS = `${BASE_URL}/${endpoint.CHECK_STATUS_ENDPOINT}`;
export const URL_AUTH_REFRESH = `${BASE_URL}/${endpoint.REFRESH_ENDPOINT}`;
export const URL_AUTH_CHANGE_PASSWORD = `${BASE_URL}/${endpoint.CHANGE_PASSWORD}`;

export const URL_PERSONAL_ALL = `${BASE_URL}/${endpoint.USUARIO_ENDPOINT}`;
export const URL_ROLES_ALL = `${BASE_URL}/${endpoint.ROLES_ENDPOINT}`;

export const URL_SEXO_ALL = `${BASE_URL}/${endpoint.SEXO_ENDPOINT}`;
