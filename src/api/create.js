import { create } from 'apisauce';

/*
 * apisauce is supported by reactotron. Awesomeee.
 */

// Create a base for API.
const api = create({
  baseURL: 'https://api.com/v1.0/', // Production. TODO: choose TST or PROD based on env.
});

// TODO: Add headers for authentication if authenticated.

export default api;
