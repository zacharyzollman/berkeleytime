import React, { PureComponent } from 'react';
import Property from './Property';
import ProfileCard from './ProfileCard';
import EditPencil from '../../assets/svg/profile/edit.svg';

class AccountSubview extends PureComponent {
  render() {
  
    //Information has been hardcoded for testing purposes only
    const options = [
      { value: "Psychology", label: "Psychology" },
      { value: "Physics", label: "Physics" },
      { value: "Philosophy", label: "Philosophy" },
      { value: "Rhetoric", label: "Rhetoric" },
    ];

    return (
      <div className="profile-subview">
        <h1>Your Account</h1>
        <h2>Personal Information</h2>

        {/* Information has been hardcoded for testing purposes only */}
        <Property options = {options} attribute="Full Name" value="Oski Bear"/>
        <Property options = {options} attribute="bConnected Email" value="oski@berkeley.edu"/>
        <Property options = {options} attribute="Major(s)" value="Psychology"/>
        
        <div className="profile-title">
        <h2>Saved Classes</h2>
        <button className="edit-button"><img className="edit-pencil" src={EditPencil} alt="Edit Classes"/></button>
        </div>

        {/* Information has been hardcoded for testing purposes only */}
        <ProfileCard abbreviation="ASAMST" course_number="143AC" title="Asian American Health" letter_average="A" enrolled_percentage=".5" units="3"/>
        
        <p className="see-all-classes">See all classes</p>
      </div>
    );
  }
}

export default AccountSubview;