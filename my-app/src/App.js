import React from 'react';
import CarsList from './apps/CarsList';
import { Link } from 'react-router-dom';
import FilterForm from './apps/FilterForm/FilterFormContainer';

class App extends React.Component{

  toggleHandler = () => this.props.toggleHandler();
  titleChangeHandler = (event) => this.props.titleChangeHandler(event.target.value);

  render = () => {
      const { visible } = this.props;
      return (
        <div className='app'>
          <h1>{this.props.appTitle}</h1>
          <input type='text' maxLength="50" value={this.props.appTitle} placeholder='Change title' className='inp' onChange={this.titleChangeHandler} />
          <button className='btn' onClick={this.toggleHandler}>Toggle</button>
          <div className='list'>  
            {(visible) ? <CarsList /> : null}
          </div>
          <FilterForm />
          <Link to='/new' className='btn btn-add_cars'>Add cars +</Link>
        </div>
      );
    }
  }

  export default App;