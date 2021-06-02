import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App/app';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

ReactDom.render(<App/>,document.getElementById('root'));