
const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const retrieveUserFromEmail = (email) => email.split('@')[0].toUpperCase();

const dateFormat = (date) => {
    const newDate = new Date(date);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return newDate.toLocaleString("en-AU", options);
};

export { capitalise, retrieveUserFromEmail, dateFormat }