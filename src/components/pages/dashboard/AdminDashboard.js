import React, { Component } from 'react';

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { push } from 'react-router-redux';
import {
  Card,
  Button,
  Icon,
  Image,
  Dropdown,
} from "semantic-ui-react";

import { api } from '../../../api/init';
import { Link } from 'react-router-dom';


// local Imports
import FlashMessage from "../../messages/FlashMessage";
import { fetchEventsList, loadEventsList } from '../../../redux/actions/eventsListAction';
import PaginateEventsList from "./PaginateEventsList";
class AdminDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], pages: 0 };
  }

  componentDidMount() {
    // if(!window.sessionStorage.getItem("AuthToken")) return;
    // const AUTH_TOKEN = JSON.parse(window.sessionStorage.getItem("AuthToken")).user.token || ''
    // console.log('ComponentDidMount')    
    api.get("/dashboard?pageNum=1&limit=10"/*, {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
    }*/)
      .then(response => {
        console.log('data: response.data.data', response.data.data)
        this.setState({ data: response.data.data, pages: response.data.count })
        console.log(response.data)
      });
  }
  handleSeeShortlist = event => {
    event.preventDefault()
    api.get('/dashboard/shortlist?pageNum=1&limit=10')
      .then((response) =>
        this.setState({ data: response.data.data }))
  }
  handleSeeAll = event => {
    event.preventDefault()
    api.get('/dashboard?pageNum=1&limit=10')
      .then((response) => this.setState({ data: response.data.data }))
  }

  handlePaginationChange = (evt, page) => {
    const { loadEventsList, history, eventLoadError } = this.props;
    if (eventLoadError) return;
    loadEventsList(page);
    history.push(`?page=${page.activePage}`);
  };

  render() {
    console.log("This.props", this.props);
    console.log("This.props.page", this.props.page);
    // let flashCount = 1;
    const { events, loggedIn, sessionLogIn, role } = this.props;
    // Pagination
    const per_page = 5; //FOR TESTING PURPOSES ONLY & IS TO BE REPLACED
    // const pages = Math.ceil(events.length / per_page);// this.state
    const pages = Math.ceil(this.state.pages / per_page);
    const current_page = this.props.page;
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;


    // Render
    const buildCards = this.state.data.map((Data, index) => {
      if (index >= start_offset && start_count < per_page) {
        start_count++;
        return (
          <Card.Group key={index} centered>
            <Card color="red" fluid>
              <Card.Content color="red" className="cardContainer">
                <input type="hidden" value={Data.id} />
                <Card.Header key={index}>{Data.host.first_name}</Card.Header>
                <Card.Meta key={Data.createdAt}>{Data.createdAt}</Card.Meta>
                <Card.Description>
                  {Data.host.organisation}
                </Card.Description>
                <Button className="viewButton" as={Link} animated inverted color="red" to={`/dashboard/${Data._id}`} id={Data._id}>
                  <Button.Content visible >VIEW</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>

                <div>

                  {Data.criteria.shortlisted ? (
                    <Image
                      floated="right"
                      size="mini"
                      src="/Assets/WBGS-logo.png"
                    />
                  ) : (
                      <Image
                        floated="right"
                        size="mini"
                        src="/Assets/WBGS-logo dulled.png"
                      />
                    )}
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        );
      } else return null;
    });
    return (
      <React.Fragment>
        <div className="filter">
          <Dropdown
            color="red"
            text="Filter By"
            icon="filter"
            floating
            labeled
            button
            className="icon"
          >
            <Dropdown.Menu>
              <Dropdown.Header icon="tags" content="Filter by tag" />
              <Dropdown.Item onClick={this.handleSeeShortlist}>
                Shortlisted
              </Dropdown.Item>
              <Dropdown.Item onClick={this.handleSeeAll}>
                See All
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {!sessionLogIn && loggedIn && role === "admin" && (
          <div>
            <FlashMessage
              color="teal"
              message={"You have successfully logged in...   "}
            />
          </div>
        )}
        {pages > 1 && (
          <div>
            <PaginateEventsList
              activePage={current_page}
              onPageChange={this.handlePaginationChange}
              totalPages={pages}
            />
          </div>
        )}
        {/* <div className="cardContainer">{buildcards2}</div> */}
        <div className="cardContainer">{buildCards}</div>
        {pages > 1 && (
          <div>
            <PaginateEventsList
              activePage={current_page}
              onPageChange={this.handlePaginationChange}
              totalPages={pages}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  loggedIn: state.auth.loggedIn,
  sessionLogIn: state.auth.loggingFromSession,
  role: state.auth.authenticatedUserRole,
  events: state.events.eventsList,
  eventLoadError: state.events.eventError,
  page: Number(ownProps.location.search.split("=")[1]) || 1
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchEventsList, loadEventsList, }
  )(AdminDashboard)
);


//const mapStateToProps = (state, location) => {
//     console.log("state | Location", state, location);
//     console.log("location.location.search.split('='[1]): ", location.location);
//     const page = location.location.search.split('=')[1];
//    return {
//       events: state.events.eventsList, 
//       eventLoadError: state.events.eventError,
//       page: Number(page) || 1,
//     //   dispatch:
//     };    
// } 

