/**
 * @author Ray
 * @description 获取context中存储的permission，判断如何处理包含的子组件。
 */
import useAuth from './hooks/useAuth';

/**
 *
 * @param key
 * @returns {function(*): function(*): (boolean|*)}
 */
export function withAuth(key) {
    /**
     * @param component
     */
    return function(component) {
        /**
         * @param props
         */
        return function wrap(props) {
            const { permissions } = useAuth();

            return key in permissions && component({ ...props });
        };
    };
}

export default withAuth;
