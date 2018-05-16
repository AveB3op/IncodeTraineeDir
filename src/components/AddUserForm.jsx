import React, {Component} from 'react';
import {Button, Form} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

// import { List,Image } from 'semantic-ui-react';

class AddUser extends Component {

  render() {


    return (
      <Form onSubmit={this.props.onAddUser}>

        <Form.Field>
          <label>First Name
            <input placeholder='First Name' name='fname' required/>
          </label>
          <label>Last Name
            <input placeholder='Last Name' name='lname'/>
          </label>
          <label>Avatar link
            <input placeholder='link' name='avatar'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>Company name
            <input placeholder='Company name'/>
          </label>
          <label>Job title
            <input placeholder='Job title'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>E-mail
            <input type='email' placeholder='E-mail'/>
          </label>
          <label>Phone number
            <input type='tel' placeholder='Phone number'/>
          </label>
        </Form.Field>

        <Form.Field>
          <label>Street
            <input placeholder='Street'/>
          </label>
          <label>City
            <input placeholder='City'/>
          </label>
          <label>Zip code
            <input placeholder='zipCode' required/>
          </label>
          <label>Country
            <input placeholder='Country'/>
          </label>
        </Form.Field>

        <Form.Field>
          <Button type='submit'>Accept</Button>
          <Link to='/'>
            <Button type='reset'>Cancel</Button>
          </Link>
        </Form.Field>
      </Form>
    );
  }
}

export default AddUser;
