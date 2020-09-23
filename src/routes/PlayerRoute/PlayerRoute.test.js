import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayerRoute from "./PlayerRoute";


configure({adapter: new Adapter()});
describe('<PlayerRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <PlayerRoute />
      </BrowserRouter>,
    );
  });
});