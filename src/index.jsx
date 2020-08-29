import React from 'react';
import ExtReactDOM from '@sencha/ext-react-modern';
import { App } from './App';
import './style/index.less';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root element not found');
}
ExtReactDOM.render(<App />, document.getElementById('root'));
