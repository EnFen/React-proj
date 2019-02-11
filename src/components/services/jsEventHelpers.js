const textContainsString = (event, string) => {
    const text = event.target.textContent;
    return text.toLowerCase().split(' ').includes(string);
};

export { textContainsString };