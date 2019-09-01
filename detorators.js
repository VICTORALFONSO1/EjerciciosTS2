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
/*
function ClassDecoratorParams(param1: number, param2: string) {
    return function(
        target: Function) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2 + "') called on: ", target);
    }
}
@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {}

ClassDecoratorParams(2, 'b') called on: function ClassDecoratorParamsExample() {}

ClassDecoratorParams(1, 'a') called on: function ClassDecoratorParamsExample() {}
*/
/*
function MethodDecorator(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<any>
    ) {
    console.log("MethodDecorator called on: ", target, propertyKey, descriptor);
}

class MethodDecoratorExample {
    @MethodDecorator
    method() {}
}

MethodDecorator called on: { method: [Function] } method { value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
}
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function StaticMethodDecorator(target, propertyKey, descriptor) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
var StaticMethodDecoratorExample = /** @class */ (function () {
    function StaticMethodDecoratorExample() {
    }
    StaticMethodDecoratorExample.staticMethod = function () { };
    __decorate([
        StaticMethodDecorator
    ], StaticMethodDecoratorExample, "staticMethod");
    return StaticMethodDecoratorExample;
}());
StaticMethodDecorator;
called;
on: function StaticMethodDecoratorExample() { }
