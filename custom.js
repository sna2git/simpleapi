/*********************************
 * Class in JAVASCRIPT
 */
class ClsCar {
	constructor(color, price){
		this.color = color;
		//Object.assign(this, {color, price} );
	}
	drive(){
		console.log('driving');
	}
	static sellCar(car){
		return `selling for ${car.price}`;
	}
}
let redCar = new ClsCar('blue', 100);
console.dir(redCar);
redCar.drive();
console.dir(typeof(ClsCar) );