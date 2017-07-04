import FetchBlob from 'react-native-fetch-blob';
import { firebaseStorage, addReview } from './firebase';

const storageRef = firebaseStorage.ref('reviews/');

const uploadImage = (image, imageName) => {
  const Blob = FetchBlob.polyfill.Blob;
  const fs = FetchBlob.fs;
  window.XMLHttpRequest = FetchBlob.polyfill.XMLHttpRequest;
  window.Blob = Blob;

  return new Promise((resolve, reject) => {
    const imageRef = storageRef.child(`/${imageName}`);

    let uploadBlob = null;
    const mime = image.type;

    fs.readFile(image.uri, 'base64')
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
        reject(error);
      })
  })
};

export const addReviewNative = (review, image) => {
  review.withImage = !!image;
  return addReview(review)
    .then((reviewKey) => {
      if (image) {
        return uploadImage(image, reviewKey);
      }
    });
};
