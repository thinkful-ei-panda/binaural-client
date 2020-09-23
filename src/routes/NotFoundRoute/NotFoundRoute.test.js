import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFoundRoute from "./NotFoundRoute";


configure({adapter: new Adapter()});
describe('<NotFoundRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <NotFoundRoute />
      </BrowserRouter>,
    );
  });
});