import { create } from 'apisauce';

/*
 * apisauce is supported by reactotron. Awesomeee.
 */

// Create a base for API.
const api = create({
  baseURL: 'https://vefthjonusta.samskip.is/SW3.L/Samskip.AuthAPI', // Production. TODO: choose TST or PROD based on env.
});

// TODO: Add headers for authentication if authenticated.

export default api;
