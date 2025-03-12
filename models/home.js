const rootDir = require("../utils/pathutils");
const path = require('path');
const fs = require('fs');
const { json } = require("stream/consumers");
const { error } = require("console");
const dataPath = path.join(rootDir, 'data', 'cardata.json');
const Vehicle_Added = [];
module.exports = class Car {
    constructor(Vahical, Color, Vehicleno, Rate, Owner, Contact, Address, id) {
        this.Vahical = Vahical;
        this.Color = Color;
        this.Vehicleno = Vehicleno;
        this.Rate = Rate;
        this.Owner = Owner;
        this.Contact = Contact;
        this.Address = Address;
        this.id = id;
    }
    save() {

        Car.Fatchall((Vehicle_Added) => {
            if (this.id) {
                console.log(this.id);
                 Vehicle_Added = Vehicle_Added.map(cars => cars.id === this.id ? this : cars);
                //  console.log("update",Vehicle_Added);
            } else {
                this.id = Math.random().toString();
                Vehicle_Added.push(this);
                // console.log(this);
            }
            fs.writeFile(dataPath, JSON.stringify(Vehicle_Added), error => {
                console.log("file writing error", error);
            });
        });

    }
    static Fatchall(callback) {
        fs.readFile(dataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : []);
        });
    }
    static FindById(CarId, callback) {
        this.Fatchall(cars => {
            // console.log(cars);
            // console.log(CarId);
            const carfind = cars.find(car => car.id === CarId);
            // console.log(carfind);
            callback(carfind);
        })
    }
}





