/**
 * @author Ray
 * @description Context
 */
import React from 'react';

/**
 * @description 权限控制的上下文对象
 * @type {React.Context<{permissions: []}>}
 */
export const ReactAuthContext = React.createContext({
    permissions: []
});

export default ReactAuthContext;
