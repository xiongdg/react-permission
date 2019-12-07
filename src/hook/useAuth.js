import { useContext } from 'react';
import AuthContext from '../context';

export default function useAuth(key) {
    const { permissions } = useContext(AuthContext);
    return permissions.includes(key); // 是否存在当前接收到的key
}
