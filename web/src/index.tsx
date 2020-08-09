import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import { ConnectionsProvider } from './providers/connectionsProvider';
import { TeacherProvider } from './providers/teacherProvider';

import './assets/styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <ConnectionsProvider>
      <TeacherProvider>
        <Routes />
      </TeacherProvider>
    </ConnectionsProvider>

    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
