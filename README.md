# react 权限管理工具

##　 Permission 组件

```jsx
// 单独使用Permission组件
import React from 'react';
import ReactDOM from 'react-dom';
import { Permission } from 'react-permissions';

ReactDOM.render(
  <Permission fallback={() => <h1>权限不足</h1>} permissions={[1, 2, 3]}>
    <div permission={1}>权限1</div> //
    <div permission={2}>权限2</div> //
    <div permission={4}>权限4</div> // 展示权限不足
  </Permission>,
  document.getElementById('root')
);

/**
<Permission
    fallback={ReactComponent} // 权限不满足时候的展示组件。接收一个合法的组件作为参数
    permission={Array|String|Number} // 组件接收的权限码。
/>
**/
```

## PermissionProvider 使用 react 上下文来存储接口获取到的权限码集合。

```jsx

// Provider和permission的结合使用

import React from "react";
import ReactDOM from "react-dom";
import { Permission， PermissionProvider } from 'react-permissions';

const fetchPermissions = () => {
    return Promise.resolve([1,2,3,4,5]);
}

function Root() {
    return <Permission>
                <div permission={1} />
                <div permission={2} />
                <div permission={3} />
            </Permission>

}

fetchPermissions().then(res => {
    ReactDOM.render(
        <PermissionContext.Provider value={{
            permissions={res.permissions} // 设置全局的权限，可以传入一个promise方法。
            fallback={()=> <h1>没有权限</h1>} // 设置全局的无权限的替代组件。
        }}>
            <Root />
        </PermissionContext.Provider>
        ,document.getElementById('root')
    )
})


/**
 * <PermissionContext.Provider value={{
 *      permissions={{}} // 权限嘛，接收promise， 数组，数字和字符串, 有序的序列。
 *      fallback={<div>没有权限</div>} // 没有权限时候的展示。
 * }}>
 */
```
