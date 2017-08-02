import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      vehicles : [],
      value : "",
      pilot : "",
    }
    this.handleNameChange= this.handleNameChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleNameChange(event){
  this.setState({
    value: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    let value = this.state.value;
    this.setState({
      value: "",
      pilot: value
      })
  }

  componentWillMount(){
      fetch('https://swapi.co/api/vehicles/')
      .then(res => res.json())
      .then((json) => {
        this.setState({vehicles: json.results})
      })
    }

  render() {

    return (
      <div className="App">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Star Wars</h1>
            <hr/>
            <p className="lead">The vehicles of Star Wars</p>
          </div>
        </div>

         <div className="jumbotron">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="formGroupExampleInput">
              <h2>
              What is the name the pilot?
              </h2>
              </label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Pilot Name" onChange={this.handleNameChange} value={this.state.value}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit!</button>
           </form>
           <h2 className="text-center">
           {this.state.pilot}
           </h2>
         </div>
         <div className="card-deck">
         {this.state.vehicles.map((ship) => {
           return(
             <div className="card" key={ship.name}>
               <div className="card-block">
                 <h4 className="card-title">Vehicle: {ship.name}</h4>
                 <p className="card-text">Model: {ship.model}</p>
                 <p className='card-text'> Specs</p>
                 <ul className="list-group list-group-flush">
                   <li className="list-group-item">Manufacturer: {ship.manufacturer} </li>
                   <li className="list-group-item">Class: {ship.vehicle_class}</li>
                   <li className="list-group-item">Passengers: {ship.passengers}</li>
                   <li className="list-group-item">Crew: {ship.crew}</li>
                   <li className="list-group-item">Length: {ship.length} length units</li>
                   <li className="list-group-item">Maximum Speed: {ship.max_atmosphering_speed}</li>
                   <li className="list-group-item">Cargo Hold Capacity: {ship.cargo_capacity}</li>
                 </ul>
               </div>
             </div>
           )})}
         </div>
     </div>
    );
  }
}

export default App;
