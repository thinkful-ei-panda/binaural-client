import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioVisualizer from "./AudioVisualizer";


configure({adapter: new Adapter()});
describe('<AudioVisualizer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AudioVisualizer />
      </BrowserRouter>,
    );
  });
});