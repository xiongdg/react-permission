/**
 * @author Ray
 */
// import isArray from 'utils/isArray';

/**
 * @description 设置当前的权限字段
 */
function permission() {
    return function(target) {
        function toString() {
            return 'toString';
        }

        target.toString = toString;
    };
}

export default permission;
