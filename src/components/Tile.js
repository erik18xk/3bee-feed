import React, {Component} from 'react';
import '../styles/components/tile.scss';

// This component don't need to be connected to redux cause all props are heredity from parent component


class Tile extends Component {

    render() {
        const { title, content, image, id } = this.props.data;
        return (
            <div className="tile">
                <div className="tile__wrapper">
                    <div className="tile__wrapper__title"> {title} </div>
                    <div className="tile__wrapper__content">
                        {content}
                    </div>
                </div>
                <div className="tile__image">
                    <div className="tile__image__front">
                        <img src={image} alt={id}/>
                    </div>
                    <div className="tile__image__back">
                        <p> Questa è una piccola descrizione mockata della card. Tappa fuori o esci per tornare all'immagine. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tile;