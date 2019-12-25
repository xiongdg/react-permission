import React, { useState } from 'react';

export const AuthContext = React.createContext({});

Provider.defaultProps = {
    children: null,
    permissions: [],
    fallback: () => null
};

export default function Provider({ children, permissions, fallback }) {
    const [permissionKeys, setPermissions] = useState(permissions);

    return (
        <AuthContext.Provider
            value={{
                permissions: permissionKeys,
                setPermissions, // 提供在子组件中修改权限的一个方法
                fallback
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
