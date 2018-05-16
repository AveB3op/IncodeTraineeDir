import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
class InfoPanel extends Component {
    render() {
        return (
            <Segment className="search-panel" inverted floated = 'left'>
                <div className='general-info'>
                    {this.props.currentUser.general ? <div>
                        <Image avatar size='medium' src = {this.props.currentUser.general.avatar} alt='Avatar'/>
                        {this.props.currentUser.general.firstName + ' '+this.props.currentUser.general.lastName}
                    </div>
                        :''}
                </div>
                <div className='contacts-info'>
                    {this.props.currentUser.contact ? <div>
             Email: {this.props.currentUser.contact.email}
                        <br/>
             Phone: {this.props.currentUser.contact.phone}
                    </div>
                        :''}
                </div>
                <div className='address-info'>
                    {this.props.currentUser.address ? <div>
               Street: {this.props.currentUser.address.street}
                        <br/>
               City:  {this.props.currentUser.address.city}
                        <br/>
               zipCode: {this.props.currentUser.address.zipCode}
                        <br/>
               Country: {this.props.currentUser.address.country}
                    </div>
                        :''}
                </div>
                <div className='job-info'>
                    {this.props.currentUser.job ? <div>
             Job: {this.props.currentUser.job.company+' '+this.props.currentUser.job.title}
                    </div>
                        :''}
                </div>
            </Segment>
        );
    }
}
InfoPanel.propTypes = {
    currentUser:PropTypes.object
};
export default InfoPanel;
