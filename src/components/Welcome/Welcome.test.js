import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from "./Welcome";


configure({adapter: new Adapter()});
describe('<Welcome />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>,
    );
  });
});