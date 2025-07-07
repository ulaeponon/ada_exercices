
function driverInfo(firstName, age) {
    let legalAge = 17;
    if (age >= legalAge) {
        console.log("Autorisé à conduire ")

    } else {
        console.log("Pas autorisé à conduire")

    }
};
driverInfo("Mathieu", 22)
driverInfo("Léa", 15);
driverInfo("Jean", 17);