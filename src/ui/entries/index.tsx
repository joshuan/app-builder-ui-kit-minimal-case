import React from 'react';
import { render } from 'react-dom';

const rootEl = document.getElementById('root');

if (!rootEl) {
    throw new Error('Root element not found');
}

render(<p>Hello from react</p>, rootEl);
