import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DefaultAV from "./DefaultAV";


configure({adapter: new Adapter()});
describe('<DefaultAV />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <DefaultAV />
      </BrowserRouter>,
    );
  });
});