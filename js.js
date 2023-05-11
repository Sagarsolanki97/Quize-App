const QuizeData = [
    {
        question:"1 Which city of India is also known as the ‘Venice of the East’?",
        a:"Alleppey, Kerala",
        b:"Cherrapunji, Meghalaya",
        c:"Gokarna, Karnataka",
        d:"Pondicherry",
        correct_answer:"a",
        chosen_answer:""
    }
    ,
    {
        question:"2 The city that has spirituality at its heart – which of this is known as the Yoga Capital of India?’?",
    a:"Varanasi, Uttar Pradesh",
    b:"Haridwar, Uttarakhand",
    c:"Rishikesh, Uttarakhand",
    d:"Dharamshala, Himachal Pradesh",
    correct_answer:"c",
    chosen_answer:""
},
    {
        question:"3 Why is Bengaluru known as the ‘Silicon Valley of India’?’?",
    a:"For being the nation’s leading IT exporter",
    b:"For making a silicon park",
    c:"For a large number of silicon industries",
    d:"None of the above",
    correct_answer:"a",
    chosen_answer:""
},
    {
        question:"4 What is India’s Golden Quadrilateral?",
    a:"A historic monument",
    b:"A Buddhist monastery",
    c:"A super national highway",
    d:"None of the above",
    correct_answer:"c",
    chosen_answer:""
},
    {
        question:"5 Which city of India would you be in if you are visiting the Victoria Memorial?",
    a:"Bengaluru",
    b:"Delhi",
    c:"Chandigarh",
    d:"Kolkata",
 correct_answer:"d",
 chosen_answer:""
},
    {
        question:"6 Which of these is a heritage & historical monument of Pink City – Jaipur?",
    a:"Mehrangarh Fort",
    b:"Hawa Mahal",
    c:"Umaid Bhawan Palace",
    d:"Patwon Ki Haveli",
    correct_answer:"b",
    chosen_answer:""
},
    {
        question:"7 Which is the longest river of Gujarat",
    a:"Tapi",
    b:"Sabarmati",
    c:"Vishwamaitri",
    d:"Narmada",
    correct_answer:"d",
    chosen_answer:""
},
    {
        question:"8 Named after a famous British hunter turned naturalist, what is the name of India’s first national park?",
    a:"Jim Corbett National Park",
    b:"Nokrek National Park",
    c:"Mount Harriet National Park",
    d:"Murlen National Park",
    correct_answer:"a",
    chosen_answer:""
}
];

// console.log(QuizeData.length);
var qsn =document.getElementById("question");
const atext =document.getElementById("a_text");
const btext =document.getElementById("b_text");
const ctext=document.getElementById("c_text");
const dtext=document.getElementById("d_text");
var  selectedItem ;

let currentQsn = 0;
var Points =0;
var currentquizedata ;
var loadQuiz =()=>{
    if(currentQsn == 0){
        var pre = document.getElementById("previous");
        // pre.style.display="none";
        next.style.display="block";
    }

    currentquizedata = QuizeData[currentQsn];
    qsn.innerHTML=QuizeData[currentQsn].question;
    atext.innerHTML=currentquizedata.a;
    btext.innerHTML=currentquizedata.b;
    ctext.innerHTML=currentquizedata.c;
    dtext.innerHTML=currentquizedata.d;
      }
   loadQuiz();
   let itemList = document.querySelectorAll(".answer");
   var correct;
submit.addEventListener("click",()=>{
     correct = QuizeData[currentQsn].correct_answer;
// console.log(correct);

// console.log(itemlist[0].value);
// console.log(itemList[0].checked);

 itemList.forEach((value,el)=>{
    selectedItem = itemList[el].checked;
   if(selectedItem==true)
       {
var x =itemList[el].id;
     var selected =  QuizeData[currentQsn].chosen_answer;
     selected =x; 
        if(correct==x)
        {
           Points++;
        }else{
        //    var error = document.getElementById("Message");
        // //    var correct_answer
        // console.log(correct);
        //    error.innerHTML = `Your correct answer is ${itemList[el].id}.`    
        }
       } 
        
     }
 )
  if(currentQsn == QuizeData.length-1){
   var content = document.getElementsByClassName("Answers")[0];
//    content.innerHTML = 
// content.innerHTML ="sagar";
index=0;
    QuizeData.forEach((value,index)=>{
        console.log(index);
        // ` question: ,Options:${QuizeData[index].},${QuizeData[index].correct_answer},${QuizeData[index].chosen_answer}`;
// console.log(QuizeData[index].question);
var ansblock = document.getElementsByClassName("answersheet")[0];
ansblock.style.display="block";
 var quizecontent = document.getElementsByClassName("quize-header")[0];
quizecontent.style.display="none";

         content.innerHTML += `<div>
                                 <h3>${QuizeData[index].question}</h3>
                                 <span>option a.${QuizeData[index].a}</span><br>
                                 <span>option b.${QuizeData[index].b}</span><br>
                                 <span>option c.${QuizeData[index].c}</span><br>
                                 <span>option d.${QuizeData[index].d}</span><br>
                                 <span>Choosen option :${QuizeData[index].chosen_answer}</span><br>
                                 <span>Correct answer: ${QuizeData[index].correct_answer}</span><br>
                              </div>`;
                               })
                                }
                                else{
                                currentQsn++;
                              loadQuiz();   
                                  } 
                                });
