import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
import State from './State';
import axios from 'axios';


class India extends Component{
    constructor(props){
        super(props);
        this.state={
            data:{}
            
        }
       
    }

   componentDidMount(){
        axios.get("https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true").then(response =>{
          console.log("helloe",response.data)
         
          this.setState({data:response.data})
          

          
            
        })  
   }
    
    render(){
       
        return(
            
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/in/flat/64.png" alt=""/>
                    <h2>INDIA</h2>
                </div>
                <div className="col-md-12 pt-5">
                    <div className="row">
                        <div className="col-md-3">
                                <Card className="badge badge-info" style={{ width: '18rem' }}>
                                
                                    <Card.Body className="text-center">
                                    <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.totalCases}</h3>
                                    <Card.Text>
                                   
                                    </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                                <Card className="badge badge-warning" style={{ width: '18rem' }}>
                                
                                    <Card.Body className="text-center">
                                    <Card.Title>ACTIVE CASES</Card.Title>
                                    <h3>{this.state.data.activeCases}</h3>
                                    <Card.Text>
                                    [ TODAY : {this.state.data.activeCasesNew} ]
                                    </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                                <Card className="badge badge-success" style={{ width: '18rem' }}>
                                
                                    <Card.Body className="text-center">
                                    <Card.Title>RECOVERD</Card.Title>
                                    <h3>{this.state.data.recovered}</h3>
                                    <Card.Text>
                                
                                    </Card.Text>
                                    [ TODAY : {this.state.data.recoveredNew} ]
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-3">
                                <Card className="badge badge-danger" style={{ width: '18rem' }}>
                                
                                    <Card.Body className="text-center">
                                    <Card.Title>DEATHS</Card.Title>
                                    <h3>{this.state.data.deaths}</h3>
                                    <Card.Text>
                                    [ TODAY : {this.state.data.deathsNew} ]
                                    </Card.Text>
                                    
                                    </Card.Body>
                                </Card>
                        </div>
                        
                    </div>
                </div>

                <div className="col-md-12 pt-5">
                    <State/>

                </div>
            </div>
        )
    }
}

export default India;
