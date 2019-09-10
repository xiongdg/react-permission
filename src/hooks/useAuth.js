/**
 * @author ray
 * @description 获取权限
 */
import { useContext } from 'react';
import ReactAuthContext from '../Context';

export default function useAuth() {
    const context = useContext(ReactAuthContext);

    const { permissions } = context;

    return [permissions];
}
