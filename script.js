let arr = [
    {
        questions: "0 ",
        options: [
            "red", "green", "blue", "yellow"
        ],
        ans: "red"
    },
    {
        questions: "what is used not",
        options: [
            "red", "green", "blue", "yellow"
        ],
        ans: "red"
    },
    {
        questions: "1 ",
        options: [
            "red", "green", "blue", "yellow"
        ],
        ans: "red"
    },
    {
        questions: "2 ",
        options: [
            "red", "green", "blue", "yellow"
        ],
        ans: "red"
    },
    {
        questions: "3 ",
        options: [
            "red", "green", "blue", "yellow"
        ],
        ans: "red"
    },
]



let n = arr.length;
let i = 0;

function handleClicknext() {
    i++;
    let main = document.querySelector("#bottom_terminal_section")
    let div = document.createElement("div");
    div.innerHTML = `<div class="question">${arr[(i%n)].questions}</div>
    <div class="options">${arr[(i%n)].questions}</div>`
    main.innerHTML = ""
    main.appendChild(div) 
}

function handleClickPrev() {
    i--;
    let main = document.querySelector("#bottom_terminal_section")
    let div = document.createElement("div");
    div.innerHTML = `<div class="question">${arr[(i%n)].questions}</div>
    <div class="options">${arr[(i%n)].questions}</div>`
    main.innerHTML = ""
    main.appendChild(div)
}