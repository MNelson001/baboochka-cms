/*
  Type: Widget
  props: {
    bg_img
    cta_br
    cta_bs
    cta_height
    cta_width
  }
*/

import React from 'react';

import ProfileCard from '../cards/profile-card';

function Sign_in_form() {
  return(
    <form className="sign_in_form">
      <div className="form-group">
        <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Email" />
        <small id="emailHelp" style={{color: "#ffffff"}} className="form-text">We will never share your email with anyone.</small>

        <input type="password" className="form-control" id="userPassword" aria-describedby="passwordHelp" placeholder="Password" />
        <small id="passwordHelp" style={{color: "#ffffff"}} className="form-text">
          <a href="#">Forgot Password</a>
        </small>
      </div>

      <style jsx>{`
        .sign_in_form {
          width: 80%;
          margin: 0 auto;
        }
      `}</style>

    </form>
  )
}

function Sign_up_form() {
  return(
    <form className="sign_up_form">
      <div className="form-group">
        <input type="email" className="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Email" />
        <small id="emailHelp" style={{color: "#ffffff"}} className="form-text">We will never share your email with anyone.</small>

        <input type="password" className="form-control" id="userPassword" aria-describedby="passwordHelp" placeholder="Password" />
        <small id="passwordHelp" style={{color: "#ffffff"}} className="form-text">You should probably make a secure password.</small>

        <input type="password" className="form-control" id="userPassword" aria-describedby="passwordHelp" placeholder="Password" />
        <small id="passwordHelp" style={{color: "#ffffff"}} className="form-text">
          <a href="#">Forgot Password</a>
        </small>
      </div>

      <style jsx>{`
        .sign_up_form {
          width: 80%;
          margin: 0 auto;
        }
      `}</style>
    </form>
  )
}

/*
  CtaSignIn: {
    bg_img: string ( url or path )
    cta_br: string ( e.g. '5px )
    cta_bs:  string ( e.g. 3px 3px 7px <hexcode> )
    cta_height: string ( e.g. '100%' )
    cta_width: string ( e.g. '100%' )
  }
*/
class CtaSigninWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_input: 'sign_in'
    };
  }

  render_user_form(signin_type) {
    switch(signin_type) {

      case 'sign_up':
        this.setState({
          user_input: 'sign_up'
        })
        break;

      case 'sign_in':
        this.setState({
          user_input: 'sign_in'
        })
        break;

    }
  }

  render() {
    return(
      <div className={`cta-sign-in ${this.props.background_image ? 'bg_img' : 'bg_color'}`}>

        <div className="profile-card">
          <ProfileCard />
        </div>

        <div className="cta-login-form">
          {
            this.state.user_input === 'sign_in' ?
              <Sign_in_form /> : <Sign_up_form />
          }
          <div className="login-btns">
            <button className="btn btn-info">{this.state.user_input === 'sign_in' ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </div>

        <div className="cta-btns">
          <button className="btn btn-info btn-custom" onClick={() => this.render_user_form('sign_up')}>Sign Up</button>
          <button className="btn btn-info btn-custom" onClick={() => this.render_user_form('sign_in')}>Sign In</button>
        </div>

        <style jsx>{`
          .cta-sign-in {
            border-radius: ${this.props.border_radius || '5px'};
            box-shadow: ${this.props.box_shadow || '3px 3px 7px rgba(0,0,0,0.6)'};
            display: grid;
            grid-template-rows: ${this.props.grid_template_rows || '45% auto'};
            height: ${this.props.height || '75%'};
            width: ${this.props.width || '70%'};
            position: relative;
          }

          .bg_img {
            background-image: url(${this.props.background_image || ''});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }

          .cta-sign-in .bg_color {
            background: ${this.props.background_color || 'rgba(255,255,255,0.6)'};
          }

          .cta-sign-in .cta-login-form {
            display: flex;
            flex-direction: column;
          }

          .cta-sign-in .cta-btns {
            align-items: flex-end;
            bottom: -55px;
            display: flex;
            justify-content: flex-end;
            position: absolute;
            right: 10px;
          }

          .cta-sign-in .cta-btns .btn {
            color: #ffffff;
            margin: 5px;
          }

          .cta-sign-in .btn-custom {
            background-color: transparent;
            height: 50%;
            margin: 5px;
            border-color: transparent;
            outline: none;
          }

          .cta-sign-in .sign_up_form,
          .cta-sign-in .sign_in_form {
            width: 85%;
          }

          .cta-sign-in .login-btns {
            margin: 0 auto;
            width: 80%;
          }

          .cta-sign-in .login-btns .btn {
            width: 100%;
          }

          @media (max-width: 728px) {
            .cta-sign-in {
              height: 100%;
              width: 100%;
              grid-template-rows: 100%;
            }

            .cta-sign-in .cta-btns {
              top: unset;
              bottom: 0;
            }

            .cta-sign-in .profile-card {
              display: none;
            }

            .cta-login-form {
              display: flex;
              justify-content: center;
            }
          }

        `}</style>
      </div>
    )
  }
}

export default CtaSigninWidget;