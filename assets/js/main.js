document.addEventListener('DOMContentLoaded', ()=>{
    let custom_radio =  document.querySelectorAll('.radio-input')
    let sections =  document.querySelectorAll('.main-section')
    let variants =  document.querySelectorAll('.variants')
    let total =  document.querySelector('.total_value')
    let radio_button = document.getElementsByName('bundle-order')
    
    sections.forEach(each=>{
        each.addEventListener('click', (e)=>{

        sections.forEach(each=>{
            each.classList.remove('active-section')
        })
        custom_radio.forEach(each=>{
            each.classList.add('default-radio')
            each.classList.remove('active-radio')
            each.children[0].classList.add('d-none')
        })
        radio_button.forEach(each=>{
            if(each.checked){
                total.innerText = `DKK ${each.value}.00`;
            }
        })
        variants.forEach(each=>{
            each.classList.add('d-none')
        })
          each.classList.add('active-section')
          each.children[1].classList.remove('d-none')
          each.children[0].children[0].children[0].classList.add('active-radio')
          each.children[0].children[0].children[0].classList.remove('default-radio')
          each.children[0].children[0].children[0].children[0].classList.remove('d-none')
        })

    })
})