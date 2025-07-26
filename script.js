let arr = [
    {
        questions: "What is the use of `let` keyword in JavaScript?",
        options: [
            "Defines a variable globally",
            "Defines a constant variable",
            "Defines a block-scoped variable",
            "Defines a private function"
        ],
        ans: "Defines a block-scoped variable"
    },
    {
        questions: "Which method is used to convert JSON data to a JavaScript object?",
        options: [
            "JSON.toObject()",
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()"
        ],
        ans: "JSON.parse()"
    },
    {
        questions: "Which of the following is a JavaScript data type?",
        options: [
            "float",
            "number",
            "decimal",
            "character"
        ],
        ans: "number"
    },
    {
        questions: "What will `typeof null` return?",
        options: [
            "null",
            "undefined",
            "object",
            "boolean"
        ],
        ans: "object"
    },
    {
        questions: "Which function is used to delay code execution in JavaScript?",
        options: [
            "delay()",
            "setInterval()",
            "setTimeout()",
            "timeout()"
        ],
        ans: "setTimeout()"
    }
];




let n = arr.length;
let i = 0;

function handleClicknext() {
    i++;
      let queno = document.querySelector("#Que_no")
    let queno2 = document.querySelector("#Que_no2")
    let total_no = document.querySelector("#total_no")
    let prog = document.querySelector("#custum_prog")
    let que = document.querySelector("#Que_text")
    let opt1 = document.querySelector("#opt_1")
    let opt2 = document.querySelector("#opt_2")
    let opt3 = document.querySelector("#opt_3")
    let opt4 = document.querySelector("#opt_4")
    let div = document.createElement("div");
    que.innerHTML = `${arr[(i%n)].questions}`
    opt1.innerHTML = `${arr[(i%n)].options[0]}`
    opt2.innerHTML = `${arr[(i%n)].options[1]}`
    opt3.innerHTML = `${arr[(i%n)].options[2]}`
    opt4.innerHTML = `${arr[(i%n)].options[3]}`
    queno.innerHTML = `${i%n+1}`
    queno2.innerHTML = `${i%n+1}`
    prog.innerHTML = `${(( (i % n) + 1 ) / n) * 100}`
    total_no.innerHTML = `${n}`

}

function handleClickPrev() {
    i--;
    
    let queno = document.querySelector("#Que_no")
    let queno2 = document.querySelector("#Que_no2")
    let total_no = document.querySelector("#total_no")
    let prog = document.querySelector("#custum_prog")
    let que = document.querySelector("#Que_text")
    let opt1 = document.querySelector("#opt_1")
    let opt2 = document.querySelector("#opt_2")
    let opt3 = document.querySelector("#opt_3")
    let opt4 = document.querySelector("#opt_4")
    let div = document.createElement("div");
    que.innerHTML = `${arr[(i%n)].questions}`
    opt1.innerHTML = `${arr[(i%n)].options[0]}`
    opt2.innerHTML = `${arr[(i%n)].options[1]}`
    opt3.innerHTML = `${arr[(i%n)].options[2]}`
    opt4.innerHTML = `${arr[(i%n)].options[3]}`
    queno.innerHTML = `${i%n+1}`
    queno2.innerHTML = `${i%n+1}`
    prog.innerHTML = `${(( (i % n) + 1 ) / n) * 100}`
    total_no.innerHTML = `${n}`

}