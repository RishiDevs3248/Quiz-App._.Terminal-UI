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
const options = document.querySelectorAll(".options");
const Selected_option = document.getElementById("Selected_opt")

const countDown = document.querySelector('.countdown');
let countDownTime = 90000; // 90 second
let intervalId;

let queno = document.querySelector("#Que_no")
let queno2 = document.querySelector("#Que_no2")
let total_no = document.querySelector("#total_no")
let prog = document.querySelector("#custum_prog")
let que = document.querySelector("#Que_text")
let opt1 = document.querySelector("#opt_1")
let opt2 = document.querySelector("#opt_2")
let opt3 = document.querySelector("#opt_3")
let opt4 = document.querySelector("#opt_4")
let x;
let Curr_que;
let points = document.getElementById("custum_points")

options.forEach(option => {

    option.addEventListener("click", () => {
        options.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
        x = option.dataset.value;
        switch (x) {
            case 'A':
                x = 0;
                break;
            case 'B':
                x = 1;
                break;
            case 'C':
                x = 2;
                break;
            case 'D':
                x = 3;
                break;
            default:
                break
        }
        Selected_option.innerText = "--option=" + option.dataset.value;
    });
});


function handleOptionsque() {
    que.innerHTML = ""
    let txt = arr[(i % n)].questions
    let j = 0
    function typeWriter() {
        if (j < txt.length) {
            que.innerHTML += txt.charAt(j);
            j++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter()
    // que.innerHTML = `${arr[(i % n)].questions}`
    opt1.innerHTML = `${arr[(i % n)].options[0]}`
    opt2.innerHTML = `${arr[(i % n)].options[1]}`
    opt3.innerHTML = `${arr[(i % n)].options[2]}`
    opt4.innerHTML = `${arr[(i % n)].options[3]}`
    queno.innerHTML = `${i % n + 1}`
    queno2.innerHTML = `${i % n + 1}`
    prog.innerHTML = `${((((i % n) + 1) / n) * 100).toFixed(2)}`
    total_no.innerHTML = `${n}`
}
handleOptionsque()

function handleClicknext() {
    Curr_que = arr[i % n];
    i++;

    handleOptionsque()
    console.log("IF condition : " + Curr_que.options[x] == Curr_que.ans)
    console.log(Curr_que)
    console.log(Curr_que.options[x])
    console.log(Curr_que.ans)
    if (Curr_que.options[x] == Curr_que.ans) {
        let prevPoints = Number(points.innerText)
        points.innerText = prevPoints += 5

    }
    options.forEach(opt => opt.classList.remove("selected"));
    Selected_option.innerText = ""
    clearInterval(intervalId);
    timer(countDownTime)
}

function handleClickPrev() {
    Curr_que = arr[i % n];
    i--;
    handleOptionsque()
    options.forEach(opt => opt.classList.remove("selected"));
    Selected_option.innerText = ""
    clearInterval(intervalId);
    timer(countDownTime)
}







// -------------- timer 
function timer(countDownTime) {

        intervalId = setInterval(() => {
        console.log(countDownTime)
        countDownTime -= 1000

        const secondsLeft = Math.round(countDownTime / 1000);
        let minutes = Math.floor(secondsLeft / 60);
        let seconds = secondsLeft % 60;

       
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        countDown.innerHTML = `${minutes} : ${seconds}`;

        if (countDownTime <= 0) {
            clearInterval(intervalId);
            // console.log("Countdown complete!");
            handleClicknext()
        }

    }, 1000)

}
timer(countDownTime)
