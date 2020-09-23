import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GammaAV from "./GammaAV";


configure({adapter: new Adapter()});
describe('<GammaAV />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <GammaAV />
      </BrowserRouter>,
    );
  });
});