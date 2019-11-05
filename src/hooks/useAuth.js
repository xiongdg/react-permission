/**
 * @author ray
 * @description 获取权限
 */
import { useContext } from 'react';
import { ReactAuthContext } from '../context';

/**
 *
 * @returns {{permissions: *[]}}
 */
export default function useAuth() {
    const context = useContext(ReactAuthContext);

    return context;
}
