import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WaveChip from "./WaveChip";


configure({adapter: new Adapter()});
describe('<WaveChip />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <WaveChip />
      </BrowserRouter>,
    );
  });
});