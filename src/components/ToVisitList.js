import React, { PropTypes } from 'react';
import ToVisit from './ToVisit';

const ToVisitList = ({ placesToVisit, onToVisitClick }) => (
  <ul>
    {placesToVisit.map(toVisit =>
      <ToVisit
        key={toVisit.id}
        {...toVisit}
        onClick={() => onToVisitClick(toVisit.id)}
      />
    )}
  </ul>
);

ToVisitList.propTypes = {
  placesToVisit: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onToVisitClick: PropTypes.func.isRequired,
};

export default ToVisitList;
