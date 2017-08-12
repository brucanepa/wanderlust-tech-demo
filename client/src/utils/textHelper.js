
export const getRegionTitle = (name, placesCount) => {
  if (!name || (!placesCount && placesCount !== 0)) return '';
  const title = name.toUpperCase() + ' (' + placesCount + ' lugar';
  return (placesCount === 1 ? title : title + 'es') + ')';
};

export const getFileWithNoExtension = (imageUri) => {
  var extensions = ['.jpg', '.jpeg'];
  var converted = false;
  extensions.every(extension => {
    if (imageUri.indexOf(extension) !== -1) {
      imageUri = imageUri.substring(0, imageUri.length - extension.length)
      converted = true;
      return converted;
    }
  })
  return imageUri;
}