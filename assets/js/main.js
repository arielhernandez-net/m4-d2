function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
  }
  
  function Consultorio(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    Paciente.call(this, nombre, edad, rut, diagnostico);
  }
  
  // getters y setters
  
  Object.defineProperty(Paciente.prototype, "nombre", {
    get: function () {
      return this._nombre;
    },
    set: function (nuevoNombre) {
      this._nombre = nuevoNombre;
    },
  });
  
  Object.defineProperty(Paciente.prototype, "edad", {
    get: function () {
      return this._edad;
    },
    set: function (nuevoEdad) {
      this._edad = nuevoEdad;
    },
  });
  
  Object.defineProperty(Paciente.prototype, "rut", {
    get: function () {
      return this._rut;
    },
    set: function (nuevoRut) {
      this._rut = nuevoRut;
    },
  });

  Object.defineProperty(Paciente.prototype, "diagnostico", {
    get: function () {
      return this._diagnostico;
    },
    set: function (nuevoDiagnostico) {
      this._diagnostico = nuevoDiagnostico;
    },
  });
  
  
  // prototype
  
  Paciente.prototype.buscar = function (nombre) {
    if (this.nombre === nombre) {
      console.log(`**Paciente encontrado:**`);
      console.log(this.nombre);
      console.log(this.diagnostico);
    } else {
      console.log(`No se encontró un paciente con el nombre ${nombre}`);
    }
  };
  
  Paciente.prototype.mostrar = function () {
    console.log(`**Nombre:** ${this.nombre}`);
    console.log(`**Edad:** ${this.edad}`);
    console.log(`**RUT:** ${this.rut}`);
  };
  
  // instanciar
  
  const paciente1 = new Paciente("Juan", "30", 157569557, "Resfrio");
  const paciente2 = new Paciente("María", "25", 157569525, "Fractura");
  
  
  paciente1.buscar("Juan");
  paciente2.mostrar();
  