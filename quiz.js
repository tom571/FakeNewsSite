var questions = [{
    head: "Question 1",
    question: "Should you always trust a headline?",
    answer1: "Never",
    answer2: "Always",
    answer3: "Only if not exaggerated",
    answer: 1,
    useranswer: 0
}, {
    head: "Question 2",
    question: "Which source is least trustworthy for a medical article?",
    answer1: "Dr Aaron Adams, a private doctor from America",
    answer2: "Mr Derek Baum, a construction worker",
    answer3: "Dr Liu Lei, an NHS doctor",
    answer: 3,
    useranswer: 0
}, {
    head: "Question 3",
    question: "What would you do if you find fake news?",
    answer1: "Open the link and write insults in the comments",
    answer2: "Open the link and then share it on social media to raise awareness",
    answer3: "Ignore the link and move on",
    answer: 3,
    useranswer: 0
}, {
    head: "Question 4",
    question: "Why is fake news dangerous?",
    answer1: "It spreads missinformation to influence a person's views",
    answer2: "It spreads missinformation as a joke, not to be taken seriously",
    answer3: "It spreads misinformation when real news is considered harmful",
    answer: 1,
    useranswer: 0
},
    {
    head: "Question 5",
    question: "Which is the most obvious way to tell if an article is fake news?",
    answer1: "The article is hosted on an untrustworthy website",
    answer2: "The article title seems exagerrated",
    answer3: "The article contains spelling mistakes, suggesting there was no editing",
    answer: 1,
    useranswer: 0
}];

var i = 0;
var score = 0;

var head = document.getElementById("qHead");
var question = document.getElementById("qQuestion");
var answer1label = document.getElementById("answer1label");
var answer2label = document.getElementById("answer2label");
var answer3label = document.getElementById("answer3label");
var a1 = document.getElementById("answer1");
var a2 = document.getElementById("answer2");
var a3 = document.getElementById("answer3");
var nextquestion = document.getElementById("next");
var backbutton = document.getElementById("back");
var close = document.getElementById('close');


function onLoad()
{
    backbutton.style.display = "block";
    nextquestion.style.display = "block";
    close.style.display = "none";    

    a1.hidden = false;
    a2.hidden = false;
    a3.hidden = false;

    answer1label.hidden = false;
    answer2label.hidden = false;
    answer3label.hidden = false;

    nextquestion.innerHTML = "Next";
    nextquestion.onclick = nextQuestion;
    
    questions.forEach(e => { e.useranswer = 0; });
    a1.checked = false; a2.checked = false; a3.checked = false;
    score = 0;
    i = 0;

    head.innerHTML = questions[0].head;
    question.innerText = questions[0].question;
    answer1label.innerText = questions[0].answer1;
    answer2label.innerText = questions[0].answer2;
    answer3label.innerText = questions[0].answer3;
    
}

function submit()
{

    if (a1.checked) questions[i].useranswer = 1;
    else if (a2.checked) questions[i].useranswer = 2;
    else if (a3.checked) questions[i].useranswer = 3;
    else
    {
        document.getElementById("error").hidden = false;
        return;
    }
    i++;
    let error = false;
    questions.forEach(e => { if (e.answer == e.useranswer) score++; });

    backbutton.style.display = "none";
    nextquestion.style.display = "none";
    close.style.display = "inline-block";

    populateQuiz();
}

function nextQuestion()
{
    
    if (a1.checked) questions[i].useranswer = 1;
    else if (a2.checked) questions[i].useranswer = 2;
    else if (a3.checked) questions[i].useranswer = 3;
    else
    {
        document.getElementById("error").hidden = false;
        return;
    }

    i += 1;
    populateQuiz();

    if (i == questions.length - 1)
    {
        nextquestion.innerHTML = "Submit";
        nextquestion.onclick = submit;
        return;
    }
    
}

function populateQuiz()
{
    document.getElementById("error").hidden = true;
    if (i >= questions.length)
    {
        head.innerText = "Quiz over!";
        question.innerText = "You scored " + score + " out of " + questions.length + "!";
        answer1label.hidden = true;
        answer2label.hidden = true;
        answer3label.hidden = true;
        a1.hidden = true; a2.hidden = true; a3.hidden = true;
        
        return;
    }
    else
    {
        head.innerText = questions[i].head;
        question.innerText = questions[i].question;
        answer1label.innerText = questions[i].answer1;
        answer2label.innerText = questions[i].answer2;
        answer3label.innerText = questions[i].answer3;
        backbutton.hidden = false
    
    }

    a1.checked = false;
    a2.checked = false;
    a3.checked = false;
    
    if (questions[i].useranswer != 0) document.getElementById("answer" + questions[i].useranswer).checked = true;
}

function back()
{
    nextquestion.innerHTML = "Next";
    nextquestion.onclick = nextQuestion;

    i -= 1;
    if (i < 0) i = 0;
    else populateQuiz();
}