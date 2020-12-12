import React,{Component} from 'react';
import {Accordion,Card,Button} from 'react-bootstrap';
import axios from 'axios';




class State extends Component{
    constructor(props){
        super(props);
        this.state={
            stateData:{},
            currentData:[]
        }
    }

    componentDidMount(){
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response =>{
            this.setState({stateData:response.data})
        })


        axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then(response =>{
          console.log("helloe",response.data.regionData)
          this.setState({currentData:response.data.regionData})
         
         
          

          
            
        })  
    }
    render(){
       
        let keys=Object.keys(this.state.stateData)
        
        let v =keys.splice(0,1)

        
        
        
        return(
            <div className="row">
                <div className="col-md-12">
                <Accordion >
                    {
                        keys.map((state,k)=>{
                            let districts= this.state.stateData[state].districtData
                            let districtkeys=Object.keys(districts)
                            let total_active=0
                            let total_confirmed=0
                            let total_death=0
                            let total_recoverd = 0
                            let districtslist=[]
                            for(let x in districts){
                                total_active += districts[x].active;
                                total_confirmed +=districts[x].confirmed;
                                total_death +=districts[x].deceased;
                                total_recoverd +=districts[x].recovered;
                                let ob =districts[x]
                                ob["district_name"]=x
                                districtslist.push(ob)




                            }
                            
                            return(
                                <Card>
                                <Card.Header>
                                
                                    
                                        
                                            <Accordion.Toggle as={Button} variant="primary" eventKey={state} className="float-left">
                                            {state} <span className="btn-dark">Total Cases - {total_confirmed}</span>  <span className="btn-warning"> Active  - {total_active}</span> <span className="btn-success">Recoverd - {total_recoverd}</span> <span className="btn-danger">Deaths - {total_death}</span> 
                                            </Accordion.Toggle>
                                        
                                    
                                   
                               
                                </Card.Header>
                                <Accordion.Collapse eventKey={state}>
                                <Card.Body>
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>District</th>
                                                <th>Confirmed</th>
                                                <th>Active</th>
                                                <th>Recoverd</th>
                                                <th>Deaths</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {
                                               districtslist.map((dis,k)=>{
                                                   return(
                                                       <tr>
                                                           <td>{dis.district_name}</td>
                                                           <td>{dis.confirmed}</td>
                                                           <td>{dis.active}</td>
                                                           <td>{dis.recovered}</td>
                                                           <td>{dis.deceased}</td>
                                                       </tr>
                                                   )
                                               })
                                           }
                                            <tr>

                                            </tr>
                                        </tbody>
                                    </table>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                                
                            )
                        })
                    }

               
                
                </Accordion>
                </div>
                
            </div>
        )
    }
}

export default State;