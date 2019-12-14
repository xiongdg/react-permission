'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var AuthContext = React__default.createContext({});
Provider.defaultProps = {
  children: null,
  permissions: [],
  fetchPermissions: function fetchPermissions() {
    return Promise.resolve([]);
  },
  parser: function parser() {
    return [];
  }
};
function Provider(_ref) {
  var children = _ref.children,
      fetchPermissions = _ref.fetchPermissions,
      permissions = _ref.permissions,
      parser = _ref.parser;

  var _useState = React.useState(permissions),
      _useState2 = _slicedToArray(_useState, 2),
      permissionKeys = _useState2[0],
      setPermissions = _useState2[1];

  React.useEffect(function () {
    fetchPermissions().then(function (res) {
      var parsedData = parser(res);
      setPermissions(_toConsumableArray(new Set([].concat(_toConsumableArray(permissions), _toConsumableArray(parsedData)))));
    });
  }, []);
  return React__default.createElement(AuthContext.Provider, {
    value: {
      permissions: permissionKeys,
      setPermissions: setPermissions // 提供在子组件中修改权限的一个方法

    }
  }, children);
}

function useAuth(key) {
  var _useContext = React.useContext(AuthContext),
      permissions = _useContext.permissions;

  return permissions.includes(key); // 是否存在当前接收到的key
}

exports.Provider = Provider;
exports.useAuth = useAuth;
//# sourceMappingURL=react-permission.cjs.js.map
