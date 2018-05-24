const serverUrl = process.env.REACT_APP_SERVER_HOST;
const url = {
  getAllClients: `${serverUrl}/user/get/all`,
  getClient: `${serverUrl}/user/get/id/`,
  addClient: `${serverUrl}/user/add`,
  deleteClient: `${serverUrl}/user/delete/`,
  searchClients: `${serverUrl}/user/get/search/`,
  editClient: `${serverUrl}/user/edit/`,
  signUp: `${serverUrl}/user/signup`,
  signIn: `${serverUrl}/user/signin`
};
console.log(url);
export default url;
