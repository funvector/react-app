import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { rootReducer } from './redux-app/reducer';
import { toggleHandler, renderCars, titleChangeHandler } from './redux-app/actions';

  export const store = createStore(rootReducer);

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
            {(visible) ? renderCars() : null}
          </div>
        </div>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      titleChangeHandler: bindActionCreators(titleChangeHandler, dispatch),
      toggleHandler: bindActionCreators(toggleHandler, dispatch),
      renderCars: bindActionCreators(renderCars, dispatch),
    };
  }

  const mapStateToProps = (state) => {
    return {
      appTitle: state.appTitle,
      visible: state.visible
    };
  }

  const WrappedMainComponent = connect(mapStateToProps, mapDispatchToProps)(App);
  export default WrappedMainComponent;