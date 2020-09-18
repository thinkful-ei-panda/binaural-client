import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Learn from "./Learn";


configure({adapter: new Adapter()});
describe('<Learn />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Learn />
      </BrowserRouter>,
    );
  });
});
