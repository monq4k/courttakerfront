import React from 'react';
import PropTypes from 'prop-types';

const EmptyListReplacer = ({ children }) => (
  { ...children }
);

EmptyListReplacer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmptyListReplacer;
