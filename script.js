

window.onload=()=>{
  let tabs = document.querySelectorAll('.tab-link')
  let tabcont = document.querySelectorAll('.tab-content')
  tabs[0].addEventListener('click',()=>{
     tabcont[0].style.display = 'block';
     tabcont[1].style.display = 'none';
     tabcont[2].style.display = 'none';
  })

  tabs[1].addEventListener('click',()=>{
    tabcont[0].style.display = 'none';
    tabcont[1].style.display = 'block';
    tabcont[2].style.display = 'none';
 })

 tabs[2].addEventListener('click',()=>{
    tabcont[0].style.display = 'none';
    tabcont[1].style.display = 'none';
    tabcont[2].style.display = 'block';
 })


  
}