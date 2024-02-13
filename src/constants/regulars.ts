export const PHONE_NUMBER = /^\+375\d{9}$/;
// checks if the number is correct. It must contain +375 as the beginning and 9 digits after it

export const EMAIL = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// checks if the email is correct. It must contain any symbols as the
// name of email, @ sign and domain, dot and TLD (com, by...)

export const DATE = /^\d{2}\.\d{2}\.\d{4}$/;
// checks if the date is correct. It must be in format: dd.mm.yyyy
