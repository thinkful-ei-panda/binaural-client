import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SoundSelectForm from "./SoundSelectForm";

describe(`SoundSelectForm Component`, () => {
  describe(`Smoke test`, () => {
    it(`Renders without crashing`, () => {
      const div = document.createElement("div");
      ReactDOM.render(
        <BrowserRouter>
          <SoundSelectForm />
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
