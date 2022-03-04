import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import {Estudiantes} from './src/components/Estudiantes'

ReactDOM.render(
  <Provider store={store}>
    <Estudiantes/>
  </Provider>
)