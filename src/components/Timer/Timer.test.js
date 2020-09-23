import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timer from "./Timer";


configure({adapter: new Adapter()});
describe('<Timer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Timer />
      </BrowserRouter>,
    );
  });
});