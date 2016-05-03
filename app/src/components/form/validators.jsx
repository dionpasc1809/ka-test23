// src/validators.js
import validUrl from 'valid-url';
import emailValidator from 'email-validator';

export function required(value) {
    return !value ? ['This field cannot be empty'] : [];
}

export function url(value) {
    return value && !validUrl.isWebUri(value) ? ['This URL is invalid'] : [];
}

export function email(value) {
    return value && !emailValidator.validate(value) ? ['This email address is invalid']: [];
}

export function checkpassword(value, passvalue) {
    return value && passvalue['repassword'] !== passvalue['password'] ? ['Passwords do not match'] : [];
}