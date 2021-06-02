var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
a = 10;
console.log(a);
var doLog = function (a) { return console.log(a * a); };
doLog(a);
var integers = function (points) {
    console.log(points.x + points.y);
};
integers({
    x: 1,
    y: 1
});
///INTERFACE ENDS
///CLASS
var Points = /** @class */ (function () {
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    Points.prototype.inte = function () {
        console.log("In class:" + (this.x + this.y));
    };
    return Points;
}());
///CLASS ENDS
var integers1 = function (points) {
    console.log(points.x + points.y);
};
//creating object from class
var addP = new Points(1, 2);
addP.inte();
var Pointer = /** @class */ (function (_super) {
    __extends(Pointer, _super);
    function Pointer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pointer.prototype.intePoint = function () {
        console.log("This is :" + this.mess);
    };
    return Pointer;
}(Points));
var addP1 = new Pointer(1, 3);
addP1.intePoint();
