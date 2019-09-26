import React from 'react';
import './Fruit.css';

class FruitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'cherries'} //sets state to Cherries, so that is default fruit selected
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favourite fruit is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="label">
        <label>
          Pick your favourite fruit:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapes">Grapes</option>
            <option value="bananas">Bananas</option>
            <option value="cherries">Cherries</option>
            <option value="mango">Mango</option>
            <option value="strawberries">Strawberries</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default FruitForm;
