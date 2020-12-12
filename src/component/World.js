import React,{Component} from 'react';
import axios from 'axios'


class World extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response =>{
            this.setState({data:response.data})
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Today Cases</th>
                                <th>Total Cases</th>
                                <th>Recoverd</th>
                                <th>Death</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((data,k)=>{
                                    return(
                                        <tr>
                                            <td>{data.country}
                                            <img src={data.countryInfo.flag} className="pl-3"  style={{width:"50px"}} alt=""/>
                                            </td>
                                            <td>{data.todayCases}</td>
                                            <td>{data.cases}</td>
                                            <td>{data.recovered}</td>
                                            <td>{data.deaths}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}

export default World;