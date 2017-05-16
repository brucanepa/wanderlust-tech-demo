
export const getRegionTitle = (name, placesCount) => {
  if (!name || (!placesCount && placesCount !== 0)) return '';
  const title = name.toUpperCase() + ' (' + placesCount + ' place';
  return (placesCount === 1 ? title : title + 's') + ')';
};