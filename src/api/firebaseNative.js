import FetchBlob from 'react-native-fetch-blob';
import { firebaseStorage, addReview, addImageToReview } from './firebase';
import { getFileWithNoExtension } from '../utils/textHelper';
const storageRef = firebaseStorage.ref('reviews/');

const uploadImage = (image, imageName) => {
  const Blob = FetchBlob.polyfill.Blob;
  const fs = FetchBlob.fs;
  window.XMLHttpRequest = FetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  return new Promise((resolve, reject) => {
    const imageRef = storageRef.child(`/${imageName}`);
    const imageUri = image.path;
    let uploadBlob = null;
    const mime = image.type;
    try {
      fs.readFile(imageUri, 'base64')
        .then((data) => {
          return Blob.build(data, {
            type: `${mime};BASE64`
          })
        })
        .then((blob) => {
          uploadBlob = blob;
          return imageRef.put(blob, {
            contentType: mime
          })
        })
        .then(() => {
          uploadBlob.close();
          return imageRef.getDownloadURL();
        })
        .then((url) => {
          resolve(url);
        })
        .catch((error) => {
          console.log(error);
          resolve();
        })
    } catch (err) {
      console.log(err);
    }
  })
};

export const addReviewNative = (review, image) => {
  return addReview(review)
    .then((reviewKey) => {
      if (image) {
        return uploadImage(image, reviewKey)
      } else {
        return emptyPromise(); // workaround for reviews that doesn`t have image
      }
    })
    .then(imageUri => {
      if (imageUri) {
        return addImageToReview(review, imageUri);
      } else {
        return emptyPromise(); // workaround for reviews that doesn`t have image
      }
    });
};

const emptyPromise = () => {
  return new Promise(resolve => {
    resolve()
  });
};
