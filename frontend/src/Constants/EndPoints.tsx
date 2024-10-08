export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
export const LOGIN_URL = `${AUTH_URL}/api/auth/login`;
export const REGISTRATION_URL = `${AUTH_URL}/api/auth/register`;
export const FORGOT_URL = `${AUTH_URL}/api/auth/forgotPassword`;
export const RESETPW_URL = `${AUTH_URL}/api/auth/resetpassword`;
export const PROFILE_URL = `${AUTH_URL}/profile`;
export const GET_GYM = `${BASE_URL}/api/gyms`;
export const GET_REVIEWS = `${BASE_URL}/api/reviews`;
export const BOOKINGS_ENDPOINT = `${BASE_URL}/api/bookings`;
export const GET_GYMS_BY_USER = `${BASE_URL}/api/gyms/user`;
export const GET_ADVERTISEMENT = `${BASE_URL}/api/advertisements`;
export const GET_ADS_BY_GYM = `${BASE_URL}/api/advertisements/gym`;
export const ADS = `${BASE_URL}/api/advertisements`;

