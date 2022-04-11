let count =0;

let value=document.getElementById('value')
let btns=document.querySelectorAll('.btn')

btns.forEach(function(btn)  //btn is the current button pressed
{
   btn.addEventListener('click',function(e){
       const targetClass= e.currentTarget.classList
    //    console.log(targetClass);
    if(targetClass.contains('decrease'))
    {
        count--;
    }
    else if(targetClass.contains('increase'))
    {
        count++;
    }
    else
    {
        count=0;
    }
    if(count<0)
    {
        value.style.color='red'
    }
    else if(count>0)
    {
        value.style.color='green'
    }
    else
    {
        value.style.color='black'
    }
   value.textContent=count;
   });
})