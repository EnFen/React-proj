import React from 'react'
import PropTypes from 'prop-types';
import { Pagination, Icon } from "semantic-ui-react";

const PaginateEventsList = (props)=>(
   <Pagination
    style={{ color: 'red', margin: "20px auto" }}
    pointing
    activePage={props.activePage}
    boundaryRange={1}
    ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
    firstItem={{ content: <Icon name='angle double left' />, icon: true }}
    lastItem={{ content: <Icon name='angle double right' />, icon: true }}
    prevItem={{ content: <Icon name='angle left' />, icon: true }}
    nextItem={{ content: <Icon name='angle right' />, icon: true }}
    onPageChange={props.onPageChange}
    totalPages={props.totalPages}
   />
  );

// PaginateEventsList.propTypes = {

// }

export default PaginateEventsList;

