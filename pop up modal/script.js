const open = document.querySelector('button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');


// Open Modal
open.addEventListener('click',()=>{
    modal.style.display='flex'
});

// Close Modal
close.addEventListener ('click',closemodal);

function closemodal (){
    modal.classList.add('closemodalani');
    setTimeout(() => {
        modal.style.display='none'  
        window.location.reload();      
    }, 1000);
};

modal.addEventListener('click',function(e){
    if(e.target.classList.contains('modal')){
        closemodal();
    }
});

// Alert Message
form.addEventListener('submit',submitform);

function submitform (){
    let card = document.querySelector('.card');
    card.innerHTML=`
    <h1>Thank You For Subscribe!</h1>
    `
    setTimeout(()=>{
        closemodal();
    }, 3000);
}