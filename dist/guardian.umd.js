(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.guardian = {}, global.React));
}(this, function (exports, React) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;

    /**
     * @author Ray
     * @description 权限的入口组件
     */
    var Context = React.createContext([]);
    function index () {
      return React.createElement(Context.Provider, null);
    }

    exports.Context = Context;
    exports.default = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=guardian.umd.js.map
