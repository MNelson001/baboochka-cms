/*

  Standard Layout
  props: 
    - color
    - brand
    - up to two content-pieces
    
*/
import React from 'react';

class StandardLayout extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="standard-layout">
      
        <style jsx>{`

          .standard-layout {
            background-color: ${this.props.standard_bg};
            height: 100%;
            width: 100%;
          }

        `}</style> 
      </div>
    )
  }
}

export default StandardLayout;