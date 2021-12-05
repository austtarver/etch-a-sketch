
window.addEventListener('load',() => {
    const container = document.querySelector('#container');

        for(i=0;i<256;i++){  
            const childDiv = document.createElement('div');
            childDiv.setAttribute('id','childDiv');
            container.appendChild(childDiv);
        }

    const childDivs = document.querySelectorAll('#childDiv');
       
        childDivs.forEach(childDiv => {
            childDiv.addEventListener('mouseover',()=> {
                childDiv.style.backgroundColor = "black";
        
            });
        });
        
});



function getSize(){
    let gridSize=prompt("Please enter the preffered grid size:")
    return gridSize;
}