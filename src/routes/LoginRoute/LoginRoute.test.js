import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginRoute from "./LoginRoute";


configure({adapter: new Adapter()});
describe('<LoginRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <LoginRoute />
      </BrowserRouter>,
    );
  });
});