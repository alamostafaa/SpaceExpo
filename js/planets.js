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
        console.log(entries)
        entries.forEach(entry =>{
            if(entry.isIntersecting)
            {
                
                entry.target.classList.add('active');
                entry.target.insertAdjacentElement("afterbegin",img)
            }
            else
            {
                entry.target.classList.remove('active')
                entry.target.removeChild(img)
            }
        })

    }, {threshold: [0.8],});
    observer.observe(e);
}
const sections = document.querySelectorAll('section')
sections.forEach(section => activeDiv(section) )