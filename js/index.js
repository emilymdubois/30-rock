/**
 * A function to select a random episode from the 30 Rock series. It first selects
 * a random season, and then a random episode from that season.
 */
function pickEpisode() {
  var seasons = [];
  for (var season in series) { seasons.push(season); }
  var season = seasons[Math.floor(Math.random() * seasons.length)];

  var episodes = [];
  for (var episode in series[season]) { episodes.push(episode); }
  var episode = episodes[Math.floor(Math.random() * episodes.length)];

  document.getElementById('episode').innerHTML = `Season ${season}, Episode ${episode}<br/>${series[season][episode]}`;
}
