const button = document.querySelectorAll('.Btn');

let count = 0;

for(let i=0; i<button.length; i++){
    button[i].addEventListener('click',function(event){
 
        if(count < button.length+1){

        let completeTask = getValueById("completeTask");

        let taskAssign = getValueById("taskAssign");
        
        if(event.target.classList != "disabled"){

        count = count+1;

        event.target.classList = "disabled";

        let h2 = event.target.parentNode.parentNode;

        h2 = h2.querySelector('h2').innerText;

        const div = document.querySelector(".acivityAdd");

        let p = document.createElement('p');
        p.className = "activity";

        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    
        completeTask += 1;
        taskAssign -= 1;

        setValueById("taskAssign",taskAssign);

        setValueById("completeTask",completeTask);

        alert('Board updated Successfully');

        p.innerText = `You have completed the task ${h2} at ${hours}:${minutes}:${seconds} ${ampm}`;

        div.appendChild(p);

        }
        else{
            return ;
        }
     }
            
        if(count ===6){
            alert("completed all task successfully");
            return;
         }

    })
}

document.querySelector('.delBtn').addEventListener('click',function(event){
    const del = event.target.parentNode.parentNode.querySelector(".acivityAdd")
    del.innerHTML = "";
})

const colors = ["bg-slate-400", "bg-orange-500", "bg-yellow-300", "bg-red-200"];

let index = 0; 

document.querySelector('.theme').addEventListener("click", function() {
    const body = document.querySelector("body");
    body.classList.remove(...colors)
    body.classList.add(colors[index]);

    index = (index + 1) % colors.length; 
});

const currDate = document.querySelector(".currDate");
const today = new Date();
const formattedDate = today.toLocaleDateString("en-US", {  
    weekday: "long",
    year: "numeric", 
    month: "long",  
    day: "numeric"   
});
currDate.innerText = formattedDate;

document.querySelector(".bg-gradient-to-r").addEventListener("click",function(event){
    window.location.href = "blogs.html";
})


