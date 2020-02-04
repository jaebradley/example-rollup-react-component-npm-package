import React from 'react';
import PropTypes from 'prop-types';

import './AnExample.scss';

const AnExample = ({ name }) => (
  <div className="an-example">
    This is an example by
    { name }
  </div>
);

AnExample.propTypes = {
  name: PropTypes.string,
};

AnExample.defaultProps = {
  name: 'jaebaebae',
};

export default AnExample;
