import React from 'react';
import { createRoot } from 'react-dom/client';
import {Button} from '@gravity-ui/uikit';
import '@gravity-ui/uikit/styles/styles.css';
import {ThemeProvider} from '@gravity-ui/uikit';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
    <ThemeProvider theme="light">
        <h1>Hello from raect</h1>
        <Button view="action" size="l">I am button</Button>
    </ThemeProvider>
);