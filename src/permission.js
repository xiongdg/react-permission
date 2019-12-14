/**
 * 提供class组件的装饰器来实现权限控制
 */

export default function permissions(target) {
    // const { permissions } = useContext();
    console.log(target);
    target.isTestable = true;
}
