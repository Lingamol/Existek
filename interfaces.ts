interface Car { 
    brand: string;
    model: string;
    serialNumber?: number;
    color: string;
}

const myCar: Car = {
    brand: 'Chevrolet',
    model: 'Camaro',
    serialNumber: 12564,
    color: 'red'
}
interface TypeCar extends Car {
    bodyType: string,
 }