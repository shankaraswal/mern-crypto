import React, { Component } from 'react';
import axios from 'axios';

class CryptoCoin extends Component {
    
  state={
    cryptoDetail:[],
    errmsg:''
    }

     componentDidMount(){
        const { coinid } = this.props.match.params;
        axios.get(`/cryptodetail/${coinid}`)
        .then((res)=>{
            const { data } = res;
           if(data.body.status.error_code === 0){ 
                this.setState({cryptoDetail: data})
            }
            else{
                this.setState({errmsg: data.body.status.error_message})
            }
        })
    }
    render() {
        console.log(this.state.cryptoDetail);
     return(
       <div className="container ">
        <div className="jumbotron text-center text-danger min-height200">
           {this.state.errmsg}
         </div>
     </div>
     );
    }
 }
 
export default CryptoCoin;