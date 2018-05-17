import React,{ Component } from 'react';
import { Segment, Button, List } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Search from '../components/Search';
import User from '../components/User';
import {addSearchFilter, getUserData} from '../redux/action/actionCreators';
import { getFilteredUserList} from '../selectors';

const mapStateToProps = state => ({
    data: getFilteredUserList(state)
});

const mapDispatchToProps = dispatch => ({
    onSearch:(input)=>{
        dispatch(addSearchFilter(input));
    },
    onLoading:()=>{
        const asyncGetData = () => {
            return dispatch => {
                setTimeout(() => {
                    //console.log('I got data');
                    dispatch(getUserData());
                }, 2000);
            };
        };
        dispatch(asyncGetData());
    }

});

class SearchPane extends Component {
    constructor(props){
        super(props);
        this.onSearch = this.onSearch.bind(this);
        if(!this.props.data[0]){
            this.props.onLoading();
        }
    }
    componentDidMount(){
        this.onSearch= _.debounce(this.onSearch,500);
        this.props.onSearch('');
    }

    onSearch(input) {
        this.props.onSearch(input);
    }

    render() {
        return (
            <Segment className="search-panel" inverted floated = 'left'>
                <Search onSearch ={this.onSearch}/>
                <List bulleted>
                    {this.props.data.map((el)=>{
                        return <User key ={el.address.zipCode} id ={el.address.zipCode} user={el.general} select = {this.props.select}/>;
                    })}
                </List>
                <Link to='/user/new'>
                    <Button>
                    Add new user
                    </Button>
                </Link>
            </Segment>
        );
    }
}
SearchPane.propTypes = {
    data:PropTypes.array,
    select:PropTypes.func,
    onSearch:PropTypes.func,
    onLoading:PropTypes.func
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPane);
