import { useContext } from 'react';
import { AuthContext } from '../provider';
import { find } from '../utils';
import { UNPERMITTED } from '../defaults';

export default function usePermissions(key) {
  const { permissions } = useContext(AuthContext);
  // TODO return fallback maybe ?
  return find(permissions, key) !== UNPERMITTED;
}
