import React, {Component} from 'react';
import logo from './logo.svg';
import serializeForm from 'form-serialize';
import * as CongressApi from './CongressApi'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {id: '', name:'', career:'', email:'', number:''};
       this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const values = serializeForm(e.target, {hash: true})
      //this.setState({id: '', name:'', career:'', email:'', number:''})
    var formBody = [];
    for (var property in values) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(values[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
      
       console.log(this.state);

    // Use Books api to update shelf status
    CongressApi.create(formBody).then(function(response) {
        console.log(this.state.name);
         this.setState({id: '', name:'', career:'', email:'', number:''})
      console.log(response)
    }).catch(function(response) {
            //this.setState({id: '', name:'', career:'', email:'', number:''})
      console.log(response)
    })

  }
    
    
  handleChange(event) {
    console.log(event.target.name)
    
    this.setState({[event.target.name]: event.target.value});
   
  }
    
    

  render() {
    return (<div className="App">

      <h1>
        Congreso de Economía, Banca e Inversiones
      </h1>

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          ID:
          <input name="id" type="text" value={this.state.id} onChange={this.handleChange} required="required"/>
        </label>
        <br/>
        <label>
          Nombre:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} required="required" />
        </label>
        <br/>
        <label>
          Carrera:
          <input name="career" type="text" value={this.state.career} onChange={this.handleChange} required="required"/>
        </label>
        <br/>
        <label>
          Correo:
          <input name="email" type="text" value={this.state.email} onChange={this.handleChange} required="required"/>
        </label>
        <br/>
        <label>
          Folio:
          <input name="number" type="text" value={this.state.number} onChange={this.handleChange} required="required"/>
        </label>
        <button type="submit">
          Registrar
        </button>
      </form>

      <div className="background"></div>

    </div>);
  }
}

export default App;
