const serverUrl = 'http://127.0.0.1:8080';
const url = {
  getAllClients: `${serverUrl}/user/get/all`,
  getClient: `${serverUrl}/user/get/id/`,
  addClient: `${serverUrl}/user/add`,
  deleteClient: `${serverUrl}/user/delete/`,
  searchClients: `${serverUrl}/user/search/`,
  editClient: `${serverUrl}/user/edit/`,
  signUp: `${serverUrl}/user/signup`
};
export default url;
