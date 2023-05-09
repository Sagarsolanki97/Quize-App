const QuizeData = [
    {
        question:"1 Which city of India is also known as the ‘Venice of the East’?",
        a:"Alleppey, Kerala",
        b:"Cherrapunji, Meghalaya",
        c:"Gokarna, Karnataka",
        d:"Pondicherry",
        correct_answer:"a"
    }
    ,
    {
        question:"2 The city that has spirituality at its heart – which of this is known as the Yoga Capital of India?’?",
    a:"Varanasi, Uttar Pradesh",
    b:"Haridwar, Uttarakhand",
    c:"Rishikesh, Uttarakhand",
    d:"Dharamshala, Himachal Pradesh",
    correct_answer:"c"
},
    {
        question:"3 Why is Bengaluru known as the ‘Silicon Valley of India’?’?",
    a:"For being the nation’s leading IT exporter",
    b:"For making a silicon park",
    c:"For a large number of silicon industries",
    d:"None of the above",
    correct_answer:"a"
},
    {
        question:"4 What is India’s Golden Quadrilateral?",
    a:"A historic monument",
    b:"A Buddhist monastery",
    c:"A super national highway",
    d:"None of the above",
    correct_answer:"c"
},
    {
        question:"5 Which city of India would you be in if you are visiting the Victoria Memorial?",
    a:"Bengaluru",
    b:"Delhi",
    c:"Chandigarh",
    d:"Kolkata",
 correct_answer:"d"
},
    {
        question:"6 Which of these is a heritage & historical monument of Pink City – Jaipur?",
    a:"Mehrangarh Fort",
    b:"Hawa Mahal",
    c:"Umaid Bhawan Palace",
    d:"Patwon Ki Haveli",
    correct_answer:"b"
},
    {
        question:"7 Which is the longest river of Gujarat",
    a:"Tapi",
    b:"Sabarmati",
    c:"Vishwamaitri",
    d:"Narmada",
    correct_answer:"d"
},
    {
        question:"8 Named after a famous British hunter turned naturalist, what is the name of India’s first national park?",
    a:"Jim Corbett National Park",
    b:"Nokrek National Park",
    c:"Mount Harriet National Park",
    d:"Murlen National Park",
    correct_answer:"a"
}
];

console.log(QuizeData.length);

const qsn =document.getElementById("question");
const atext =document.getElementById("a_text");
const btext =document.getElementById("b_text");
const ctext=document.getElementById("c_text");
const dtext=document.getElementById("d_text");

let currentQsn = 0;

var loadQuiz =()=>{
    if(currentQsn == 0){
        var pre = document.getElementById("previous");
        // pre.style.display="none";
        next.style.display="block";
    }

    const currentquizedata = QuizeData[currentQsn];
    qsn.innerHTML=currentquizedata.question;
    atext.innerHTML=currentquizedata.a;
    btext.innerHTML=currentquizedata.b;
    ctext.innerHTML=currentquizedata.c;
    dtext.innerHTML=currentquizedata.d;
      }
            loadQuiz();


submit.addEventListener("click",()=>{
var correct = QuizeData[currentQsn].correct_answer;
console.log(correct);
console.log();
// var selectedOption = document.getElementById()
    // if(correct==){
    if(currentQsn < QuizeData.length){
        loadQuiz();
    }else{
        alert("Quize has been submitted successfully");
    }
    currentQsn++;

});