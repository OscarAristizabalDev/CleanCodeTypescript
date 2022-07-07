import { Tesla, Audi, Toyota, Honda } from './03-liskov-b';


(() => {
    
    //Se esta violentando el principio de substitución de liskov 
    //dado que la función printCarSeats no funcionaria si recibe 
    //envía otro tipo de carro, pasaría siempre el mismo problema cada vez 
    //que se agrege un nuevo carro, adicionalmente se está violentando
    // el principio de abierto y cerrado ya que la función printCarSeats 
    //se tendrìa que modificar agredando nuevas condicionales para cada 
    //carros que se adicione
    const printCarSeats = ( cars: (Tesla | Audi | Toyota | Honda)[] ) => {
        
        for (const car of cars) {
         
            if( car instanceof Tesla ) {
                console.log( 'Tesla', car.getNumberOfTeslaSeats() )
                continue;
            }
            if( car instanceof Audi ) {
                console.log( 'Audi', car.getNumberOfAudiSeats() )
                continue;
            }
            if( car instanceof Toyota ) {
                console.log( 'Toyota', car.getNumberOfToyotaSeats() )
                continue;
            }
            if( car instanceof Honda ) {
                console.log( 'Honda', car.getNumberOfHondaSeats() )
                continue;
            }         

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();