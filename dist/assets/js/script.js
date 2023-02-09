const currentDate = document.getElementById("currentDate");
const days = document.getElementById("days");
const prevNextIcon = document.querySelectorAll(".icons div");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const renderCalendar = () => {
    const FirstDayOfMonth = new Date(currYear, currMonth, 1).getDay(); // Getting First Day of Month
    const LastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Getting Last Day of Month
    const LastDayOfMonth = new Date(
        currYear,
        currMonth,
        LastDateOfMonth
    ).getDay(); // Getting Last Day of Month
    const LastDateOfLastMonth = new Date(currYear, currMonth + 1, 0).getDate(); // Getting Last Day of Previous Month
    let liTag = "";

    for (let i = FirstDayOfMonth; i > 0; i--) {
        liTag += `<li class="w-[calc(100%_/_7)] mt-8 cursor-pointer z-[1] before:content-[''] before:w-10 before:h-10 before:z-[-1] before:hover:bg-[#f2f2f2] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:top-1/2 before:left-1/2 relative transition-all text-[#aaa]">${
            LastDateOfLastMonth - i + 1
        }</li>`;
    }

    for (let i = 1; i <= LastDateOfMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currMonth === new Date().getMonth() &&
            currYear === new Date().getFullYear()
                ? "text-white before:bg-[#9b59b6]"
                : "";
        liTag += `<li class="w-[calc(100%_/_7)] mt-8 cursor-pointer z-[1] before:content-[''] before:w-10 before:h-10 before:z-[-1] before:hover:bg-[#f2f2f2] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:top-1/2 before:left-1/2 relative transition-all ${isToday}">${i}</li>`;
    }

    for (let i = LastDayOfMonth; i < 6; i++) {
        liTag += `<li class="w-[calc(100%_/_7)] mt-8 cursor-pointer z-[1] before:content-[''] before:w-10 before:h-10 before:z-[-1] before:hover:bg-[#f2f2f2] before:rounded-full before:-translate-x-1/2 before:-translate-y-1/2 before:absolute before:top-1/2 before:left-1/2 relative transition-all text-[#aaa]">${
            i - LastDayOfMonth + 1
        }</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    days.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currYear > 11) {
            date = new Date(currYear, currMonth);
            currMonth = date.getMonth();
            currYear = date.getFullYear();
        }

        renderCalendar();
    });
});
