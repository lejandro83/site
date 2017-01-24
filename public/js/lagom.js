$.jribbble.setToken('8b42722940fbcff4c3d40d20bf710ff275800e5e7f0ca354f83658aaeb1b620d');

$.jribbble.users('lagggom').shots({per_page: 36}).then(function(shots) {
  var html = [];
  
  shots.forEach(function(shot) {
    html.push('<li class="shots--shot">');
    html.push('<h3>' + shot.title + '</h3>');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    
    // html.push('<p>' + shot.description + '</p>');
    html.push('</a></li>');
    // console.log(shot);
  });
  
  $('.shots').html(html.join(''));
});
