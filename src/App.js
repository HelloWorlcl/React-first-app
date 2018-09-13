import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0},
        {id: 5, value: 0},
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  handleIncrementAll = () => {
    const counters = this.state.counters.map(
      counter => {
        counter.value++;
        return counter;
      }
    );
    this.setState({ counters });
  }

  handleAdd = () => {
    const counters = [...this.state.counters];
    const newId = counters.length
      ? counters[counters.length - 1].id + 1
      : 1;
    counters.push({ id: newId, value: 0 });
    this.setState({ counters });
  }

  handleDelete = counterId => {
      const counters = this.state.counters.filter(
        counter => counter.id !== counterId
      );
      this.setState({counters});
  }

  handleDeleteAll = () => {
    this.setState({ counters: [] });
  }

  handleReset = () => {
      const counters = this.state.counters.map(
        counter => {
          counter.value = 0;
          return counter;
        }
      );
      this.setState({counters});
  }

  render() {
    return (
      <React.Fragment>
        <NavBar 
          totalCounters={
            this.state.counters.filter(
              counter => counter.value > 0
            ).length
          }
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onIncrementAll={this.handleIncrementAll}
          onAdd={this.handleAdd}
          onDelete={this.handleDelete}
          onDeleteAll={this.handleDeleteAll}
          onReset={this.handleReset}
        />
      </React.Fragment>      
    );
  }
}

export default App;
