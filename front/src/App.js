import React, {Component} from 'react';
import logo from './logo.svg';
import serializeForm from 'form-serialize';
import * as CongressApi from './CongressApi'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault()
    const values = serializeForm(e.target, {hash: true})

    var formBody = [];
    for (var property in values) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(values[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    // Use Books api to update shelf status
    CongressApi.create(formBody).then(function(response) {
      console.log(response)
    }).catch(function(response) {
      console.log(response)
    })

  }

  render() {
    return (<div className="App">

      <h1>
        Congreso de Economía, Banca e Inversiones
      </h1>

      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          ID:
          <input name="id" type="text" required="required"/>
        </label>
        <br/>
        <label>
          Nombre:
          <input name="name" type="text" required="required"/>
        </label>
        <br/>
        <label>
          Carrera:
          <input name="career" type="text" required="required"/>
        </label>
        <br/>
        <label>
          Correo:
          <input name="email" type="text" required="required"/>
        </label>
        <br/>
        <label>
          Folio:
          <input name="number" type="text" required="required"/>
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
