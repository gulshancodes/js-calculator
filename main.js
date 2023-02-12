const screen = document.querySelector("[data-screen]");
const btns = document.querySelectorAll("[data-btn]");
const equal = document.querySelector("[data-equal]");
const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-del]");


// showing clicked button values on the screen
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        screen.innerText === '0' ? screen.innerText = e.target.innerText : screen.innerText += e.target.innerText;
    });
});


// evaluation
equal.addEventListener("click", () => {
    try {
        screen.innerText = eval(screen.innerText);
    } catch (error) {
        alert("Invalid Input");
        screen.innerText = '0';
    }
});


// clear the screen
clear.addEventListener("click", () => {
    screen.innerText = '0';
});


// deleting one value
del.addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0, -1);
    if (screen.innerText === '') {
        screen.innerText = '0';
    }
})


