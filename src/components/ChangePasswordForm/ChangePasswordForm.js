import React from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Form/Form";
import UserApiService from "../../services/user-api-service";
//import UserContext from "../../contexts/UserContext";
import Button from "../Button/Button";
import "../App/App.css";

export default class ChangePasswordForm extends React.Component {
    constructor(props){
      super(props);

      this.state ={
          password: '',
          error: null,
          user_id: 11, //TODO CHANGE THE user_id
      }
      this.updatePassInfo = this.updatePassInfo.bind(this);
  };

  //CHANGE THE FIELD FORMS 
  handlePassUpdate = (event) =>
  this.setState({
    [event.target.name]: event.target.value,
  });

  //FUNCTION THAT TALKS TO THE API TO UPDATE THE USER PASS
  async updatePassInfo(event){
      event.preventDefault();

      const user_id = this.state.user_id;
      
      const myPass = await UserApiService
      .updateUserPassword(user_id, {
          password: this.state.password,
      })

      if(myPass.error !== undefined){
          this.setState({ error: myPass.error});      
      }
      else{
          this.props.history.push('/logout');
      }
  };

    handleLogoutClick = () => {
		this.context.processLogout();
		const { location, history } = this.props;
		const destination = (location.state || {}).from || '/login';
		history.push(destination);
  };


  render() {
    const { error } = this.state;
    return (
      <form className="ChangePasswordForm" onSubmit={this.updatePassInfo}>
        {/* DISPLAY OF THE FORM WITH THE PASSWORD FIELD TO BE UPDATED */}
        <div role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor="change-password-input" hidden>
            Change Password
          </Label>
          <Input
            id="change-password-input"
            name="password"
            type="password"
            placeholder="New Password"
            onChange={this.handlePassUpdate}
            required
          />
        </div>
        <Link onClick={this.updatePassInfo} to="/login">
          <Button type="submit">Save Password</Button>
        </Link>
      </form>
    );
  }
}
