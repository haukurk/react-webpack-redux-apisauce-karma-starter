import api from '../create';

/**
 * Send a login POST request to the AuthAPI. EXAMPLE!
 * @param  {[string]} username is the username.
 * @param  {[string]} password is the password
 * @param  {[int]} subsys = 1000 is the company number.
 * @return {[promise based response from apisauce]}
 */
export function login(username, password, subsys = 1000) {
  return api.post('/auth/login',
  {
    "Username": username,
    "Password": password,
    "SubSys": subsys
  });
}
