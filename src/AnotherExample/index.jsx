import React from 'react';
import PropTypes from 'prop-types';

import './AnotherExample.css';

const AnotherExample = ({ name }) => (
  <div className="another-example">
    This is another example by
    { name }
  </div>
);

AnotherExample.propTypes = {
  name: PropTypes.string,
};

AnotherExample.defaultProps = {
  name: 'jaebaebae',
};

export default AnotherExample;
