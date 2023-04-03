
export class Contact {
  name = "";
  apellido = "";
  email = "";
  conectado = false;

  constructor(name, apellido, email, conectado) {
    this.name = name;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}