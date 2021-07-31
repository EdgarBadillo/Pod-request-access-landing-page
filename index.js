const input = document.getElementById('form__mail');

const mail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;


const mailvalidation = (e) => {

    switch (e.target.name){
        case "mail":
            if(mail.test(e.target.value)){
                document.getElementById('input-error').classList.remove('input_error-active')
                document.getElementById('input-error').classList.add('input_error')
                
            }else{
                document.getElementById('input-error').classList.remove('input_error')
                document.getElementById('input-error').classList.add('input_error-active')
            }
        break;
    
    }
}
 
input.addEventListener('keyup', mailvalidation)