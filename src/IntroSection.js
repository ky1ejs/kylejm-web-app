import React, { Component } from 'react'
import './IntroSection.css'
import profilePhoto from './profile_photo.jpeg';

export default class IntroSection extends Component {
  render() {
    return (
      <div className="intro-section">
        <img src={profilePhoto} className="profile-photo" alt="logo" />
        <div className="purple-box">
        </div>
      </div>
    )
  }
}
