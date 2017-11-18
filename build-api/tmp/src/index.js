import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AppController } from "./AppController";
import { Provider } from "mobx-react";
import { App } from "./App";
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';
import './index.css';
import './App.css';
import { Layout } from "./site/Layout";
var controller = new AppController();
ReactDOM.render(React.createElement(Provider, { controller: controller },
    React.createElement(Router, null,
        React.createElement("div", null,
            React.createElement(Layout, null,
                React.createElement(App, null))))), document.getElementById('root'));
// registerServiceWorker();
//# sourceMappingURL=index.js.map