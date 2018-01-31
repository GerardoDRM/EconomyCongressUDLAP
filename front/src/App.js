import React, { Component } from 'react';
import logo from './logo.svg';


import './App.css';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    isGoing: true,
    numberOfGuests: 2
  };

  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}



  sending = () => {

    console.log("ok")
}

  submitInfo = () => {

  }

  render() {
    return (
      <div className="App">

      <h1> Congreso de Economía, Banca e Inversiones </h1>

      <form>
   <label>
    Nombre:
     <input
       name="name"
       type="text"
       checked={this.state.isGoing}
       onChange={this.handleInputChange} />
   </label>
   <br />
   <label>
        Carrera:
     <input
       name="career"
       type="text"
    
       onChange={this.handleInputChange} />
   </label>
   <br />
   <label>
        Semestre:
     <input
       name="semester"
       type="text"

       onChange={this.handleInputChange} />
   </label>
   <br />
   <label>
        Correo:
     <input
       name="email"
       type="text"

       onChange={this.handleInputChange} />
   </label>
   <button> Registrar </button>
 </form>

 <div className="background">

  </div>

      </div>


    );
  }
}

export default App;
