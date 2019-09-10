/**
 * @author Ray
 * @description 提供一个权限使用的上下文
 */
import React from 'react';
import { ReactAuthContext } from './Context';

/**
 * @description 顶层组件，将权限代码传向整个组件数。
 * @param children
 * @param permissions
 * @returns {*}
 * @constructor
 */
export default function Provider({ children, permissions }) {
    return (
        <ReactAuthContext.Provider
            value={{
                permissions
            }}
        >
            {children}
        </ReactAuthContext.Provider>
    );
}
