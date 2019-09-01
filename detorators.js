/*
function log(constructor: Function): void{
    console.log('Registered Class: '+ constructor['name'] + ' at ' + Date.now());
}

function logm<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): void {
    console.log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now());
}

function logparam (target: Object, propertyKey: string | symbol, parameterIndex: number): void {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterIndex + ' at ' + Date.now());
}
    
@log
class MyClass {
    public name: string = 'name';
    constructor() {
        console.log('constructor');
    }

    @logm
    public myMethod() {
        console.log('method')
    }

    @logm
    public myMethod2(param1: number, @logparam param2: boolean) {
    console.log('method2')
    }
}
var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecoratorParams(param1, param2) {
    return function (target) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    };
}
var ClassDecoratorParamsExample = /** @class */ (function () {
    function ClassDecoratorParamsExample() {
    }
    ClassDecoratorParamsExample = __decorate([
        ClassDecoratorParams(1, "a"),
        ClassDecoratorParams(2, "b")
    ], ClassDecoratorParamsExample);
    return ClassDecoratorParamsExample;
}());
ClassDecoratorParams(2, 'b');
called;
on: function ClassDecoratorParamsExample() { }
ClassDecoratorParams(1, 'a');
called;
on: function ClassDecoratorParamsExample() { }
