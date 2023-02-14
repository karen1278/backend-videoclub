const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  mov_id: { type: Number, required: true },
  mov_title: { type: String, required: true },
  mov_year: { type: Number, required: true },
  mov_time: { type: Number, required: true },
  mov_lang: { type: String, required: true },
  mov_dt_rel: { type: Date, required: true },
  mov_rel_country: { type: String, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
