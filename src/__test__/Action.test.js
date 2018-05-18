import * as actions from '../redux/action/actionCreators';
import * as actionTypes from '../redux/action/actionTypes';


describe('Actions',()=>{
    const userData =   {
        'general': {
            'firstName': 'Liana',
            'lastName': 'Crooks',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg'
        },
        'job': {
            'company': 'Ledner, Johnson and Predovic',
            'title': 'Investor Functionality Coordinator'
        },
        'contact': {
            'email': 'Gerry_Hackett77@gmail.com',
            'phone': '(895) 984-0132'
        },
        'address': {
            'street': '1520 Zemlak Cove',
            'city': 'New Devon',
            'zipCode': '42586-7898',
            'country': 'Guinea-Bissau'
        }
    };
    const id = 5;

    it('ADD_USER_COMPLETE',()=>{
        const expected = {
            type: actionTypes.ADD_USER,
            userData
        };
        const result = actions.addUser(userData);
        expect(result).toEqual(expected);

    });
    it('EDIT_USER_COMPLETE',()=>{
        const expected = {
            type: actionTypes.EDIT_USER,
            id,
            newUserData:userData
        };
        const result = actions.editUser(id,userData);
        expect(result).toEqual(expected);

    });
    it('DELETE_USER_COMPLETE',()=>{
        const expected = {
            type: actionTypes.DELETE_USER,
            id
        };
        const result = actions.deleteUser(id);
        expect(result).toEqual(expected);

    });
    it('GET_USER_COMPLETE',()=>{
        const expected = {
            type: actionTypes.GET_USER_DATA,
            data: userData
        };
        const result = actions.getUserData(userData);
        expect(result).toEqual(expected);

    });

    it('ASYNC_GET_USER',()=>{
        const result = actions.asyncGetData();
        expect(result).toBeInstanceOf(Function);
    });
    it('ASYNC_DELETE_USER',()=>{
        const result = actions.asyncDeleteUser();
        expect(result).toBeInstanceOf(Function);
    });
    it('ASYNC_EDIT_USER',()=>{
        const result = actions.asyncEditUser();
        expect(result).toBeInstanceOf(Function);
    });
    it('ASYNC_ADD_USER',()=>{
        const result = actions.asyncAddUser();
        expect(result).toBeInstanceOf(Function);
    });

});
