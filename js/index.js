

let sidebar = $(".sideBar");
let sidebarIcon =$(".sideBar i");
let sidebarwidth = $(".sideBar-inner").innerWidth();
let closeBtn =$('.closeBtn')

$(document).ready(function(){
    //start closing sidebar
    sidebar.animate({left:-sidebarwidth},0)
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
   if($('.bodyone').toggle(500)){
  $('.bodytwo').hide(500);
  $('.bodythree').hide(500);
  $('.bodyfour').hide(500);
   } 
})
$('.headtwo').click(function(){
if($('.bodytwo').toggle(500)){
    $('.bodyone').hide(500);
    $('.bodythree').hide(500);
    $('.bodyfour').hide(500); 
}
    ;
})
$('.headthree').click(function(){
   if($('.bodythree').toggle(500)){
    $('.bodyone').hide(500);
    $('.bodytwo').hide(500);
    $('.bodyfour').hide(500);
   }
    
})
$('.headfour').click(function(){
   if($('.bodyfour').toggle(500)){
    $('.bodyone').hide(500);
    $('.bodytwo').hide(500);
    $('.bodythree').hide(500);
   }
    
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
    let day = d.getDate()+18;
    let hour = d.getHours();
    let menites = d.getMinutes();
    let second = d.getSeconds();
    console.log();
    document.getElementById('days').innerHTML =day+"D";
    document.getElementById('hours').innerHTML = hour +"h";
    document.getElementById('mintes').innerHTML = menites+"m";
    document.getElementById('seconds').innerHTML = second+"s";
}