export function getCreationDate (date) {
    const regexp = /[:T-]/gu;
    const month = [
        "Января",
        "Февраля",
        "Марта",
        "Апреля",
        "Мая",
        "Июня",
        "Июля",
        "Августа",
        "Сентября",
        "Октября",
        "Ноября",
        "Декабря"
    ];
    const rawDate = date.split(regexp).splice(0, 3);
    return `${rawDate[2]} ${month[rawDate[1] - 1]} ${rawDate[0]}`;
}

export function getCookie (cookieName) {
    const cookies = {};
    document.cookie.replace(" ", "")
        .split(";")
        .forEach(item => {
            const [key, value] = item.split("=");
            cookies[key] = value;
        });
    if (cookies[cookieName]) return cookies[cookieName];
    return null;
}
