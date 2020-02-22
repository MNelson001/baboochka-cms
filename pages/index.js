import React from 'react';

// Layouts
import SplitLayout from '../components/layouts/split-layout';

// Widgets
import CtaSigninWidget from '../components/content-pieces/widgets/cta-signin';
import CategoriesGridWidget from '../components/content-pieces/widgets/categories-grid';

class Home extends React.Component {

  render() {
    return (
      <div className="home-page">

        <section id="splash">

          <SplitLayout
            left_background_color="#949FA6"
            left_width="35%"
            right_background_color="#4A5864"
            right_width="65%"

            // Widgets
            left_component={<CtaSigninWidget  background_image="https://images.pexels.com/photos/539986/pexels-photo-539986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />}
            right_component={<CategoriesGridWidget />}

            // Mobile props
            left_height="100%"
            right_height="0%"
          />
        
        </section>

        <section id="about">
        
        </section>

        <section id="contact">
        
        </section>

        <style jsx>{`

          .home-page {
            
          }

          .home-page section {
            height: 100%;
            width: 100%;
          }

        `}</style>
      </div>
    )
  }
}

export default Home;