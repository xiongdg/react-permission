import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = React.createContext({});

export const ProviderProps = {
  children: PropTypes.arrayOf(PropTypes.element),
  permissions: PropTypes.arrayOf(PropTypes.number),
  fallback: PropTypes.element
};

export const ProviderDefaultProps = {
  children: null,
  permissions: [],
  fallback: <Fragment />
};

Provider.propTypes = {};

Provider.defaultProps = ProviderDefaultProps;

export default function Provider({ children, permissions, fallback }) {
  return (
    <AuthContext.Provider
      value={{
        fallback,
        permissions
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
