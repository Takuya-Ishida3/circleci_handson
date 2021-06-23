const getTimezoneOffsetHours = () => {
    const date = new Date();
    return date.getTimezoneOffset();
};

module.exports = getTimezoneOffsetHours;