import { FormattedMessage } from "react-intl";
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
    errors.name = <FormattedMessage
      id='Nombre-error'
      defaultMessage='The Name field is required'
    />;
  }

  //////////////////////////////////////////////////////////

  if (!lastname) {
    errors.lastname = <FormattedMessage
      id='Apellido-error'
      defaultMessage='Lastname field is required'
    />;
  }

  //////////////////////////////////////////////////////////

  if (!number) {
    errors.number = <FormattedMessage
      id='Telefono-error'
      defaultMessage='The contact number field is required'
    />;
  }

  //////////////////////////////////////////////////////////

  if (!countryes) {
    errors.countryes = <FormattedMessage
      id='Pais-error'
      defaultMessage='The Country field is required'
    />;
  }

  //////////////////////////////////////////////////////////

  if (!codigoPostal) {
    errors.codigoPostal = <FormattedMessage
      id='Postal-error'
      defaultMessage='Zip Code field is required'
    />;
  }

  //////////////////////////////////////////////////////////

  if (!dni) {
    errors.dni = <FormattedMessage
      id='DNI-error'
      defaultMessage='The DNI field is necessary'
    />;
  }

  return errors;
}
