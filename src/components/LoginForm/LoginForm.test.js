import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from "./LoginForm";


configure({adapter: new Adapter()});
describe('<LoginForm />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
    );
  });
});
