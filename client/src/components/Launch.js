import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import classNames from 'classnames';

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      launch_date_local
      mission_name
      launch_success
      launch_year
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = ({ match: { params } }) => {
  let { flight_number } = params;
  flight_number = parseInt(flight_number);
  return (
    <div>
      <Query query={LAUNCH_QUERY} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          console.log(data);
          return <h4>Launch</h4>;
        }}
      </Query>
    </div>
  );
};

export default withRouter(Launch);
