import { useContext, useState, useEffect } from 'react';
import { defaults } from './defaults';
import { AuthContext } from './provider';
import { filterChildElementByPermission } from './utils';

export default function Permission(props) {
  const _props = Object.assign({}, defaults, props, useContext(AuthContext));
  const [ChildElements, setChildElements] = useState(_props.children);
  // Permissions listener
  useEffect(() => setChildElements(filterChildElementByPermission(_props)), [_props.permissions]);
  return ChildElements;
}
