import React from 'react';

const DestinationsFooter = ( {onClickUp, onClickDown, onClickRemove, selectedInfo} ) => (
  <div className="ToVisitFooter">
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickUp(selectedInfo) }>Subir</button>
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickDown(selectedInfo) }>Bajar</button>
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickRemove(selectedInfo) }>Borrar</button>
  </div>
);

export default DestinationsFooter;
