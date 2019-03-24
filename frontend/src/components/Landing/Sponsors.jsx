import React from 'react';
import eat_club_logo from '../../assets/img/images/landing/eat_club_logo.png';
import asuc_logo from '../../assets/img/images/landing/asuc_logo.png';
import stf_logo from '../../assets/img/images/landing/stf_logo.png';

function Sponsors() {
  return (
    <div className="landing-sponsors">
          <div className="landing-sponsors-desc">
            <h3 className="has-text-centered">Sponsors and Donors</h3>
            <p className="has-text-centered">A big shoutout to the folks that help the BerkeleyTime team continue to provide this service free-of-charge to students.</p>
          </div>
          <div className="landing-sponsors-img-wrapper">
            <img className="landing-sponsors-img" src={eat_club_logo} alt="eat_club" />
            <img className="landing-sponsors-img" src={asuc_logo} alt="asuc" />
            <img className="landing-sponsors-img" src={stf_logo} alt="stf" />
          </div>
    </div>
  );
}

export default Sponsors;