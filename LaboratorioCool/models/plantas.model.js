const plantas = [];


module.exports= class Planta {


        constructor(mi_nombre){

        this.nombre = mi_nombre;
    
    }
        save(){
            plantas.push(this.nombre)

        }

        static fetchAll(){
            return plantas;
        }

}