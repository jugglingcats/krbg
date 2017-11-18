import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {AppController} from "./site/AppController";
import {Provider} from "mobx-react";
import {App} from "./site/App";

import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css'
import './site/assets/index.css';
import './site/assets/App.css';
import {Layout} from "./site/component/Layout";

const controller = new AppController();
ReactDOM.render(
    <Provider controller={controller}>
        <Router>
            <div>
                <Layout><App/></Layout>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
