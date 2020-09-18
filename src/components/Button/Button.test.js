import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from "./Button";


configure({adapter: new Adapter()});
describe('<Button />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Button />
      </BrowserRouter>,
    );
  });
});
