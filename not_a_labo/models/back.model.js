const db = require('../util/database');

//const n_marvel = [{nombre: 'Magneto'}, {nombre: 'Wolverine'}];

module.exports = class Marvel {

    // Constructor de la clase
    constructor(nombre,imagen) {
        this.nombre = nombre; // Asigna el nombre de la planta
        this.imagen = imagen;
    }

    // Método para guardar una nueva planta
    save() {
        return db.execute('INSERT INTO marvels(nombre,imagen) VALUES (?,?)', [this.nombre, this.imagen]);
    }

    // Método estático para obtener todas las plantas
    static fetchAll() {
        return db.execute('SELECT * FROM marvels'); // Retorna el array completo 
    }


    static fetchOne(id) {
        return db.execute('SELECT * FROM marvels WHERE id = ?', [id]);
    }
    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

};