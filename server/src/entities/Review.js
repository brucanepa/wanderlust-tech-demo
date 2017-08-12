
function Review ({userId, placeId, comment, rating}) {
  const self = this;
  self.userId = userId;
  self.placeId = placeId;
  self.comment = comment;
  self.rating = rating;
  self.key = self.id = Math.random().toString();
};

module.exports = Review;