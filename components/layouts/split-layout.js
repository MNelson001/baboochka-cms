/*

  Split Layout
  props: 
    - 2 colors ( left and right backgrounds )
    - up to four content-pieces ( 2 left 2 right )
    - Can change the width of either side via props

*/

import React from 'react';

class SplitLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="split-layout">

        <div className="left">
          {this.props.left_component || ''}
        </div>
      
        <div className="right">
          {this.props.right_component || ''}
        </div>

        <style jsx>{`
        
          .split-layout {
            display: flex;
            height: 100%;
            width: 100%;
          }

          .split-layout .left,
          .split-layout .right {
            align-items: center;
            display: flex;
            height: inherit;
            justify-content: center;
          }

          .split-layout .left {
            background-color: ${this.props.left_background_color || '#ffffff'};
            width: ${this.props.left_width || '50%'}
          }

          .split-layout .right {
            background-color: ${this.props.right_background_color || '#ffffff'};
            width: ${this.props.right_width || '50%'}
          }

          //  -------------- TABLET ------------------

          @media (max-width: 994px) {
            .split-layout .left,
            .split-layout .right {
              width: 50%;
            }
          }

          // --------------- MOBILE --------------------

          @media (max-width: 728px) {
            .split-layout {
              flex-direction: column;
            }

            .split-layout .right,
            .split-layout .left {
              width: 100%;
            }

            .split-layout .right {
              display: none;
            }

            .split-layout .left {
              height: ${this.props.left_height || '50%'};
            }
          }

        `}</style>

      </div>
    )
  }
}

export default SplitLayout;