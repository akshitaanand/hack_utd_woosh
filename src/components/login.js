import React, { Component } from "react";

export default class Login extends Component {
    constructor(props){
        super(props);

        this.onChangeUser = this.onChangeUser.bind(this);
        this.onChangePass = this.onChangePass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
        }
    }

    onChangeUser(e){
        this.setState({username: e.target.value});
    }
    onChangePass(e){
        this.setState({password: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        if(this.state.username === "aa407@gmail.com" && this.state.password === "password"){
            this.props.history.push('/dashboard');
        }
    }
    render() {
        return (
            <div className = "form-box">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control" placeholder="Enter email" value = {this.state.username} onChange = {this.onChangeUser}/>
                </div>

                <div className="form-group" style = {{marginTop: 20}}>
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value = {this.state.password} onChange = {this.onChangePass}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label  style = {{marginTop: 20, marginBottom: 20}} className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick = {this.onSubmit}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>

        );
    }
}