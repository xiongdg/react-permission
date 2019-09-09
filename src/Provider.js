/**
 * @author Ray
 * @description 提供一个权限使用的上下文
 */
import React, { useEffect } from 'react';
import { ReactAuthContext } from './Context';

export default function Provider({ children, context, permissions }) {
    let Context = ReactAuthContext;

    useEffect(function() {}, []);

    if (context) {
        Context = context;
    }

    return <Context.Provider value={{ permissions }}>{children}</Context.Provider>;
}
