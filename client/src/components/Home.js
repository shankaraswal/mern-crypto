import React, { Component } from 'react';
import axios from 'axios';
import SiteLoader from './Loader';
import { NavLink, Link } from 'react-router-dom'

class Home extends Component {
    constructor(props) {
    super(props);
  }

  state={
    fname:'',
    lname:'',
    email:'',
    city:'',
    state:'',
    phone:'',
    zip:'',
    check:'',
    mylist:[],
    adduser:[],
    isEditing : false,
    is_checked: true,
    isDataSend:false,
    isLoading:true
  }

    componentDidMount(){
        this.getUpdatedData();        
        this.setState({check:this.state.is_checked ? 'working' : 'not working' });
    }

    componentDidUpdate(){
        if(this.state.isDataSend){this.getUpdatedData();}
    }

    getUpdatedData= async ()=>{
        await axios.get('/home')
        .then((res)=>{
            const { data } = res;
            this.setState({mylist: data,isDataSend: false, isLoading:false})
        })
        .catch((err)=>{
             this.setState({isDataSend: true, isLoading:true})
        })

        //const res = await axios.get('/home');
        // const { data } = await res;
        //this.setState({mylist: data,isDataSend: false})
        
        }

    resetForm=()=>{
        document.getElementById('myForm').reset();
        }

    handleSubmit =async (e)=>{
        e.preventDefault();
        let user ={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            city:this.state.city,
            state:this.state.state,
            phone:this.state.phone,
            zip:this.state.zip,
            check:this.state.check
           }
        
        let res = await axios.post('/sent', user)
        if(res.status === 200){
            this.resetForm();
            } 
            this.setState({isDataSend: true})    
         }


    editRecord=(id) => {
        // console.log(id)
    }

    updateRecord=(item)=>{

    }

    getDetail=(e, itemid)=>{
        console.log('detail', itemid);
        //axios.get(`/userdetail/${itemid}`)
    }

    deleteRecord=(e, itemid)=>{
         console.log('delete', itemid);
         axios.delete(`/remove/${itemid}`)
         .then(res => console.log(res.data));
         this.getUpdatedData();
    }

    toggleCheckbox=(e)=> {
        this.setState({is_checked: !this.state.is_checked});
        this.setState({check:this.state.is_checked ? 'working' : 'not working' });

    }

  render() {
   console.log(this.state.mylist.length)
    return (
      <div className="container">
      { this.state.isLoading ? <div className="text-center min-height200"><SiteLoader /></div> 
      : 
      <div className="jumbotron">
            <h1 className="display-4 ">Home!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style
                component for calling extra attention to
                featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.
            </p>
            <div className="pb-4">
            <form id="myForm" className="col-sm-12  alert alert-info border border-info" onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="fname" 
                            name="fname" 
                            placeholder="First Name"
                            onChange={(e)=>this.setState({fname:e.target.value})}
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lname" 
                            name="lname" 
                            placeholder="Last Name" 
                            onChange={(e)=>this.setState({lname:e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            placeholder="Email Address" 
                            onChange={(e)=>this.setState({email:e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Phone Number</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="phone" 
                            name="phone" 
                            placeholder="Phone Number" 
                            onChange={(e)=>this.setState({phone:e.target.value})}
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>City</label>
                        <input 
                            type="text" 
                            name="city" 
                            className="form-control" 
                            id="city" 
                            onChange={(e)=>this.setState({city:e.target.value})}
                        />
                    </div>
                    <div className="form-group col-md-4">
                        <label>State</label>
                        <select id="state" name="state" className="form-control" 
                        onChange={(e)=>this.setState({state:e.target.value})} >
                            <option defaultValue="">Select State</option>
                            <option value="DL">Delhi</option>
                            <option value="UP">UP</option>
                            <option value="HR">Haryana</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Zip</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="zip" 
                            id="zip" 
                            onChange={(e)=>this.setState({zip:e.target.value})} 
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <div className="form-check">
                            <input className="form-check-input" name="check" type="checkbox" id="check" 
                                onChange={this.toggleCheckbox} checked={this.state.is_checked}
                                />
                            <label className="form-check-label">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)} type="submit">Add Record</button>
                    </div>
                </div>
            </form>
            </div>
            
            {(this.state.mylist.length > 0) ? 
            <div className="row">
            {this.state.mylist.map(item=>(
            <div className="col-md-4" key={item._id}>
                <div className="card border-default mb-3" id={item._id}>
                    <h5 className="card-header">{item.fname} {item.lname}</h5>
                    <div className="card-body text-secondary">
                        <p>Email: {item.email} <br />
                        Phone: {item.phone} <br />
                        City: {item.city} <br />
                        State: <b className="text-danger">{item.state}</b> <br />
                        Zipcode: {item.zip} <br />
                        Status: {item.check} </p>
                    </div>
                    <div className="card-footer bg-transparent border-default text-center">
                        <NavLink to={`/userdetail/${item._id}`} className="btn text-white btn-success btn-sm">Detail</NavLink> <button className="btn btn-info text-white btn-sm">Update</button> <button onClick={e=>this.deleteRecord(e,item._id)} className="btn text-white btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            </div>
            )
            )}
        </div>
            : <div class="alert alert-warning" role="alert"> No records found!  </div>
            }
        </div>
           
        }
      </div>
    );
  }}

export default Home;
