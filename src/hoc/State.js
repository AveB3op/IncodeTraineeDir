// import data from '../clients.json';
//
// const Store ={
//     _handlers: [],
//     _flag: [],
//     data,
//     onChange: function(handler) {
//         this._handlers.push(handler);
//     },
//     set: function(value) {
//         this._flag = value;
//         this._handlers.forEach(handler => handler());
//     },
//     get: function() {
//         return this._flag;
//     },
//     getData: function(){
//         return this.data;
//     },
//     addUser: function(userData){
//         this.data = [...this.data, userData];
//     },
//     getUser(id){
//         //id in User.jsx == zipcode
//         return this.data.find((el)=>{
//             return el.address.zipCode === id;
//         });
//     },
//     deleteUser(id){
//         this.data = this.data.filter((el)=>{
//             return el.address.zipCode!==id;
//         });
//     },
//     editUser(id,newData){
//         this.data = this.data.map((el)=>{
//             return (id===el.address.zipCode)?newData:el;}); //TODO
//     }
// };
//
// export default Store;
