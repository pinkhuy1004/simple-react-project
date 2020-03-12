import React, { Component } from 'react';
import Tour from '../Tour';
import './tourList.scss';
import { tourData } from '../../tourData';

export default class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const newTour = this.state.tours.filter(item => item.id !== id);

        this.setState({
            tours: newTour
        });
    }

    render() {
        const { tours } =this.state;

        return (
            <section className="tourlist">
                {
                    tours.map(tour => (<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />))
                }
            </section>
        )
    }
}
