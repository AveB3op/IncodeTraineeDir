import { createSelector } from 'reselect';

const getUserFilter = state => state.filter;
const getUserList = state => state.data;

const getFilteredUserList = createSelector(
  [getUserFilter, getUserList],
  (filter, data) => {
    if (filter !== '') {
      return data.filter(el => (el.general.firstName + el.general.lastName)
        .toLowerCase()
        .includes(filter.toLowerCase()));
    }
    return data;
  }
);

export default getFilteredUserList;
