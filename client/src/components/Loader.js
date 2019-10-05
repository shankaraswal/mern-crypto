import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

class SiteLoader extends Component {

    render() {
     return(
      <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         className="loader"
      />
     );
    }
 }
 
export default SiteLoader;