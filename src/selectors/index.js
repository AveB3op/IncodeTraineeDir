import { createSelector } from 'reselect';

const getUserFilter = (state) => state.filter;
const getUserList = (state) => state.data;

export const getFilteredUserList = createSelector(
    [getUserFilter,getUserList],
    (filter, data)=>{
        if(filter!==''){
            return data.filter((el)=>{
                return (el.general.firstName + el.general.lastName).toLowerCase().includes(filter.toLowerCase());
            });
        }else{
            return data;
        }
    }
);
