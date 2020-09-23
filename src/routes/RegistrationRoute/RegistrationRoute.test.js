import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationRoute from "./RegistrationRoute";


configure({adapter: new Adapter()});
describe('<RegistrationRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <RegistrationRoute />
      </BrowserRouter>,
    );
  });
});