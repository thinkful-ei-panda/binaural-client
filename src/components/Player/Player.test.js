import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Player from "./Player";


configure({adapter: new Adapter()});
describe.skip('<Player />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Player />
      </BrowserRouter>,
    );
  });
});
//TODO Remove .skip from Player test 