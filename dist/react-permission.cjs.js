'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var AuthContext = React__default.createContext({});
Provider.defaultProps = {
  children: null,
  permissions: [],
  fallback: function fallback() {
    return null;
  }
};
function Provider(_ref) {
  var children = _ref.children,
      permissions = _ref.permissions,
      fallback = _ref.fallback;

  var _useState = React.useState(permissions),
      _useState2 = _slicedToArray(_useState, 2),
      permissionKeys = _useState2[0],
      setPermissions = _useState2[1];

  return React__default.createElement(AuthContext.Provider, {
    value: {
      permissions: permissionKeys,
      setPermissions: setPermissions,
      // 提供在子组件中修改权限的一个方法
      fallback: fallback
    }
  }, children);
}

var UNPERMITTED = -1;
var defaults = {
  permissions: [],
  fallback: function fallback() {
    return null;
  }
};

var find = function find(values, value) {
  var i = 0,
      j = values.length - 1,
      index = -1;

  while (i <= j) {
    var middle = Math.ceil((i + j) / 2);
    var middleValue = values[middle];

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
var filterChildElementByPermission = function filterChildElementByPermission(_props) {
  var children = _props.children,
      fallback = _props.fallback,
      permissions = _props.permissions;
  var elements = React.Children.map(children, function (element) {
    var _element$props = element.props,
        permission = _element$props.permission,
        _fallback = _element$props.fallback; // eslint-disable-next-line no-undef

    {
      console.log(permissions.join(','), '<-->', permission);
    }

    var index = find(permissions, permission);

    if (UNPERMITTED === index) {
      // do something if unpermitted
      var showFallback = fallback || _fallback;

      if (typeof showFallback === 'function') {
        return showFallback();
      } else {
        throw TypeError('fallback 必须是一个合法的react组件');
      }
    }

    return element;
  });
  return elements;
};

function usePermissions(key) {
  var _useContext = React.useContext(AuthContext),
      permissions = _useContext.permissions;

  return find(permissions, key) !== UNPERMITTED;
}

function Permission(props) {
  var _props = Object.assign({}, defaults, props, React.useContext(AuthContext));

  var _useState = React.useState(_props.children),
      _useState2 = _slicedToArray(_useState, 2),
      ChildElements = _useState2[0],
      setChildElements = _useState2[1];

  React.useEffect(function () {
    return setChildElements(filterChildElementByPermission(_props));
  }, [_props.permissions]);
  return ChildElements;
}

exports.Permission = Permission;
exports.PermissionProvider = Provider;
exports.usePermissions = usePermissions;
//# sourceMappingURL=react-permission.cjs.js.map
