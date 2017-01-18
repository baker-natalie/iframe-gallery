
var adGallery = {
	ads: [
		{
			title: 'Stranger Thingser',
			url: 'http://codepen.io/nataliebaker/full/rrAXVO/'
		},
		{
			title: 'HouMuse- Neighborhood Map',
			url: 'https://baker-natalie.github.io/houmuse'
		}
	]
};

adGallery.display = function() {

	for (var i = 0; i < adGallery.ads.length; i++) {
		var newOption = document.createElement('option');
		var title = document.createTextNode(adGallery.ads[i].title);
		newOption.appendChild(title);
		newOption.value = adGallery.ads[i].url;

		document.getElementById('ad-list').append(newOption);
	}
};

adGallery.display();

adGallery.displayAd = function() {
	document.getElementById('display').innerHTML = '';
	var iframe = document.createElement('iframe');
	iframe.src = document.getElementById('ad-list').value;
	document.getElementById('display').appendChild(iframe);
	console.log(iframe.src);
};