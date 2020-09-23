import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BetaAV from "./BetaAV";


configure({adapter: new Adapter()});
describe('<BetaAV />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <BetaAV />
      </BrowserRouter>,
    );
  });
});