import {ThemeProvider} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import React from 'react';

import {Calculator} from './Calculator';
import {Text} from './Text';

export const App = () => {
    return (
        <ThemeProvider theme="light">
            <div>
                <Text>Hello, Calculator!</Text>
                <Calculator />
            </div>
        </ThemeProvider>
    );
};
