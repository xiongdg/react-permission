import React from 'react';
import { withAuth } from '@westernwood/guardian';

export default withAuth(0)(function() {
    return <h3>权限0</h3>;
});
