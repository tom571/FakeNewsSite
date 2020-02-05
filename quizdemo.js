var questions = [{
    head: "Question 1",
    question: "What is my name?",
    answer1: "11",
    answer2: "12",
    answer: 1,
    useranswer: 0
}, {
    head: "Question 2",
    question: "How am I feeling?",
    answer1: "21",
    answer2: "22",
    answer: 2,
    useranswer: 0
}, {
    head: "Question 3",
    question: "Why am I?",
    answer1: "31",
    answer2: "32",
    answer: 2,
    useranswer: 0
}, {
    head: "Question 4",
    question: "What's the point?",
    answer1: "",
    answer2: "",
    answer: 1,
    useranswer: 0
}];

var i = 0;
var score = 0;

function onLoad()
{
    var head = document.getElementById("qHead");
    var question = document.getElementById("qQuestion");
    let scorelabel = document.getElementById("score");
    var answer1label = document.getElementById("answer1label");
    var answer2label = document.getElementById("answer2label");
    var a1 = document.getElementById("answer1");
    var a2 = document.getElementById("answer2");
    
    scorelabel.innerText = score + "\\" + questions.length;
    head.innerText = questions[0].head;
    answer1label.innerText = questions[0].answer1;
    answer2label.innerText = questions[0].answer2;
    question.innerText = questions[0].question;
}

function submit()
{
    var a1 = document.getElementById("answer1");
    var a2 = document.getElementById("answer2");

    for (question in questions)
    {
        if (question.useranswer == 0)
        {
            document.getElementById("error").hidden = false;
            return;
        }

        if (question.answer == question.useranswer)
        {
            score += 1;
        }
    }

    var container = document.getElementById("container");
    container.style.opacity = 0;
    
    let scorelabel = document.getElementById("score");

    setTimeout(() => {
        scorelabel.hidden = false;
        head.innerText = "Quiz over!"
        question.innerText = "You scored " + score + " out of " + questions.length + "!";
        scorelabel.hidden = true;
        a1.hidden = true;
        a2.hidden = true;
        answer1label.hidden = true;
        answer2label.hidden = true;
        document.getElementById("submit").hidden = true;
        document.getElementById("back").hidden = true;
        document.getElementById("error").hidden = true;
        // Fade in
        container.style.opacity = 1;
    }, 500);
}

function nextQuestion()
{
    var a1 = document.getElementById("answer1");
    var a2 = document.getElementById("answer2");

    var container = document.getElementById("container");
    container.style.opacity = 0;

    if (a1.checked) questions[i].useranswer = 1;
    else if (a2.checked) questions[i].useranswer = 2;
    else questions[i].useranswer = 0;

    setTimeout(() => {
        i += 1;
        if (i != questions.length - 1)
        {
            if (questions[i].useranswer == 0)
            {
                a1.disabled = false;
                a2.disabled = false;
                a1.checked = false;
                a2.checked = false;
            }
            else
            {
                a1.disabled = true;
                a2.disabled = true;
            }
            setupQuestion(document.getElementById("score"));
            setValues();
        }
        else
        {
            document.getElementById("nextquestion").hidden = true;
            document.getElementById("submit").hidden = false;
        }
        document.getElementById("error").hidden = true;
        // Fade in
        container.style.opacity = 1;
    }, 500);
}

function back()
{
    let scorelabel = document.getElementById("score");
    i -= 1;
    
    setupQuestion(scorelabel);
    setValues();
}

function setValues()
{
    var a1 = document.getElementById("answer1");
    var a2 = document.getElementById("answer2");

    if (i != 0) document.getElementById("back").hidden = false;
    
    if (questions[i].useranswer === 1)
    {
        a1.checked = true;
        a2.checked = false;
    }
    if (questions[i].useranswer === 2)
    {
        a1.checked = false;
        a2.checked = true;
    }
}

function setupQuestion(scorelabel)
{
    head.innerText = questions[i].head;
    question.innerText = questions[i].question;
    scorelabel.innerText = score + "\\" + questions.length;
    answer1label.innerText = questions[i].answer1;
    answer2label.innerText = questions[i].answer2;
    document.getElementById("back").hidden = false;
}