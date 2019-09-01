/*
class Startup {
    private text: String;
    constructor (texto: String) {
        this.text = texto;
    }
    public main () : number {
        console.log(this.text);
        return 0;
    }
}
let s = new Startup("Hola mundo");
s.main();

class Startup1 {
    public static main(): number {
        console.log('Hola mundo');
        return 0;
    }
}
Startup1.main();
*/
class Calculo {

    private x: number = 0;
    private y: number = 0;
    constructor (x: number, y: number){
        this.setX(x);
        this.setY(y);
    }
    public setX(x: number) : void{
        this.x = x;
    }
    public setY(y: number) : void{
        this.y = y;
    }
    public getX(): number {
        return this.x;
    }
    public getY(): number {
        return this.y;
    }
    public sumar() : number {
        return (this.getX() + this.getY());
    }
    public restar() : number{
        return ( this.mayor() - this.menor() );
    }
    public menor() : number {
        if(this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    }
    public mayor() : number {
        if(this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    }
}
let calculo = new Calculo(30,10);
console.log(calculo.restar());