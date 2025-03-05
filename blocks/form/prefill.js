import { checkLoginStatus } from '../../scripts/scripts.js';

export default function prefillForm() {
  if (checkLoginStatus()) {
    const form = document.querySelector('form');
    const fname = window.localStorage.getItem('firstName');
    const lname = window.localStorage.getItem('lastName');
    const email = window.localStorage.getItem('email');

    if (form) {
      const emailField = form.querySelector('input[type="email"]');
      if (emailField) {
        emailField.value = email;
      }
      const fnameField = form.querySelector('input[name="fname"]');
      if (fnameField) {
        fnameField.value = fname;
      }
      const lnameField = form.querySelector('input[name="lname"]');
      if (lnameField) {
        lnameField.value = lname;
      }
    }
  }
}
