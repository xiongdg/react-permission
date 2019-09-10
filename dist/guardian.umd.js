(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.guardian = {}, global.React));
}(this, function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
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

  /**
   * @author Ray
   * @description Context
   */
  var ReactAuthContext = React__default.createContext({
    permissions: []
  });

  function Provider(_ref) {
    var children = _ref.children,
        context = _ref.context,
        permissions = _ref.permissions;
    var Context = ReactAuthContext;

    var _useState = React.useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        pms = _useState2[0],
        setPermissions = _useState2[1];

    React.useEffect(function () {
      if (permissions.then) {
        permissions.then(function (p) {
          setPermissions(p);
        });
      } else {
        setPermissions(permissions);
      }
    }, [permissions]);

    if (context) {
      Context = context;
    }

    return React__default.createElement(Context.Provider, {
      value: {
        permissions: pms
      }
    }, children);
  }

  /**
   * @description 返回一个新的组建，适用于函数组件
   * @param authKey
   * @returns {function(*): Function}
   */

  var withPermission = function withPermission(authKey) {
    return function (wrapComponent) {
      return function (props) {
        var authKeys = React.useContext(ReactAuthContext);

        if (authKey in authKeys) {
          return wrapComponent(_objectSpread2({}, props));
        }

        return null;
      };
    };
  };

  exports.Provider = Provider;
  exports.withPermission = withPermission;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=guardian.umd.js.map
