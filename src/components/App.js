import React from 'react';
import FruitBasket from './FruitBasket';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
  }

  handleFilter = (event) => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  componentWillMount() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));

    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  render(){
    return(
      <div>
        <FruitBasket fruit={this.state.fruit} filters={this.state.filters} updateFilterCallback={this.handleFilter} currentFilter={this.state.currentFilter} />
      </div>
    )
  }
}




export default App;
