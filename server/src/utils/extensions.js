
Array.prototype.containsObject = function (obj, fn) {
  let contains = false;
  this.every(function (o) {
    contains = fn(obj, o);
    return contains;
  });
  return contains;
}; 
