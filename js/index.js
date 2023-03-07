

let sidebar = $(".sideBar");
let sidebarIcon =$(".sideBar i");
let sidebarwidth = $(".sideBar-inner").innerWidth();
let closeBtn =$('.closeBtn')

$(document).ready(function(){
    //start closing sidebar
    sidebar.animate({left:-sidebarwidth})
    // start closing occordion
    $('.bodyone').hide();
    $('.bodytwo').hide();
    $('.bodythree').hide();
    $('.bodyfour').hide();
    //open sidebaf
sidebarIcon.click(function(){
    if(sidebar.css('left') == "0px"){
        sidebar.animate({left:-sidebarwidth},500)
    }else{
        sidebar.animate({left:'0px'},500)
    }
})
closeBtn.click(function(){
    sidebar.animate({left:-sidebarwidth},500)
})
})
 //open and close ocurdion
$('.headone').click(function(){
    $('.bodyone').toggle(500);
})
$('.headtwo').click(function(){
    $('.bodytwo').toggle(500);
})
$('.headthree').click(function(){
    $('.bodythree').toggle(500);
})
$('.headfour').click(function(){
    $('.bodyfour').toggle(500);
})
// hide sidebat in scroll
$(window).scroll(function(){
    let windowscroll = $(window).scrollTop();
    let homeheight = $('.home').innerHeight();
    let sidBarInner =  $('.sideBar-inner');
    
    if(windowscroll >homeheight){
        sidebarIcon.hide();
        closeBtn.hide();
        sidebar.hide();
        sidBarInner.hide();
    }else if(windowscroll <homeheight){
        sidebarIcon.show();
        closeBtn.show();
        sidebar.show();
        sidBarInner.show();
    }
})
  setInterval(eventday,1000)

function eventday(){
    const d = new Date();
    let day = '26 D';
    let hour = d.getHours();
    let menites = d.getMinutes();
    let second = d.getSeconds();
  

    document.getElementById('days').innerHTML =day;
    document.getElementById('hours').innerHTML = hour +"h";
    document.getElementById('mintes').innerHTML = menites+"m";
    document.getElementById('seconds').innerHTML = second+"s";
}