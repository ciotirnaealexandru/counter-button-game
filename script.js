//declare counter

let count = 0;
let counter_container = document.querySelector(".counter");
counter_container.textContent = count;

//declare buttons

let increment_button = document.querySelector(".increment");
increment_button.addEventListener("click", () => {
    count++;
    if (count < 0)
        counter_container.textContent = "Think positive!!";
    else
        counter_container.textContent = count;
});

let decrement_button = document.querySelector(".decrement");
decrement_button.addEventListener("click", () => {
    count--;
    if (count < 0)
        counter_container.textContent = "Think positive!!";
    else
        counter_container.textContent = count;
});

let reset_button = document.querySelector(".reset");
reset_button.addEventListener("click", () => {
    count = 0;
    counter_container.textContent = count;
});

