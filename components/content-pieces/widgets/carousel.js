/*

  Carousel Widget:
    - Uses bootstrap carousel
    - By default is 100% height / width of parent
    - By default has a margin of 15px;

*/

import React from 'react';

class CarouselWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="carousel-widget">

        <style jsx>{`

          .carousel-widget {
            height: ${this.props.carousel_height || '100%'}
            margin: ${this.props.carousel_margin || '15px'}
            width: ${this.props.carousel_width || '100%'}
          }

        `}</style>
      </div>
    )
  }
}

export default CarouselWidget;