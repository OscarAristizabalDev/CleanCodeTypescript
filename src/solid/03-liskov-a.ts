import { Tesla, Audi, Toyota, Honda, Vehicle, Ferrari } from './03-liskov-b';


(() => {
    
    //el metodo printCarSeats recibe un Array de Vehicle y de este modo nuestra funcion va a recibir cualquier
    // tipo de vehiculo sin necesidad de agregar un nuevo tipo de vehiculo por parametro
    // por lo tanto estamos aplicando el principio de sustitución de liskov
    const printCarSeats = ( cars: Vehicle[] ) => {
        
        for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfSeats() )
                continue;
            }         

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Ferrari(2)
    ];


    printCarSeats( cars );

})();