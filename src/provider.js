/**
 * @author Ray
 * @description 提供一个权限使用的context
 */
import {} from '@westernwood/utils';
import React from 'react';
import { ReactAuthContext } from './context';

/**
 * @description 顶层组件，将权限代码传向整个组件数。
 * @param children
 * @param permissions
 * @returns {*}
 * @constructor
 */
export default function Provider({ children, permissions }) {
    // TODO 支持传入返回permissionkey集合的Promise对象.
    return (
        <ReactAuthContext.Provider value={{ permissions }}>{children}</ReactAuthContext.Provider>
    );
}
