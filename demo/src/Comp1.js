import React from 'react';
import { withAuth } from '@westernwood/guardian';

export default withAuth(1)(function(props) {
    return <h3>权限1</h3>;
});
