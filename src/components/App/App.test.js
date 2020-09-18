import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App";


configure({adapter: new Adapter()});
describe('<App />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
});