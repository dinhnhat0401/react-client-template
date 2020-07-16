import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

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
};

PublicRouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
};

export default PublicRouteWithLayout;
