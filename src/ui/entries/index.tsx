import React from 'react';
import { render } from 'react-dom';
import { App } from '../components/App';

const rootEl = document.getElementById('root');

if (!rootEl) {
    throw new Error('Root element not found');
}

render(<App />, rootEl);
