import React, { Component } from 'react';
import '../App.css';
import Header from './HeaderComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {MOVIES} from './movies';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Main extends Component {
  
  constructor(props) {
    super(props);
     this.state = {
         movies: MOVIES,
         filter: " "
     }
  }

  handleChange=(event) => {
     this.setState({
         filter: event.target.value
     })
  }
     
  render(){
        
      const lowerCaseFilter=this.state.filter.toLocaleLowerCase()
      const list = this.state.movies.filter((val) => {
         return Object.keys(val).some(key=>{
           if(typeof val[key]==='string'){
               return val[key].toLocaleLowerCase().includes(lowerCaseFilter)
           }
         })
      }).map((movie) => {
            return (
              <div  className="col-12 col-md-2 m-2">
                <Card key={movie.id}>
                  <CardImg width="100%" height="250px" src={movie.image} alt={movie.name} />
                      <CardTitle>{movie.name}</CardTitle>
                </Card>
              </div>
            );
        });

    return (
      <div>
              <Header/>
              <Switch>
              <Route path='/home'  />
              <Route path='/aboutus' />
              <Route exact path='/movies' />
              <Route exact path='/contactus' />
              <Redirect to="/home" />
              </Switch>
              <div className="icon">
              <input type="text" placeholder="Search..."
              onChange={(event) => this.handleChange(event)}/>
              </div>
              <div className="container">
              <div className="row">
                  {list}
              </div>
              </div>
      </div>
    );
 }
}
export default Main;
