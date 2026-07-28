/* =====================================
   PORTFOLIO WEBSITE JAVASCRIPT
   Aman Sharma Portfolio
===================================== */


/* =====================================
   PAGE LOADER
===================================== */

window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");


    if(loader){

        setTimeout(()=>{

            loader.classList.add("hide");

        },800);

    }

});





/* =====================================
   TYPING EFFECT
===================================== */


const typingText =
document.getElementById("typing");


const roles = [

    "Data Analyst",
    "Data Scientist",
    "Machine Learning Engineer",
    "Power BI Developer",
    "AI Engineer"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;



function typingAnimation(){


    if(!typingText) return;


    let current =
    roles[roleIndex];



    if(!deleting){


        typingText.textContent =
        current.substring(
            0,
            charIndex++
        );


        if(charIndex > current.length){


            deleting = true;

            setTimeout(
                typingAnimation,
                1200
            );

            return;

        }


    }

    else{


        typingText.textContent =
        current.substring(
            0,
            charIndex--
        );


        if(charIndex < 0){


            deleting=false;

            roleIndex++;


            if(roleIndex >= roles.length){

                roleIndex=0;

            }


        }


    }



    setTimeout(
        typingAnimation,
        deleting ? 60 : 120
    );


}



typingAnimation();







/* =====================================
   MOBILE MENU
===================================== */


const menuBtn =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if(menuBtn){


menuBtn.addEventListener(
"click",
()=>{


navLinks.classList.toggle(
"active"
);


});


}






/* =====================================
   THEME TOGGLE
===================================== */


const themeBtn =
document.querySelector(".theme-toggle");


if(themeBtn){


themeBtn.addEventListener(
"click",
()=>{


document.body.classList.toggle(
"light-mode"
);



const icon =
themeBtn.querySelector("i");



if(
document.body.classList.contains(
"light-mode"
)
){

icon.className =
"fas fa-sun";


}

else{


icon.className =
"fas fa-moon";


}



});


}







/* =====================================
   SCROLL REVEAL
===================================== */


const revealElements =
document.querySelectorAll(
".reveal-up,.reveal-left,.reveal-right"
);



function revealOnScroll(){


revealElements.forEach(
(element)=>{


const position =
element.getBoundingClientRect()
.top;


if(
position <
window.innerHeight - 100
){


element.classList.add(
"show"
);


}


});


}



window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();







/* =====================================
   SKILL BAR ANIMATION
===================================== */


const progressBars =
document.querySelectorAll(
".progress-bar"
);



const skillObserver =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const bar =
entry.target;


bar.style.width =
bar.dataset.progress + "%";


}


});


});



progressBars.forEach(
bar=>{

skillObserver.observe(bar);

});








/* =====================================
   COUNTER ANIMATION
===================================== */


const counters =
document.querySelectorAll(
".counter"
);



counters.forEach(counter=>{


counter.innerText="0";


const updateCounter=()=>{


const target =
Number(
counter.dataset.target
);



const current =
Number(
counter.innerText
);



const increment =
target/100;



if(current < target){


counter.innerText =
Math.ceil(
current + increment
);


setTimeout(
updateCounter,
30
);


}

else{


counter.innerText =
target;


}


};


updateCounter();



});







/* =====================================
   PROJECT FILTER
===================================== */


const filterButtons =
document.querySelectorAll(
".filter-btn"
);


const projects =
document.querySelectorAll(
".project-card"
);



filterButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


filterButtons.forEach(btn=>

btn.classList.remove(
"active"
)

);



button.classList.add(
"active"
);



const filter =
button.dataset.filter;



projects.forEach(project=>{


if(
filter==="all" ||
project.dataset.category===filter
){


project.style.display="block";


}

else{


project.style.display="none";


}


});


});


});







/* =====================================
   PROJECT SEARCH
===================================== */


const searchBox =
document.getElementById(
"projectSearch"
);



if(searchBox){


searchBox.addEventListener(
"keyup",
()=>{


let value =
searchBox.value.toLowerCase();



projects.forEach(project=>{


let text =
project.innerText.toLowerCase();



if(
text.includes(value)
){


project.style.display="block";


}

else{


project.style.display="none";


}


});


});


}







/* =====================================
   PROJECT MODAL
===================================== */


const modal =
document.getElementById(
"projectModal"
);


const previewButtons =
document.querySelectorAll(
".project-preview"
);


const modalClose =
document.querySelector(
".modal-close"
);



previewButtons.forEach(button=>{


button.addEventListener(
"click",
()=>{


const card =
button.closest(
".project-card"
);



document.getElementById(
"modalImage"
).src =
card.querySelector(
"img"
).src;



document.getElementById(
"modalProjectTitle"
).innerText =
card.querySelector(
".project-title"
).innerText;



document.getElementById(
"modalDescription"
).innerText =
card.querySelector(
".project-description"
).innerText;



modal.classList.add(
"active"
);



});


});



if(modalClose){


modalClose.onclick=()=>{

modal.classList.remove(
"active"
);

};


}





/* =====================================
   BACK TO TOP
===================================== */


const topBtn =
document.querySelector(
".back-to-top"
);



window.addEventListener(
"scroll",
()=>{


if(topBtn){


if(window.scrollY>500){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}


}


});



if(topBtn){


topBtn.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};


}






/* =====================================
   CONTACT FORM
===================================== */


const contactForm =
document.getElementById(
"contactForm"
);



if(contactForm){


contactForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();



alert(
"Thank you! Your message has been sent."
);



contactForm.reset();



});


}







/* =====================================
   CURRENT YEAR
===================================== */


const year =
document.getElementById(
"currentYear"
);



if(year){

year.innerText =
new Date()
.getFullYear();

}





console.log(
"Portfolio JavaScript Loaded Successfully 🚀"
);

