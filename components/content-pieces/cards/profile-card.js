import React from 'react';

class ProfileCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="login-card">
        <div className="cta-logo">
          <div className="cta-logo-container">
            <div className="cta-logo-circle">
              <i className={`${this.props.profile_pic ? this.props.profile_pic : 'fas fa-gamepad fa-4x logo'}`}></i>
            </div>
          </div>
        </div>

        <style jsx>{`
          .login-card {
            height: 100%;
          }
          
          .cta-logo {
            display: flex;
            height: 100%;
            justify-content: center;
            position: relative;
            width: 100%;
          }

          .cta-logo-container {
            align-items: center;
            background: ${this.props.container_bg || '#148596'};
            border-bottom: 3px solid #ffffff;
            box-shadow: 3px 3px 7px rgba(0,0,0,0.6);
            display: flex;
            height: 75%;
            justify-content: center;
            position: absolute;
            top: ${this.props.container_top || '-50px'};
            width: ${this.props.container_width || '60%'};
          }

          .cta-logo-circle {
            align-items: center;
            background-color: #e3e3e3;
            border-radius: 50%;
            display: flex;
            height: 8rem;
            justify-content: center;
            width: 8rem;
          }

          .cta-logo .logo {
            color: ${this.props.logo_color || '#148596'};
          }
        `}</style>
      </div>
    )
  }
}

export default ProfileCard;