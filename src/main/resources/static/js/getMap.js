var map = new AMap.Map('container', {
	resizeEnable : true,
    zoom:11
});
//设置城市
AMap.event.addDomListener(document.getElementById('query'), 'click',
		function() {
			var cityName = document.getElementById('cityName').value;
			if (!cityName) {
				cityName = '广州市';
			}
			map.setCity(cityName);
		});
