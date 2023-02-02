let element = document.querySelector('ul');
let btnshow = document.querySelector('span.bur-menu');
// let btnclose = document.querySelector('span.close-menu');


btnshow.onclick = function(){
    element.classList.toggle('show-ul');
    if(element.classList.contains('show-ul')){
        btnshow.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        btnshow.innerHTML='<i class="fa-solid fa-bars"></i>'   
    }
}


/*section scroll*/
let links = document.querySelectorAll('a');
let sections = document.querySelectorAll('section');
let header = document.querySelector('header');


window.onscroll = function(){
    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 200){
            links.forEach(link => {
                if(link.getAttribute('href') == '#'+section.getAttribute('id')){
                    link.style.color = '#198de2';
                    header.style.background = '#E2EAF0';
                    // section.style.borderTop ='1px solid #198de2';
                    
                }else{
                   
                    link.style.color = null;
                    header.style.background = ' ';
                    // section.style.borderTop ='1px solid #198de2';
                    
                }
            });
        }
    });
}



