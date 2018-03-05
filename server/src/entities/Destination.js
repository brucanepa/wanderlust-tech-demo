
function Destination ({placeId, name, order}) {
  const self = this;
  self.placeId = placeId;
  self.name = name;
  self.order = order;
  self.key = self.id = Math.random().toString();
};

module.exports = Destination;