import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangePasswordRoute from "./ChangePasswordRoute";


configure({adapter: new Adapter()});
describe('<ChangePasswordRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <ChangePasswordRoute />
      </BrowserRouter>,
    );
  });
});