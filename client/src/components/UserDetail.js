import React, { Component } from 'react';
import axios from 'axios';

class UserDetail extends Component {
    
  state={
    userDetail:[]
    }

     componentDidMount(){
        const { itemid } = this.props.match.params;
        axios.get(`/userdetailReact/${itemid}`)
        .then((res)=>{
            const { data } = res;
            this.setState({userDetail: data})
        })
    }
    render() {
        console.log(this.state.userDetail);
     return(
       <div className="container ">
        <div className="jumbotron">
            <h1 className="display-4 uppercase">{this.state.userDetail.fname} {this.state.userDetail.lname}</h1>

            <p className="text-danger lead  ">{ this.state.userDetail.city }, { this.state.userDetail.state } - { this.state.userDetail.zip }, { this.state.userDetail.email } , { this.state.userDetail.phone }</p>

            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <div className="row">

                <div className="col-md-6">
                    <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                </div>

                <div className="col-md-6">
                    <h3 className="my-3">Project Description</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida
                        pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus.
                        Mauris ultricies, justo eu convallis placerat, felis enim.</p>
                    <h3 className="my-3">Project Details</h3>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Dolor Sit Amet</li>
                        <li>Consectetur</li>
                        <li>Adipiscing Elit</li>
                    </ul>
                </div>

            </div>
 
            <h3 className="my-4">Related Projects</h3>

            <div className="row">

                <div className="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                            <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                        </a>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <a href="#">
                        <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
                    </a>
                </div>

            </div>
            <p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
            <p>It uses utility classes for typography and spacing to space content out within the larger container. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
        </div>
    </div>
     );
    }
 }
 
export default UserDetail;