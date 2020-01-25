import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import actions from './store/actions';

// TODO This is the main entry point.
// Call the FeedTemplateComponent get the store and manage the async call.

// Call the Tile.js component

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p onClick={() => this.props.changeState(true)}>
              3bee project example
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            </a>
          </header>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.refreshFeed
});

const mapDispatchToProps = dispatch => ({
  changeState: detail => {
    dispatch(actions.changeState(true))
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
