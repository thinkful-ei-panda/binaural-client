import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInfo from "./UserInfo";

configure({adapter: new Adapter()});
describe('<UserInfo />', () => {
  it('renders without crashing', () => {
    const user = {
      name: "Test",
      email: "email@email.com",
      id: 1,
      create_date: new Date()
    }
    mount(
      <BrowserRouter>
        <UserInfo user={user}/>
      </BrowserRouter>,
    );
  });
});