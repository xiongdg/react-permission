/**
 * @author Ray
 * @description 权限的入口组件
 */
// import React from 'react';
// eslint-disable-next-line no-unused-vars
import Context from './Context';

export default function() {
    return function({ permissions, children }) {
        return (
            <Context.Provider
                value={{
                    permissions
                }}
            >
                {children}
            </Context.Provider>
        );
    };
}
