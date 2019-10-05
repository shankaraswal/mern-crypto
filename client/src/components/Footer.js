import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-info my-0">
      <div className="container">
        <footer className="footer text-white">
            <div className="row">
              <div className="col-md-9">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col-md-3">
                <h5 className="">Links</h5>
                <ul>
                  <li><a className="text-white" href="#!">Link 1</a></li>
                  <li><a className="text-white" href="#!">Link 2</a></li>
                  <li><a className="text-white" href="#!">Link 3</a></li>
                  <li><a className="text-white" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          <div className="text-white">
            <p className="">© 2014 Copyright Text</p>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}

export default Footer;
