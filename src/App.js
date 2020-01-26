import React, {Component} from 'react';
import './App.scss';
import { connect } from 'react-redux';
import actions from './store/actions';
import Tile from './components/Tile';


class App extends Component {
    renderTile = (feeds, loading) => {
        if (feeds && feeds.feeds && feeds.feeds.length) {
            return (
                <div className="app__wrapper__tile">
                    {!loading && feeds.feeds ? feeds.feeds.map(el => <Tile key={el.id} data={el} />) : <div>Caricamento in corso...</div>}
                </div>
            )
        } else {
            return (
                <div className="app__wrapper__no-items">
                    We are sorry but there isn't feeds for your search
                </div>
            )
        }
    };

    render() {
        const { feeds, loading } = this.props;
        return (
            <div className="app__wrapper">
              <div className="app__wrapper__search">
                <input type="text" className="app__wrapper__search__input" placeholder="Ricerca" onChange={(e) => this.props.filterFeeds(e)} />
              </div>
              {this.renderTile(feeds, loading)}
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
