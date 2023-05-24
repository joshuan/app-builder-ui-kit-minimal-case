import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

import routes from './routes';

const nodekit = new NodeKit({
    config: { appPort: 8080 },
});

const app = new ExpressKit(nodekit, routes);

app.run();
