let subcount = document.getElementById('sub');
let m = document.getElementsByClassName('mar');
let count = 1;



function addSub(){
    const addNewSub = document.createElement('div');
    addNewSub.classList.add('addNewSub');
    count++;
    addNewSub.innerHTML=`<div class="marks">
    Enter your marks :  
       <input type="number" placeholder="out of 100" class="mar" id="${count}" max="100"></input>
   </div><br>`;
    document.body.appendChild(addNewSub);
}

function removeSub(){
    count--;
    let div = document.getElementsByClassName('addNewSub');
    console.log(div);
    document.body.removeChild(div[div.length-1]);
    
}

function calc(){
    let sum=0;
    let numc=0;
    let sumfin=0;
    for (let i = 1; i<=count; i++) {
        let num = document.getElementById(String(i)).value
        if (num==''){
           continue
        }
        else{
        sum+=parseInt(num);
        numc++;
        }
    }
 console.log(sum)
 let avg = parseInt(sum/numc);
 console.log(avg)
 let gpa='N'
 switch (parseInt((avg/10))*10) {
    case 100:
    case 90:
        console.log("S");
         gpa='S'
        break;
    case 80:
        console.log("A");
         gpa='A'
        break;
    case 70:
        console.log("B");
         gpa='B'
        break;
    case 60:
        console.log("C");
         gpa='C'
        break;
    case 50:
        console.log("D");
         gpa='D'
        break;
    case 40:
        console.log("E");
         gpa='E'
        break;
    case 30:
    case 20:
    case 10:
    case 0:
        console.log("F");
         gpa='F'
        break;
    default:
        console.log("Invalid number")
        break;
}

  
let res = document.getElementById('fin')
res.innerHTML=gpa;
var ele = document.getElementById("resultm");
  ele.classList.remove("hidden");
var remo = document.getElementById('bod');



}
