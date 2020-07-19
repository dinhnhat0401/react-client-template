import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// TODO: remove this fake
import { fakeAuth } from '../../business-logic';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  // state = {
  //   redirectToReferrer: false,
  // };

  // console.log(rest);

  if (fakeAuth.isAuthenticated === true) {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <Layout>
            {console.log(matchProps)}
            <Component {...matchProps} />
          </Layout>
        )}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: '/sign-in',
          state: { from: props.location },
        }}
      />
    );
  }
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
