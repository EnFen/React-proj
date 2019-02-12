import React, { Component, Fragment } from 'react';
import { textContainsString } from '../../services/jsEventHelpers';
import EoiCard from "./EoiCard";
import DashboardFilter from './DashboardFilter';
import PaginateEventsList from "../PaginateList";
import PropTypes from 'prop-types';
import { fetchDashboard } from '../../../redux/actions/dashboardActions';
import { connect } from "react-redux";

class AdminDashboard extends Component {

  // load first page data by default on first render
  componentDidMount = () => {
    const { pageNum, limitPerPage, fetchDashboard } = this.props;

    fetchDashboard(pageNum, limitPerPage);
  };

  // pagination
  handlePageChange = (event) => {
    // destructure props
    let { pageNum, limitPerPage } = this.props;
    const { showShortlist, fetchDashboard } = this.props;

    // get text content of clicked event
    const value = Number(event.currentTarget.getAttribute('value'));

    // assign clickeed value to page number
    pageNum = value;

    // fetch new set of data from api
    fetchDashboard(pageNum, limitPerPage, showShortlist)
  };

  // toggle filter for shortlist / all EOI's
  handleFilter = (event) => {
    // desttructure props
    const { pageNum, limitPerPage, fetchDashboard } = this.props;

    // check if shortlist clicked; returns boolean
    const seeShortlist = textContainsString(event, 'shortlist');

    // fetch new set of data from api
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
        {pages > 1 &&
          <PaginateEventsList activePage={currentPage} pageChange={this.handlePageChange} totalPages={pages} />
        }
      </Fragment>
    );
  };
};

AdminDashboard.propTypes = {
  eventsList: PropTypes.array.isRequired,
  eventsCount: PropTypes.number.isRequired,
  showShortlist: PropTypes.bool.isRequired,
  fetchDashboard: PropTypes.func.isRequired,
  pageNum: PropTypes.number.isRequired,
  limitPerPage: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  eventsList: state.dashboard.eventsList,
  eventsCount: state.dashboard.eventsCount,
  showShortlist: state.dashboard.showShortlist,
  pageNum: state.dashboard.pageNum,
  limitPerPage: state.dashboard.limitPerPage
});

const matchDispatchToProps = {
  fetchDashboard
};

export default connect(mapStateToProps, matchDispatchToProps)(AdminDashboard);

