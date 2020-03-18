import * as React from 'react';

type Props = {
	permission: String | Number;
	fallback: Function;
	children: React.Component | Array<React.Component>
};

export class PermissionProvider extends React.Component<Props, any> {}
export class Permission extends React.Component<Props, any> {}
