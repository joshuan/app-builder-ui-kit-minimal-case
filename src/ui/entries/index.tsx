import {configure} from '@gravity-ui/uikit';
import React from 'react';
import {createRoot} from 'react-dom/client';

import {App} from '../components/App';

configure({
    lang: 'ru',
});

const rootEl = document.getElementById('root');

if (!rootEl) {
    throw new Error('Root element not found');
}

const root = createRoot(rootEl);

root.render(<App />);
