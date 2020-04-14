export const formatDate = (date) => {
    if (!date) {
        return "";
    }

    let parsedDate = date;

    if (typeof date === "string") {
        parsedDate = new Date(date);
    }

    // eslint-disable-next-line no-unused-vars
    const alernateForm = `${parsedDate.getDate()}/${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`;

    return parsedDate.getDate() + "/" + (parsedDate.getMonth() + 1) + "/" + parsedDate.getFullYear();
};