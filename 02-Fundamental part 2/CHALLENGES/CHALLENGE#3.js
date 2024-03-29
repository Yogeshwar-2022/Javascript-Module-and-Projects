// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

// For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

// Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

// Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


// Object for Mark Miller
const mark = {
    fullName: "Mark Miller",
    mass: 78, // in kg
    height: 1.69, // in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

// Object for John Smith
const john = {
    fullName: "John Smith",
    mass: 92, // in kg
    height: 1.95, // in meters
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

// Calculate BMI for Mark and John
mark.calcBMI();
john.calcBMI();

// Compare BMI and log the result to the console
if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}
