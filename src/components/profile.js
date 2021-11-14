import React, {Component} from 'react';
import image from '../profile_pic.jpeg';


export default class Profile extends Component{
  
    render() {
        
        return (
        <div >  
            <form className = "form">
            <h2 style = {{textAlign: 'center'}}>Amira Sandy</h2>
            <img src={image} width="300" height="200" alt="UTD" style = {{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
            <h5 style = {{marginTop: 30}}>Your Profile</h5>
            <label>Name</label>
            <input name="Name"  />
            <label>Address</label>
            <input name="About Me" />
            <label>Date</label>
            <input name="Favorite Hobby" />
            <label>Order Number</label>
            <input name="Your Goal on this App"/>
            <input className = "submitButton" type="update" />
            </form>
        </div>
        )
        }
}
