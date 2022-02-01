










interface IBrandCar { 
    brand: string;
    brandId?: number;
   }

interface IModelCar extends IBrandCar {
    model: [number, string];
}
const MyModelCar: IModelCar = {
    brand: 'Ford',
    model: [1, 'Focus'],
}

class BodyCar{
    bodyType: string;
    private vincode: string;
    protected set_vincode(vin: string) {
        this.vincode = vin
    
    }
}
class Car extends BodyCar implements IModelCar {
    readonly dealer: string;
    brand: string;
    brandId: number;
    model: [number, string];

    
    constructor(dealerName: string) {
        super();
        this.dealer = dealerName;
    }

    car_set_vincode(vin: string) {
        this.set_vincode(vin)
    }
 
    printModel(model: number | string) {
        console.log(`Ваша модель: ${model}`)
    }
}
const myCar: Car = new Car('Vinner');
myCar.brand = "Ford";
myCar.car_set_vincode('se112344');
myCar.printModel(1);
//////////////////////////////////////////////////////////
enum BodyCarE{ 
    crossover = "crossover",
    sedan = "sedan",
    off_road = "off_road",
    pickup ="pickup",
    hatchback ="hatchback",
    minivan="minivan",
    cabriolet="cabriolet",
    coupe="coupe"
}
const MyCarBody: BodyCarE = BodyCarE.crossover
////////////////////////////////////////////////////////////
type manufacture = {
    month: string,
    year: number
        
}

function myFunc(params: manufacture) {
    console.log(`Дата выпуска: ${params.month}` + '.' + params.year);

}

myFunc({ year: 2005, month: "September" });


function myFuncGenerics<T>(params: T) {
    console.log(params);

}



