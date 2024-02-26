const homePage = document.getElementById("Home");
const educationPage = document.getElementById("Education");
const experiancePage = document.getElementById("Experiance");
const picturesPage = document.getElementById("Pictures");
const contactPage = document.getElementById("Contact");

const liHome = document.querySelector(".liHome");
const liEducation = document.querySelector(".liEducation");
const liExperiance = document.querySelector(".liExperiance");
const liPictures = document.querySelector(".liPictures");
const liContact = document.querySelector(".liContact");

const EduYear = document.querySelectorAll(".EduYear");
const One = document.querySelector(".One");
const Two = document.querySelector(".Two");
const Three = document.querySelector(".Three");
const Four = document.querySelector(".Four");
const Five = document.querySelector(".Five");
const Six = document.querySelector(".Six");
const seven = document.querySelector(".Seven");

const Edu = document.querySelector(".Edu");
const Exp = document.querySelector(".Exp");
const Brd = document.querySelector(".Brd");
const Prj = document.querySelector(".Prj");

const myF_Clr = () => {
    liHome.style.color = 'black';
    liHome.style.boxShadow = 'initial';
    liEducation.style.color = 'black';
    liEducation.style.boxShadow = 'initial';
    liExperiance.style.color = 'black';
    liExperiance.style.boxShadow = 'initial';
    liPictures.style.color = 'black';
    liPictures.style.boxShadow = 'initial';
    liContact.style.color = 'black';
    liContact.style.boxShadow = 'initial';
    topFunction();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function myF_Home(){
    myF_Clr();
    homePage.style.transform = 'translateX(0%)';
    educationPage.style.transform = 'translateX(200%)';
    experiancePage.style.transform = 'translateX(300%)';
    picturesPage.style.transform = 'translateX(400%)';
    contactPage.style.transform = 'translateX(500%)';
    liHome.style.color = 'red';
    liHome.style.boxShadow = '0 0 20px 2px rgb(254, 242, 14)';
}
function myF_Education(){
    myF_Clr();
    homePage.style.transform = 'translateX(-200%)';
    educationPage.style.transform = 'translateX(0%)';
    experiancePage.style.transform = 'translateX(200%)';
    picturesPage.style.transform = 'translateX(300%)';
    contactPage.style.transform = 'translateX(400%)';
    liEducation.style.color = 'red';
    liEducation.style.boxShadow = '0 0 20px 2px rgb(254, 242, 14)';
}
function myF_Experiance(){
    myF_Clr();
    homePage.style.transform = 'translateX(-300%)';
    educationPage.style.transform = 'translateX(-200%)';
    experiancePage.style.transform = 'translateX(0%)';
    picturesPage.style.transform = 'translateX(200%)';
    contactPage.style.transform = 'translateX(300%)';
    liExperiance.style.color = 'red';
    liExperiance.style.boxShadow = '0 0 20px 2px rgb(254, 242, 14)';
}
function myF_Pictures(){
    myF_Clr();
    homePage.style.transform = 'translateX(-400%)';
    educationPage.style.transform = 'translateX(-300%)';
    experiancePage.style.transform = 'translateX(-200%)';
    picturesPage.style.transform = 'translateX(0%)';
    contactPage.style.transform = 'translateX(200%)';
    liPictures.style.color = 'red';
    liPictures.style.boxShadow = '0 0 20px 2px rgb(254, 242, 14)';
}
function myF_Contact(){
    myF_Clr();
    homePage.style.transform = 'translateX(-500%)';
    educationPage.style.transform = 'translateX(-400%)';
    experiancePage.style.transform = 'translateX(-300%)';
    picturesPage.style.transform = 'translateX(-200%)';
    contactPage.style.transform = 'translateX(0%)';
    liContact.style.color = 'red';
    liContact.style.boxShadow = '0 0 20px 2px rgb(254, 242, 14)';
}

function Edu1989(){
    One.style.opacity="1";
    Two.style.opacity="0";
    Three.style.opacity="0";
    Four.style.opacity="0";
    Five.style.opacity="0";
    Six.style.opacity="0";
    seven.style.opacity="0";
    clearEduYear(0);
}
function Edu1994(){
    One.style.opacity="0";
    Two.style.opacity="1";
    Three.style.opacity="0";
    Four.style.opacity="0";
    Five.style.opacity="0";
    Six.style.opacity="0";
    seven.style.opacity="0";
    clearEduYear(1);
}
function Edu1997(){
    One.style.opacity="0";
    Two.style.opacity="0";
    Three.style.opacity="1";
    Four.style.opacity="0";
    Five.style.opacity="0";
    Six.style.opacity="0";
    seven.style.opacity="0";
    clearEduYear(2);
}
function Edu2004(){
    One.style.opacity="0";
    Two.style.opacity="0";
    Three.style.opacity="0";
    Four.style.opacity="1";
    Five.style.opacity="0";
    Six.style.opacity="0";
    seven.style.opacity="0";
    clearEduYear(3);
}
function Edu2013(){
    One.style.opacity="0";
    Two.style.opacity="0";
    Three.style.opacity="0";
    Four.style.opacity="0";
    Five.style.opacity="1";
    Six.style.opacity="0";
    seven.style.opacity="0";
    clearEduYear(4);
}
function Edu2023(){
    One.style.opacity="0";
    Two.style.opacity="0";
    Three.style.opacity="0";
    Four.style.opacity="0";
    Five.style.opacity="0";
    Six.style.opacity="1";
    seven.style.opacity="0";
    clearEduYear(5);
}
function Edu2024(){
    One.style.opacity="0";
    Two.style.opacity="0";
    Three.style.opacity="0";
    Four.style.opacity="0";
    Five.style.opacity="0";
    Six.style.opacity="0";
    seven.style.opacity="1";
    clearEduYear(6);
}

function clearEduYear(year){
    for(let x=0; x<7; x++ ){
        EduYear[x].style.color="black";
        EduYear[x].style.scale="1";
    }
    EduYear[year].style.color="red";
    EduYear[year].style.scale="1.2";

}


Edu.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Employment"
    document.querySelector(".CS").style.display="block";
    document.querySelector(".ES").style.display="none";
    document.querySelector(".Brands").style.display="none";
    document.querySelector(".Proj").style.display="none";
});
Exp.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Computer & Electronics Skills"
    document.querySelector(".CS").style.display="none";
    document.querySelector(".ES").style.display="block";
    document.querySelector(".Brands").style.display="none";
    document.querySelector(".Proj").style.display="none";
});
Brd.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Brands/Hands In Tools Skills"
    document.querySelector(".CS").style.display="none";
    document.querySelector(".ES").style.display="none";
    document.querySelector(".Brands").style.display="block";
    document.querySelector(".Proj").style.display="none";
});
Prj.addEventListener("click", function(){
    document.getElementById("title").innerHTML="Major Projects Accomplished"
    document.querySelector(".CS").style.display="none";
    document.querySelector(".ES").style.display="none";
    document.querySelector(".Brands").style.display="none";
    document.querySelector(".Proj").style.display="block";
});

let position = 1;
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener("click", function(){
    position--;
    if (position < 1){
        position = 12;
    }
    getImage(position);
});
next.addEventListener("click", function(){
    position++;
    if(position > 12){
        position = 1;
    }
    getImage(position);
});
function getImage(pos){
    for(let x=0; x<12; x++){
        document.querySelectorAll(".a")[x].style.display = "none";
    }
    document.getElementsByClassName("a")[pos-1].style.display = "block";
}

for(let i=0; i<3; i++){
    document.getElementsByClassName("btnC")[i].addEventListener("click", function(){
        for(let x=0; x<3; x++){
            document.getElementsByClassName("btnC")[x].classList.remove("active");
            document.getElementsByClassName("cBody")[x].style.display="none";    
        }    
        document.getElementsByClassName("btnC")[i].classList.add("active");
        document.getElementsByClassName("cBody")[i].style.display="block";
    });
}