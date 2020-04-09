import React, {Component} from 'react';
import Ninjas from './Ninjas.js';
import AddNinja from './AddNinja.js';


class App extends Component {
  constructor(props){
    super(props);
    
  }
  state = {
    ninjas: [
      {name: 'Mike', age: 30, belt: 'brown',id:1},
      {name: 'Ryu', age: 35, belt: 'black',id:2},
      {name: 'Yoshi', age: 20, belt: 'yellow',id:3}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    this.setState({
      ninjas: [...this.state.ninjas, ninja]
    })
  }

  deleteNinja = (id) => {
 
    this.setState({
      ninjas: this.state.ninjas.filter(ninja => ninja.id !=id)
    })
  }

  render(){
    return (
      <div className="App">
        <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} />
        <AddNinja addNinja = {this.addNinja}  />
      </div>
    );
  }
}

export default App;
