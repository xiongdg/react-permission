import React, { useEffect, useState } from 'react';
import AuthContext from './context';

Provider.defaultProps = {
    children: null,
    permissions: [],
    fetchPermissions: () => Promise.resolve([]),
    parser: () => []
};

export default function Provider({ children, fetchPermissions, permissions, parser }) {
    const [permissionKeys, setPermissions] = useState(permissions);
    useEffect(() => {
        fetchPermissions().then(res => {
            let parsedData = parser(res);
            setPermissions([...new Set([...permissions, ...parsedData])]);
        });
    }, []);
    return (
        <AuthContext.Provider
            value={{
                permissions: permissionKeys,
                setPermissions // 提供在子组件中修改权限的一个方法
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
