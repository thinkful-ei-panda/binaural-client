import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChangePasswordForm from "./ChangePasswordForm";


configure({adapter: new Adapter()});
describe('<Change Password Form />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <ChangePasswordForm />
      </BrowserRouter>,
    );
  });
});