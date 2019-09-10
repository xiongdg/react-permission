(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.guardian = {}, global.React));
}(this, function (exports, React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /**
     * @author Ray
     * @description Context
     */
    var ReactAuthContext = React__default.createContext({
      permissions: []
    });

    /**
     * @author Ray
     * @description 提供一个权限使用的上下文
     */
    /**
     * @description 顶层组件，将权限代码传向整个组件数。
     * @param children
     * @param permissions
     * @returns {*}
     * @constructor
     */

    function Provider(_ref) {
      var children = _ref.children,
          permissions = _ref.permissions;
      return React__default.createElement(ReactAuthContext.Provider, {
        value: {
          permissions: permissions
        }
      }, children);
    }

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

    /**
     * @description 返回一个新的组建，适用于函数组件
     * @param authKey
     * @returns {function(*): Function}
     */

    var withAuth = function withAuth(key) {
      return function (component) {
        return function (props) {
          var Context = React.useContext(ReactAuthContext);
          var inFlag = key in Context.permissions;
          return inFlag ? component(_objectSpread2({}, props)) : null;
        };
      };
    };

    exports.Provider = Provider;
    exports.withAuth = withAuth;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=guardian.umd.js.map
