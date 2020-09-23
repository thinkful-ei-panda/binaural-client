import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeRoute from "./WelcomeRoute";


configure({adapter: new Adapter()});
describe('<WelcomeRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <WelcomeRoute />
      </BrowserRouter>,
    );
  });
});