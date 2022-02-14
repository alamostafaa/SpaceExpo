function DisplayDetails(){
    let btn = document.getElementsByTagName('button');
    btn.addEventListener('click', () => {

    });
}
function something () 
{
    document.addEventListener('scroll' , () => {
        
    })
}

//to add stars photos & active element
//create img elm

let activeDiv = (e) => {
    const observer = new IntersectionObserver((entries)=> {
        entries.forEach(entry =>{
            if(entry.isIntersecting)
            {
                
                entry.target.classList.add('active');
        
            }
            else
            {
                entry.target.classList.remove('active')
            }
        })

    }, {threshold: [0.7],});
    observer.observe(e);
}
const sections = document.querySelectorAll('section')
sections.forEach(section => activeDiv(section) )

//To the top
const toTheTop =document.getElementById('toTop');
document.addEventListener('scroll', function (){

    // to make the button appear while scrolling to a specific limit -550-
    if (window.scrollY >= '550')
    {
        toTheTop.style.display = 'block';
    
        //to make the button go to the top when is clicked
        toTheTop.addEventListener('click', function () {
            window.scrollTo(0,0);
        });
        
    }
    // to make the button disappear while scrolling to a limit smaller than 550
    else
    {
        toTheTop.style.display = 'none';
    }
    });
    