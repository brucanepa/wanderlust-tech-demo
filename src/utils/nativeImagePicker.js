import ImagePicker from 'react-native-image-picker';
import { texts } from '../constants';

const options = {
  title: texts.selectImageOption,
  takePhotoButtonTitle: texts.selectTakePhoto,
  chooseFromLibraryButtonTitle: texts.selectImageFromLibrary,
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const showImagePicker = () => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel || response.error) {
        resolve();
      } else {
        resolve(response);
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      }
    });
  });
};

export default showImagePicker;