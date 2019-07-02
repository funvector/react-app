import React from 'react';
import CarsList from './apps/CarsList';

class App extends React.Component{

  toggleHandler = () => this.props.toggleHandler();
  titleChangeHandler = (event) => this.props.titleChangeHandler(event.target.value);

  render = () => {
      const { visible } = this.props;
      return (
        <div className='app'>
          <h1>{this.props.appTitle}</h1>
          <button className='btn' onClick={this.toggleHandler}>Toggle</button>
          <input type='text' maxLength="50" value={this.props.appTitle} placeholder='Change title' className='inp' onChange={this.titleChangeHandler} />
          <div className='list'>  
            {(visible) ? <CarsList /> : null}
          </div>
        </div>
      );
    }
  }

  export default App;