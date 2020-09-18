import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Visualizer from "./Visualizer";


configure({adapter: new Adapter()});
describe.skip('<Visualizer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Visualizer />
      </BrowserRouter>,
    );
  });
});
//TODO Remove .skip from Visualizer test 