import React from 'react';
import DestinationsPanel from '../destinations/DestinationsPanel';
import { texts } from '../../../constants';

const SignedIn = ({onSignOutClick, name}) => (
  <div>
    <DestinationsPanel name={name}/>
    <button type="button" onClick={ (e) => onSignOutClick(e) }>
      {texts.signOut}
    </button>
  </div>
);

export default SignedIn;
