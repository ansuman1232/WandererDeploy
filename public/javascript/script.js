(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //===============to show tax========================
  taxbtn=document.querySelector('.tax-btn')
  taxbtn.addEventListener("click",()=>{
   taxarr= document.querySelectorAll('.tax')//as there are many  each listing in each there is a tax
   taxarr.forEach((e)=>{
    e.classList.toggle("show");
   })
  })