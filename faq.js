document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.container');
  
  containers.forEach(container => {
    const icon = container.querySelector('.icon'); 
    const ans = container.querySelector('.answer'); 

    container.addEventListener('click' , () => {

      if(icon.classList.contains('active')) {
        icon.classList.remove('active'); 
        ans.style.maxHeight = null; 
      }else{
        icon.classList.add('active'); 
        ans.style.maxHeight = ans.scrollHeight; 
      }
    })
  });
    
})
