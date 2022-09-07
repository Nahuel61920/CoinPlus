export function validation({
  name,
  lastname,
  number,
  countryes,
  dni,
  codigoPostal,
}) {
  let errors = {};

  if (!name) {
    errors.name = "El campo Nombre es requerido";
  }

  //////////////////////////////////////////////////////////

  if (!lastname) {
    errors.lastname = "El campo Apellido es requerido";
  }

  //////////////////////////////////////////////////////////

  if (!number) {
    errors.number = "El campo Número de contacto es requerido";
  }

  //////////////////////////////////////////////////////////

  if (!countryes) {
    errors.countryes = "El campo País es requerido";
  }

  //////////////////////////////////////////////////////////

  if (!codigoPostal) {
    errors.codigoPostal = "El campo Código Postal es requerido";
  }

  //////////////////////////////////////////////////////////

  if (!dni) {
    errors.dni = "El campo DNI es requerido";
  }

  return errors;
}
