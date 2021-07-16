

class Vehicle {

  drive(): void {
    console.log("Skittle Skattle")
  }

  honk(): void {
    console.log("Honk Honk")
  }

}


class Car extends Vehicle {
  honk(): void {
    console.log("I am honking!!!")
  }
}

const vehicle = new Vehicle();
vehicle.drive()

const car = new Car();
car.honk();