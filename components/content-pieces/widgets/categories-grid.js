import React from 'react';

class CategroiesGridWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="categories-grid-widget">

        <div className="category-card">
          <p>Initial Content</p>
        </div>
        <div className="category-card">
          <p>Initial Content</p>
        </div>
        <div className="category-card">
          <p>Initial Content</p>
        </div>
        <div className="category-card">
          <p>Initial Content</p>
        </div>

        <style jsx>{`
          .categories-grid-widget {
            height: ${this.props.height || '100%'};
            width: ${this.props.width || '100%'};
            display: grid;
            grid-template-columns: repeat(2, 50%);
            grid-template-rows: repeat(2, 50%);
          }

          .categories-grid-widget .category-card {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    )
  }
}

export default CategroiesGridWidget;