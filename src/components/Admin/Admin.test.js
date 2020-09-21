import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Admin from "./Admin";


configure({adapter: new Adapter()});
describe.skip('<Admin />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>,
    );
  });
});
//TODO Remove .skip from Admin test 