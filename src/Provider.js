/**
 * @author Ray
 * @description 提供一个权限使用的上下文
 */
import React from 'react';
import { ReactAuthContext } from './Context';

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
