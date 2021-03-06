// Permission组件

import { useContext, Children } from 'react';
import { find } from './utils';
import { AuthContext, ProviderProps, ProviderDefaultProps } from './provider';
import { UNPERMITTED } from './defaults';

Permission.propTypes = ProviderProps;

Permission.defaultProps = ProviderDefaultProps;

export default function Permission({ children, ...restProps }) {
  const innerProps = Object.assign({}, restProps, useContext(AuthContext));

  return Children.map(children, function(Child) {
    const childProps = Child.props;

    const { permission, fallback } = childProps;

    let index = find(
      innerProps.permissions,
      permission || childProps['data-permission'] // for original-html-element
    );

    if (UNPERMITTED === index) {
      return fallback || innerProps.fallback || null;
    }

    return Child;
  });
}
