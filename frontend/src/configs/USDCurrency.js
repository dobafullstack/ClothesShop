const format = (string) => {
    return string.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
}

export default format;