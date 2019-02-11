import React, { Component, Fragment } from 'react';
import { textContainsString } from '../../services/jsEventHelpers';
import EoiCard from "./EoiCard";
import DashboardFilter from './DashboardFilter';
import PaginateEventsList from "../PaginateList";
import PropTypes from 'prop-types';
import { fetchDashboard } from '../../../redux/actions/dashboardActions';
import { connect } from "react-redux";

class AdminDashboard extends Component {

  componentDidMount = () => {
    const { pageNum, limitPerPage, fetchDashboard } = this.props;

    fetchDashboard(pageNum, limitPerPage);
  };

  handlePaginationChange = (event) => {
    const { pageNum, limitPerPage, fetchDashboard } = this.props;
    //   const value = event.target.value;

    //   const { eventsCount: count, fetchDashboard: dashboard } = this.props

    //   // Helper method to be added on success
    //   // fetchpage(pageNum, limitPerPage, value, count, fetchDashboard)

    //   switch (value) {
    //     case 'next':
    //       pageNum = pageNum >= count ? pageNum : pageNum + 1;
    //       break;
    //     case 'prev':
    //       pageNum = pageNum <= 0 ? pageNum : pageNum - 1;
    //       break;
    //     case Number(value) <= 0 || Number(value) >= count:
    //       break;
    //     default:
    //       pageNum = Number(value);
    //       break;
    //   };

    //   dashboard(pageNum, limitPerPage);

    //   // const { loadafetchDashboard, history, eventLoadError } = this.props;
    //   // if (eventLoadError) return;
    //   // loadEventsList(pageNum);
    //   // history.push(`?pageNum=${pageNum.activePage}`);
  };

  handleFilter = (event) => {
    const { pageNum, limitPerPage, fetchDashboard } = this.props;

    // check if shortlist clicked; returns boolean
    const seeShortlist = textContainsString(event, 'shortlist');

    fetchDashboard(pageNum, limitPerPage, seeShortlist);
  };

  render() {
    // destructure props
    const { eventsList, eventsCount, pageNum: currentPage, limitPerPage } = this.props;

    // create Eoi cards
    const EoiCards = eventsList.map((data) => <EoiCard key={`${data._id}-eoi-card`} data={data} />);

    // set constants for pagination
    const pages = Math.ceil(eventsCount / limitPerPage);

    return (
      <Fragment >
        <DashboardFilter filter={this.handleFilter} />
        <div className="cardContainer">{EoiCards}</div>
        {/* {pages > 1 && */}
        <PaginateEventsList activePage={currentPage} /*onPageChange={this.handlePaginationChange}*/ totalPages={pages} />
        {/* } */}
      </Fragment>
    );
  };
};


AdminDashboard.propTypes = {
  eventsList: PropTypes.array.isRequired,
  eventsCount: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired,
  limitPerPage: PropTypes.number.isRequired,
  fetchDashboard: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  eventsList: state.dashboard.eventsList,
  eventsCount: state.dashboard.eventsCount,
  // eventError: state.dashboard.eventError, // TODO: Can this be sent to flash message at App level??
  pageNum: Number(ownProps.location.search.split("=")[1]) || 1, // page number determined from query string
  limitPerPage: 1 // set limit to default until next iteration - option to change will need to be added
});

const matchDispatchToProps = {
  fetchDashboard
};

export default connect(mapStateToProps, matchDispatchToProps)(AdminDashboard);

