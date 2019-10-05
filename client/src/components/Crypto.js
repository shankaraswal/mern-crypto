import React, { Component } from 'react';
import axios from 'axios';
import SiteLoader from './Loader';
import { NavLink, Link } from 'react-router-dom'

class Crypto extends Component {
    constructor(props) {
        super(props);
      }

    state={
        //currList:[{"id":1,"name":"Bitcoin","symbol":"BTC","slug":"bitcoin","num_market_pairs":8062,"date_added":"2013-04-28T00:00:00.000Z","tags":["mineable"],"max_supply":21000000,"circulating_supply":17975337,"total_supply":17975337,"platform":null,"cmc_rank":1,"last_updated":"2019-10-05T18:54:35.000Z","quote":{"USD":{"price":8119.13737605,"volume_24h":11890886003.0817,"percent_change_1h":0.195751,"percent_change_24h":-1.2588,"percent_change_7d":-0.860277,"market_cap":145944230483.7945,"last_updated":"2019-10-05T18:54:35.000Z"}}},{"id":1027,"name":"Ethereum","symbol":"ETH","slug":"ethereum","num_market_pairs":5557,"date_added":"2015-08-07T00:00:00.000Z","tags":["mineable"],"max_supply":null,"circulating_supply":108025226.749,"total_supply":108025226.749,"platform":null,"cmc_rank":2,"last_updated":"2019-10-05T18:55:21.000Z","quote":{"USD":{"price":175.508420627,"volume_24h":5681589076.93687,"percent_change_1h":0.0356637,"percent_change_24h":-1.40994,"percent_change_7d":0.938952,"market_cap":18959336934.59054,"last_updated":"2019-10-05T18:55:21.000Z"}}},{"id":52,"name":"XRP","symbol":"XRP","slug":"ripple","num_market_pairs":466,"date_added":"2013-08-04T00:00:00.000Z","tags":[],"max_supply":100000000000,"circulating_supply":43121735112,"total_supply":99991336298,"platform":null,"cmc_rank":3,"last_updated":"2019-10-05T18:55:04.000Z","quote":{"USD":{"price":0.253815771,"volume_24h":866595031.481758,"percent_change_1h":-0.25329,"percent_change_24h":-0.195578,"percent_change_7d":4.61365,"market_cap":10944976444.310053,"last_updated":"2019-10-05T18:55:04.000Z"}}},{"id":825,"name":"Tether","symbol":"USDT","slug":"tether","num_market_pairs":3410,"date_added":"2015-02-25T00:00:00.000Z","tags":[],"max_supply":null,"circulating_supply":4108044456.1,"total_supply":4207771504.46,"platform":{"id":83,"name":"Omni","symbol":"OMNI","slug":"omni","token_address":"31"},"cmc_rank":4,"last_updated":"2019-10-05T18:55:17.000Z","quote":{"USD":{"price":1.00471590135,"volume_24h":14147184681.4665,"percent_change_1h":-0.0623967,"percent_change_24h":-0.21811,"percent_change_7d":-0.305063,"market_cap":4127417588.4963818,"last_updated":"2019-10-05T18:55:17.000Z"}}},{"id":1831,"name":"Bitcoin Cash","symbol":"BCH","slug":"bitcoin-cash","num_market_pairs":401,"date_added":"2017-07-23T00:00:00.000Z","tags":["mineable"],"max_supply":21000000,"circulating_supply":18040900,"total_supply":18040900,"platform":null,"cmc_rank":5,"last_updated":"2019-10-05T18:55:06.000Z","quote":{"USD":{"price":222.364871497,"volume_24h":1028921420.24247,"percent_change_1h":-0.105713,"percent_change_24h":-1.00789,"percent_change_7d":-1.98389,"market_cap":4011662410.190227,"last_updated":"2019-10-05T18:55:06.000Z"}}}],
        currList: [],
        isLoading:true
    }


    componentDidMount(){
        this.getdData();        
    }


    getdData= async ()=>{
        await axios.get('/crypto')
            .then((res)=>{
                const { data } = res.data;
                this.setState({currList: data, isLoading:false})
            })
            .catch((err)=>{
                this.setState({isLoading:true})
            })

        }

  render() {
    console.log(this.state.currList)
    return (
        <div className="container">
        { (this.state.isLoading) ? <div className="text-center min-height200">
            <SiteLoader></SiteLoader>
        </div> 
        : 
        <div className="row mt-3">


          
          {this.state.currList.map(item=>(
            <div className="col-md-4" key={item.id}>
                <div className="card border-default mb-3" id={item.id}>
                    <h5 className="card-header">{item.name}</h5>
                    <div className="card-body text-secondary">
                        <p>
                        Rank: {item.cmc_rank} <br />
                        USD Price: <b className="text-danger">{item.quote.USD.price}</b> <br />
                        Market Cap: {item.quote.USD.market_cap}
                        </p>
                    </div>

                    <div className="card-footer bg-transparent border-default text-center">
                        <NavLink to={`/cryptodetail/${item.id}`} className="btn text-white btn-success btn-sm">Detail</NavLink> 
                    </div>
                </div>
            </div>
            )
            )}


          </div>

             }
          </div>
        );
      }
    }

export default Crypto;
