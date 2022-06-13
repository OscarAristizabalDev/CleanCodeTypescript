(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    // Malo
    const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; 
    // Archivos marcados para borrar - files to delete
    const arhivos = fs.map( f => f.f );

    // Mejor 
    const filesToEvalueted = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    const filesFinal = filesToEvalueted.map( file => file.flagged );


    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const ddmmyyyy = new Date();
    const currentDay = new Date();
    
    // días transcurridos - elapsed time in days
    const d: number = 23;
    const elapsedTimeDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const dir = 33;
    const numberFilesDirectory = 33;
    
    // primer nombre - first name
    const nombre = 'Fernando';
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const apellido = 'Herrera';
    const LastName = 'Herrera';

    // días desde la última modificación - days since modification
    const dsm = 12;
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const max = 6;
    const masClassesPerStudent = 6;


})();