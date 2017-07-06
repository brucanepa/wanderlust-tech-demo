import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  NativeModules
} from 'react-vr';
const Location = NativeModules.Location;

export default class WanderLustVR extends React.Component {
  getImageId() {
    let image = this.getParameterByName('image', Location.href);
    return image;
  }

  getParameterByName(name, url) {
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  render() {
    var image = this.getImageId();
    if (image) {
      return (
        <View>
          <Pano source={asset(image + '.jpg')}/>
        </View>
      );
    }
  }
};

AppRegistry.registerComponent('WanderLustVR', () => WanderLustVR);
