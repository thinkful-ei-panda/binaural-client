import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminRoute from "./AdminRoute";


configure({adapter: new Adapter()});
describe('<AdminRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AdminRoute />
      </BrowserRouter>,
    );
  });
});