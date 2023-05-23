import {createLayoutPlugin, createRenderFunction} from '@gravity-ui/app-layout';
import type {Request as ExpressRequest, Response as ExpressResponse} from 'express';

const renderLayout = createRenderFunction([
    createLayoutPlugin({
        manifest: './dist/public/build/assets-manifest.json',
        publicPath: '/build/',
    }),
]);

export default {
    'GET /': (_req: ExpressRequest, res: ExpressResponse) => {
        res.send(
            renderLayout({
                title: 'WWW server',
                bodyContent: {
                    root: `...`,
                },
                data: {
                    calc: [1, 2],
                },
                pluginsOptions: {
                    layout: {
                        name: 'index',
                    },
                },
            }),
        );
    },
};
