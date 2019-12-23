var MapAnimation = MapAnimation || {};

MapAnimation.Map = (function(){
    var map = document.getElementById('map');
    var land = document.getElementById('map-land');

    var Map = function(){
        this = map;
        this.width = (map != undefined) ? map.offsetWidth : 0;
        this.height = (map != undefined) ? map.offsetHeight : 0;

        this.land_canvas = document.createElement('canvas');
        this.land_canvas.width = land.width;
        this.land_canvas.height = land.height;
        
    }

    Map.prototype.isOnLand = function(X, Y){//XYの位置から地図の地上にあるかどうか
        var pixelData = land_canvas.getContext('2d').getImageData(X, Y, 1, 1).data;

        var alpha = pixelData[3] / 255;

        return alpha > 0;
    }

    return Map;
})();