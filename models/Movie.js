var mongoose = require('mongoose');

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

// Export the model.
//var doc=mongoose.model('doc', MovieSchema);
//module.exports = mongoose.model('Movie', MovieSchema);
//module.exports = mongoose.model(mov, MovieSchema);
module.exports=MovieSchema;