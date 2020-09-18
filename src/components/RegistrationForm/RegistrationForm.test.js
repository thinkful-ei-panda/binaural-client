import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from "./RegistrationForm";


configure({adapter: new Adapter()});
describe('<Registration Form />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <RegistrationForm />
      </BrowserRouter>,
    );
  });
});
