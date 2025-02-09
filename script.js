//message dive script 

//photo2 image change and quote change
let messagepara = document.querySelector(".thankspara");
let readmessage = document.querySelector("#readmessage");
let photo2 = document.querySelector(".photo2");
let meassage = document.querySelector("#messagecontent");
let messageEnd = document.querySelector("#shukriya");
let button = document.querySelector("#flip");

let value = 0;

button.addEventListener("click", ()=>{
    if(value === 0) {
        photo2.style.backgroundImage = "url('Images/eidPic.jpg')";
        meassage.style.color = "white";
        meassage.innerText = "Apna khayal rakha karo, please. Mujhe pata hai baat band hone se aapke dimaag me ulti-seedhi cheezein chal rahi hongi, aur shayad khud pe bhi dhyan de rahe honge… Par please, khud ka bhi dhyan rakho. Mujhe aaj bhi aapki zarurat hai, aur future me bhi rahegi. Mai aapse alag nahi hua… 🥺🥺🥺 Bas baat karna chhod diya hai, aur uske peeche bhi reasons hain yaar.";
        messageEnd.style.color = "white";
        messageEnd.innerText = "Aap meri life ka woh hissa ho jo kabhi juda nahi ho sakta. 🤍💫";
        button.innerText = "Click Again";
        button.style.backgroundColor = "black";
        button.style.boxShadow =  "2px 2px 10px black";
        button.style.color = "white";
        readmessage.innerText = "2/4";
        value= 1;
    } else if (value === 1) {
        photo2.style.backgroundImage = "url('Images/sad.jpg')";
        meassage.style.color = "white";
        meassage.innerText = "Mujhe nahi pata ki aapne woh story mere liye soch kar dekhi thi ya nahi, par ek baat zaroor kehna chahta hoon—mai saanp nahi hoon. Mai bas filhaal aapse baat nahi kar sakta, iska matlab yeh nahi ki mai aapko bhool jaunga ya chod dunga. I know, maine shayad galat tareeke se kaha tha ki aap apne raaste, main apne, par sach kahun to mujhse bhi raha nahi jata. Mujhe bhi takleef hoti hai, par meri bhi majboori hai.";
        messageEnd.style.color = "white";
        messageEnd.innerText = "Par yaar, mai itna bura bhi nahi hoon ki aap mujhe saanp bolo. 🥺🥺🥺";
        button.innerText = "Flip Again";
        button.style.backgroundColor = "#D43790";
        button.style.boxShadow =  "2px 2px 10px black";
        button.style.color = "white";
        readmessage.innerText = "3/4";
        value = 2;
    }  else if (value === 2) {
        photo2.style.backgroundImage = "url('Images/almira.jpg')";
        meassage.style.color = "white";
        meassage.innerText = "Please mujhse naaraaz mat raho 🥺🥺, gussa mat karo… Aur pehle ki tarah khush rehna shuru kar do. Mujhe Aaphari hasi sabse zyada pasand hai. Mai wapas zaroor aunga, babu, par abhi sahi waqt nahi hai. Abhi thoda door rehna better hai, aur ye meri majboori bhi hai. Par iska matlab ye nahi ki mai badal gaya hoon ya maine kuch bhool gaya hoon. Aap mujhe bohot, bohot zyada azeez ho… ❤️ Maine apne koi bhi vaade nahi bhoolay, aur mai unhe zaroor poora karunga.";
        messageEnd.style.color = "white";
        messageEnd.innerText = "Bas mujhpe thoda bharosa rakhna. 🤍✨🥺🥺";
        button.innerHTML = '<a href="Nextpage/nextPage.html" style="color: white; text-decoration: none;">Next Page</a>';
        button.style.backgroundColor = "Teal";
        button.style.boxShadow =  "2px 2px 10px black";
        button.style.color = "white";
        readmessage.innerText = "4/4";
        readmessage.style.color = "green";
        value = 3;
       
    }
});


// End Of Code//