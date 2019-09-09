(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.guardian = {}, global.React));
}(this, function (exports, React$1) { 'use strict';

    React$1 = React$1 && React$1.hasOwnProperty('default') ? React$1['default'] : React$1;

    /**
     * @author Ray
     * @description Context
     */
    var Context = React$1.createContext({
      permissions: []
    });

    /**
     * @author Ray
     * @description 权限的入口组件
     */
    function index () {
      return function (_ref) {
        var permissions = _ref.permissions,
            children = _ref.children;
        return React.createElement(Context.Provider, {
          value: {
            permissions: permissions
          }
        }, children);
      };
    }

    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=guardian.umd.js.map
