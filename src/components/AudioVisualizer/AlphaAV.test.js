import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlphaAV from "./AlphaAV";


configure({adapter: new Adapter()});
describe('<AlphaAV />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AlphaAV />
      </BrowserRouter>,
    );
  });
});