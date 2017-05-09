import React from 'react';

const DestinationsFooter = ( {selectedId, onClickUp, onClickDown, onClickRemove} ) => (
  <div className="ToVisitFooter">
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickUp(selectedId) }>Subir</button>
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickDown(selectedId) }>Bajar</button>
    <button className="ToVisitFooterItem" type="button" onClick={ () => onClickRemove(selectedId) }>Borrar</button>
  </div>
);

export default DestinationsFooter;
