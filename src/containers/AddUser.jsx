import React, {Component} from 'react';
import AddUserForm from '../components/AddUserForm.jsx';

class AddUser extends Component {
  constructor() {
    super();
    if (!this.state) {
      this.state = {
        data: {}
      }
    }
    this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    let userData = this.formObject(e.target);
    this.props.onAddUser(userData);
    this.props.history.push('/');
  }

  formObject(form) {
    return {
      "general": {
        "firstName": form[0].value,
        "lastName": form[1].value,
        "avatar": form[2].value
      },
      "job": {
        "company": form[3].value,
        "title": form[4].value
      },
      "contact": {
        "email": form[5].value,
        "phone": form[6].value
      },
      "address": {
        "street": form[7].value,
        "city": form[8].value,
        "zipCode": form[9].value,
        "country": form[10].value
      }
    }
  }
  render() {
    console.log(this.props);
    return (<AddUserForm onAddUser={this.addUser}/>);
  }
}

export default AddUser;
