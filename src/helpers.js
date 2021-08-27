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
