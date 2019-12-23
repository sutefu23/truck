//マップ上トラック走行のためのJSオブジェクト 
var MapAnimation = MapAnimation || {};
MapAnimation.Truck = (function () {
    var img_src = '';
    var map = MapAnimation.Map;
    var speed = Map.width / 2000;//MAP全体の距離をnミリ秒で走る速さ

    var Truck = function () {
        this.create();
        this.run();
        this.remove();
    };
    Truck.prototype.create = function () {
        this.truck = document.createElement('img');
        this.truck.src = img_src;
        $(this.truck).fadeIn();
        this.setPosition();
    }
    Truck.prototype.run = function () {
        var time = this.distance / speed;

        $(this.truck).animate({ left: this.end_x, top: this.end_y }, time, 'easeInOutQuad');
    };
    Truck.prototype.setPosition = function () {
        do{
            this.start_x = Math.floor(Math.random() * (map.width + 1)); //X開始位置   
            this.start_y = Math.floor(Math.random() * (map.height + 1)); //Y開始位置
        } while (Map.isOnLand(this.start_x, this.start_y))

        do {
            this.end_x = Math.floor(Math.random() * (map.width + 1)); //X終了位置   
            this.end_y = Math.floor(Math.random() * (map.height + 1)); //Y終了位置
        } while (Map.isOnLand(this.end_x, this.end_y))

        this.diff_x = this.end_x - this.start_x;
        this.diff_y = this.end_y - this.start_y;

        this.angle = Math.atan2(this.diff_y, this.diff_x) * 180 / Math.PI; //角度 
        this.distance = Math.sqrt(Math.pow(this.diff_x, 2) + Math.pow(this.diff_y, 2)); //距離        
        
        this.truck.style.Left = this.start_x;
        this.truck.style.Top = this.start_y;
        this.truck.style.Right = 0;
        this.truck.style.Bottom = 0;
        this.truck.style.position = "absolute";
        this.truck.style.transform = "rotate(" + this.angle + "deg)";
    };
    Truck.prototype.remove = function () {
        $(this.truck).fadeOut();;
        this.truck.remove();
    }
    Math.easeOutSin = function (t) { //t = 0 ~ 1 
        return Math.sin(Math.PI / 2 * t);
    };
    return Truck;
})();
