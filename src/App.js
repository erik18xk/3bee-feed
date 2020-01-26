import React, {Component} from 'react';
import './App.scss';
import { connect } from 'react-redux';
import actions from './store/actions';
import Tile from './components/Tile';


class App extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.feeds);
    }

    render() {
        // {!loading && feeds.feeds ? feeds.feeds.map(el => <Tile key={el.id} data={el} />) : <div>Caricamento in corso...</div>}
        const { feeds, loading } = this.props;
        if (feeds.feeds) {
            console.log('the data are ready');
            console.log(feeds);
        } else {
            console.log('the data are not ready yet');
        }
        return (
            <div className="app__wrapper">
              <div className="app__wrapper__search">
                <input type="text" className="app__wrapper__search__input" placeholder="Ricerca" onChange={(e) => this.props.filterFeeds(e)} />
              </div>
              <div className="app__wrapper__tile">
                  <h1> Hi </h1>
              </div>
              <div className={"app__wrapper__refresh"}>
                <button className={`button button${this.props.isButtonVisible ? '--visible' : ''}`} onClick={() => this.props.refreshFeeds()}>
                  Ricarica
                </button>
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    feeds: state.feeds,
    isButtonVisible: state.isButtonVisible,
    loading: state.loading,
});

const mapDispatchToProps = dispatch => ({
    filterFeeds: e => {
        dispatch(actions.filterFeeds(e.target.value.toLowerCase()))
    },
    refreshFeeds: detail => {
        dispatch(actions.refreshFeeds())
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
