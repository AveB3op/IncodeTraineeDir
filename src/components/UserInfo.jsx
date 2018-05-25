import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Segment = styled.div`
  padding: 10px 20px;
  border: 1px solid #212121;
  border-radius: 10px;
  box-shadow: 0 0 5px 1px black;
  min-width: 250px;
  width: 60%;
  margin: 10px 20%;
  max-height: 95%;
  font-size: 18px;
  text-align: center;
  .button{
    margin-left: 50px;
    box-shadow: 0 0 5px 2px black;
  }
  .avatar{
    display: inline-block;
    margin: 10px;
  }
`;

class UserInfo extends Component {
  render() {
    return (

      <Segment>
        <div className="general-info">
          {this.props.currentUser.general ? (
            <div>
              <Image avatar size="medium" src={ this.props.currentUser.general.avatar } alt="Avatar" />
              <br />
              {`${this.props.currentUser.general.firstName} ${this.props.currentUser.general.lastName}`}
            </div>
          )
                      : ''}
        </div>
        <div className="contacts-info">
          {this.props.currentUser.contact ? (
            <div>
              Email:
              {' '}
              {this.props.currentUser.contact.email}
              <br />
              Phone:
              {' '}
              {this.props.currentUser.contact.phone}
            </div>
          )
                      : ''}
        </div>
        <div className="address-info">
          {this.props.currentUser.address ? (
            <div>
               Street:
              {' '}
              {this.props.currentUser.address.street}
              <br />
               City:
              {' '}
              {this.props.currentUser.address.city}
              <br />
               zipCode:
              {' '}
              {this.props.currentUser.address.zipCode}
              <br />
               Country:
              {' '}
              {this.props.currentUser.address.country}
            </div>
          )
                      : ''}
        </div>
        <div className="job-info">
          {this.props.currentUser.job ? (
            <div>
             Job:
              {' '}
              {`${this.props.currentUser.job.company} ${this.props.currentUser.job.title}`}
            </div>
          )
                      : ''}
        </div>
      </Segment>
    );
  }
}
UserInfo.propTypes = {
  currentUser: PropTypes.object
};

export default UserInfo;
