const botton = document.querySelector(".main_hero_information_contact_share");
const destktopShare = document.querySelector(".main_hero_information_contact_share_container")
const inconShare = document.querySelector(".main_hero_information_contact_share__img");

botton.onclick = function () {
    let status;
    if(destktopShare.style.opacity !== "0") {
        destktopShare.style.opacity = "0";
        botton.style.background = "var(--Light_Grayish_Blue)";
        inconShare.style.filter = "brightness(100%)";
        status = false;
        console.log(status)
        
    } else {
        destktopShare.style.opacity = "1";
        botton.style.background = "var(--Desaturated_Dark_Blue)";
        inconShare.style.filter = "brightness(200%)";
        status = true;
        console.log(status)
    }
}


