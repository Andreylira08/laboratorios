const n_marvel = [{nombre: 'Magneto'}, {nombre: 'Wolverine'}];

module.exports = class Marvel {

    // Constructor de la clase
    constructor(mi_nombre) {
        this.nombre = mi_nombre; // Asigna el nombre de la planta
    }

    // Método para guardar una nueva planta
    save() {
        n_marvel.push(this); // Agrega la nueva planta al array "plantas"
    }

    // Método estático para obtener todas las plantas
    static fetchAll() {
        return n_marvel; // Retorna el array completo de plantas
    }
};