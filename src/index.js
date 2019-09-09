/**
 * @author Ray
 * @description 权限的入口组件
 */
import React from 'react';

export const Context = React.createContext([]);

export default function(props) {
    return (
        <Context.Provider
            value={{
                permissions: []
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
