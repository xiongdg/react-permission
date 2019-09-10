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
    /**
     * @description 权限控制的上下文对象
     * @type {React.Context<{permissions: []}>}
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

    /**
     * @author Ray
     * @description 获取context中存储的permission，判断如何处理包含的子组件。
     */
    /**
     * @description 使用上下文对象获取顶层注入的权限代码
     * @param key
     * @param key
     * @returns {function(*): function(*): *}
     */

    function withAuth(component) {
      return component;
    }

    /**
     * @author ray
     * @description 获取权限
     */
    /**
     *
     * @returns {{permissions: *[]}}
     */

    function useAuth() {
      var context = React.useContext(ReactAuthContext);
      return context;
    }

    exports.Provider = Provider;
    exports.ReactAuthContext = ReactAuthContext;
    exports.useAuth = useAuth;
    exports.withAuth = withAuth;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=guardian.umd.js.map
