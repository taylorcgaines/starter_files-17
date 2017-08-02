import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:

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
  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

  handleNameChange(event){
  this.setState({
    value: event.target.value
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit(event){
    event.preventDefault()
    let value = this.state.value;
    this.setState({
      value: "",
      pilot: value
      })
  }
  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentWillMount(){
      fetch('https://swapi.co/api/vehicles/')
      .then(r => r.json())
      .then((json) => {
        this.setState({vehicles: json.results})
      })
    }

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

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
