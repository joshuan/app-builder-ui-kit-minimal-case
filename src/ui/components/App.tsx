import React from 'react';

import {Calculator} from './Calculator';
import {Text} from './Text';

export const App = () => {
    return (
        <div>
            <Text>Hello, Calculator!</Text>
            <Calculator />
        </div>
    );
};
