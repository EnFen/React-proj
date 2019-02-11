import React from 'react'
import PropTypes from 'prop-types';
import { Pagination, Icon } from "semantic-ui-react";

const PaginateList = (props) => {
  const { activePage, totalPages, onPageChange } = props;
  return (
    <Pagination
      style={{ color: 'red', margin: "20px auto" }}
      pointing
      activePage={activePage}
      boundaryRange={1}
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={{ content: <Icon name='angle double left' />, icon: true }}
      lastItem={{ content: <Icon name='angle double right' />, icon: true }}
      prevItem={{ content: <Icon name='angle left' />, icon: true }}
      nextItem={{ content: <Icon name='angle right' />, icon: true }}
      onPageChange={onPageChange}
      totalPages={totalPages}
    />
  );
};

PaginateList.propTypes = {
  activePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};


export default PaginateList;

