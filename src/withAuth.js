/**
 * @author Ray
 * @description 获取context中存储的permission，判断如何处理包含的子组件。
 */
import { useContext } from 'react';
import ReactAuthContext from './Context';

/**
 * @description 返回一个新的组建，适用于函数组件
 * @param authKey
 * @returns {function(*): Function}
 */
export const withAuth = key => component => props => {
    const Context = useContext(ReactAuthContext);
    let inFlag = key in Context.permissions;
    return inFlag ? component({ ...props }) : null;
};

export default withAuth;
