export function handleFormErrors (form, errors, messages) {
  for (const field in errors) {
    if (errors.hasOwnProperty(field)) {

      errors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const message = messages[field];

        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            errors[field] += message[key] + ' ';
          }
        }
      }
    }
  }
}
