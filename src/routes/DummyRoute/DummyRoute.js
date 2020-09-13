import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import SoundSelectForm from "../../components/SoundSelectForm/SoundSelectForm";

class DummyRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  render() {
    return (
      <section>
        <SoundSelectForm />
      </section>
    );
  }
}

export default DummyRoute;
