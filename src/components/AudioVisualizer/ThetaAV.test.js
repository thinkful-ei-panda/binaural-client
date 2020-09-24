import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ThetaAV from "./ThetaAV";


configure({adapter: new Adapter()});
describe('<ThetaAV />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <ThetaAV />
      </BrowserRouter>,
    );
  });
});