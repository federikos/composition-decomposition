import React from 'react';
import PropTypes from 'prop-types';

const assets = [
  {name: 'DHB', rate: '$6.8', dayChange: '-6.2'},
  {name: 'Twitter', rate: '$29.86', dayChange: '-1.2'},
  {name: 'Ethereum', rate: '$282', dayChange: '-1.4'},
];

/** Показывает один актив (название, цену и изменение за день) */
const Rate = ({asset}) => {
  return (
    <p className="rate">
      <span className="rate-span">{asset.name}</span>
      <span className="rate-span">{asset.rate}</span>
      <span className="rate-span">{asset.dayChange}</span>
    </p>
  )
};

Rate.propTypes = {
  /** Объект с данными об активе */
  asset: PropTypes.shape({
    name: PropTypes.string.isRequired, 
    rate: PropTypes.string.isRequired, 
    dayChange: PropTypes.string.isRequired,
  })
}

/** Показывает строку с активами (текущие цены на валюты, акции и т.д.) */
const Rates = () => {
  return (
    <div className="rates">
      {
        assets.map((item, i) => <Rate key={i} asset={item} />)
      }
    </div>
  );
};

export default Rates;