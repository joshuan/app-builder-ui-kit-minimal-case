import React from 'react';
import {ThemeProvider, Text} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import { Calculator } from './Calculator';

export const App = () => (
    <ThemeProvider theme="light">
        <Text variant="code-3">Hello code from react</Text>
        <Calculator />
    </ThemeProvider>
);
