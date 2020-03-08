import * as React from 'react';

type Props = {
  permission: String | Number;
  callback: Function;
};

export class PermissionProvider extends React.Component<Props, any> {}
export class Permission extends React.Component<checkPropTypes, any> {}
export function usePermissions(): Boolean;
