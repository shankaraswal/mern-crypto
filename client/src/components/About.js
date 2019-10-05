import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
            <h1 className="display-4">About Us!</h1>

            <p className="lead">This is a simple hero unit, a simple jumbotron-style
                component for calling extra attention to
                featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.
            </p>
            <ul className="list-unstyled">
                <li className="media">
                    <img src="https://via.placeholder.com/200x150.png?text=Test Image" className="mr-3" alt="..." />
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media my-4">
                        <img src="https://via.placeholder.com/200x150.png?text=Test Image" className="mr-3" alt="..." />
                        <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
                <li className="media">
                        <img src="https://via.placeholder.com/200x150.png?text=Test Image" className="mr-3" alt="..." />
                        <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
                        purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
                        vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
            </ul>

            <p>Created and designed by Google, Material Design is a design language that combines the classic
                principles of successful design along with innovation and technology. Google's goal is to develop a
                system of design that allows for a unified user experience across all their products on any
                platform.</p>
            <p>The metaphor of material defines the relationship between space and motion. The idea is that the
                technology is inspired by paper and ink and is utilized to facilitate creativity and innovation.
                Surfaces and edges provide familiar visual cues that allow users to quickly understand the
                technology beyond the physical world. </p>
            <p>The metaphor of material defines the relationship between space and motion. The idea is that the
                technology is inspired by paper and ink and is utilized to facilitate creativity and innovation.
                Surfaces and edges provide familiar visual cues that allow users to quickly understand the
                technology beyond the physical world. </p>
        </div>
    </div>   
    );
  }
}

export default About;