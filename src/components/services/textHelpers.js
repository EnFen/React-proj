
const capitalise = text => text.charAt(0).toUpperCase() + text.slice(1);

const retrieveUserFromEmail = (email) => email.split('@')[0].toUpperCase();

export { capitalise, retrieveUserFromEmail }