import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInfo from "./UserInfo";


configure({adapter: new Adapter()});
describe('<UserInfo />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <UserInfo />
      </BrowserRouter>,
    );
  });
});