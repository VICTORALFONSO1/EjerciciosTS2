/*
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
    
class Rhino extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Elephant extends Animal {
    constructor(name: string) { super(name); }
        move(distanceInMeters = 20) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
    
let array : Animal[] = [ new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton") ];

let ej2 = {Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton")};
console.log(array);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.log = function () { console.log('hello world'); };
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.log = function () { _super.prototype.log.call(this); };
    ;
    return Child;
}(Base));
var Base1 = /** @class */ (function () {
    function Base1() {
        this.log = function () { console.log('hello world'); };
    }
    return Base1;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child1.prototype.logWorld = function () { this.log(); };
    ;
    return Child1;
}(Base1));
