import React from 'react';

function Guardian() {
    return function({ children: C, ...rest }) {
        return React.createElement(C, {
            ...C.props,
            ...rest
        });
    };
}

export default Guardian;
