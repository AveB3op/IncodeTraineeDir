import userReducer from '../redux/reducer/userReducer';
import * as actions from '../redux/action/actionCreators';

describe('Reducer',()=>{
    const userData =   {
        'general': {
            'firstName': 'Deontae',
            'lastName': 'Dare',
            'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg'
        },
        'job': {
            'company': 'D\'Amore, Dicki and Borer',
            'title': 'International Applications Consultant'
        },
        'contact': {
            'email': 'Kellie.Marvin38@yahoo.com',
            'phone': '1-615-843-3426 x600'
        },
        'address': {
            'street': '65901 Glover Terrace',
            'city': 'Alden ton',
            'zipCode': '57744-4248',
            'country': 'Kenya'
        }
    };
    const prevUserData =   {
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
    const newUserData =   {
        'general': {
            'firstName': 'Cucumber',
            'lastName': 'Cucumber',
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
            'zipCode': '123456789',
            'country': 'Guinea-Bissau'
        }
    };
    it('Add user without crash',()=>{
        const expected = [userData, prevUserData, newUserData];
        const result = userReducer([userData, prevUserData],actions.addUser(newUserData));
        expect(result).toEqual(expected);

    });
    it('Edit user without crash',()=>{
        const expected = [newUserData];
        const result = userReducer([prevUserData], actions.editUser(prevUserData.address.zipCode,newUserData));
        expect(result).toEqual(expected);
    });
    it('Delete user without crash',()=>{
        const expected = [prevUserData];
        const result = userReducer([prevUserData,userData], actions.deleteUser(userData.address.zipCode));
        expect(result).toEqual(expected);
    });
    it('Get data without crash',()=>{
        const expected = [prevUserData,userData,newUserData];
        const result = userReducer([],actions.getUserData([prevUserData,userData,newUserData]));
        expect(result).toEqual(expected);
    });
});
