import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LearnRoute from "./LearnRoute";


configure({adapter: new Adapter()});
describe('<LearnRoute />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <LearnRoute />
      </BrowserRouter>,
    );
  });
});