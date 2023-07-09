//set initail count
let count=0;

const value=document.querySelector("#value");         //id of val
const btns=document.querySelectorAll(".btn");     //class of btn

// console.log(btns);
btns.forEach(function(btn)
{
    
    btn.addEventListener('click',function(e)
    {
        const styles=e.currentTarget.classList;
        if(styles.contains("dec"))
        {
            count--;
        }
        else if(styles.contains("inc")) 
        {
            count++;
        }
        else
        count=0;
        value.textContent=count;
    })
});