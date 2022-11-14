var image = document.getElementById('img');
var input = document.getElementById('inpt');

image.onclick=function showpass(){
    if(input.type == 'password'){
        input.type = 'text';
        image.src = 'eye-icons/eye-open.png'
    }else{
        input.type = 'password';
        image.src = 'eye-icons/eye-close.png'
    }
}