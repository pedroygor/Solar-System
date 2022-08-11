import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css'

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const altImg = `Planeta ${planetName}`;
    return (
      <div className={styles.planet} data-testid="planet-card">
        <img src={ planetImage } alt={ altImg } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
