import { Children } from 'react';
import { UNPERMITTED } from './defaults';

// Find target p-key in p-keys
export const find = (values, value) => {
  let i = 0,
    j = values.length - 1,
    index = -1;
  while (i <= j) {
    let middle = Math.ceil((i + j) / 2);
    let middleValue = values[middle];
    if (middleValue > value) {
      j = middle = middle - 1;
    } else if (middleValue < value) {
      i = middle = middle + 1;
    } else {
      return middle;
    }
  }

  return index;
};

// Filter component by provided p-key according to the p-key list
export const filterChildElementByPermission = _props => {
  // Global options.
  const { children, fallback, permissions } = _props;

  return Children.map(children, element => {
    // Element options
    const { permission, fallback: _fallback } = element.props;

    // eslint-disable-next-line no-undef
    if (__DEV__) {
      console.log(permissions.join(','), '<-->', permission);
    }
    // Find key index
    let index = find(permissions, permission);

    if (UNPERMITTED === index) {
      // do something if un permitted
      let showFallback = fallback || _fallback;
      if (typeof showFallback === 'function') {
        return showFallback();
      } else {
        throw TypeError('fallback 必须是一个合法的react组件');
      }
    }

    return element;
  });
};
