import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WaveSplash from "./WaveSplash";


configure({adapter: new Adapter()});
describe('<WaveSplash />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <WaveSplash />
      </BrowserRouter>,
    );
  });
});