//your JS code here. If required.

const student = {
  name: 'mister',
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};