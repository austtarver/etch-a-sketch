
window.addEventListener('load',() => {
    newSession();
});




function getSize(){
    let gridSize=prompt("Please enter the preffered grid size:")
    if(gridSize>100){
        alert('Please enter a number < than 100.');
        let gridSize=prompt("Please enter the preffered grid size:");
            return gridSize;
    }else{
      return gridSize;
    }
}

function setGrid(size,container){
    let totalGrid=size*size;
    container.style.cssText=`display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size},1fr)`;
    
    for(i=0;i<totalGrid;i++){  
        const childDiv=document.createElement('div');
            childDiv.setAttribute('id','childDiv');
            container.appendChild(childDiv);
        }

    return container;
}


function clearGrid(clearBtn,childDivs){
    clearBtn.addEventListener('click', () => {
        childDivs.forEach(childDiv => {
            childDiv.style.backgroundColor = "lightgray";
            childDiv.addEventListener('mouseover', () => {
                childDiv.style.backgroundColor="black";
            });
        });
        
    });
    return childDivs;
}

function resetSession(resetBtn,childDivs,container){
    resetBtn.addEventListener('click',() =>{
        childDivs.forEach(childDiv => {
            container.removeChild(childDiv);
        });
        newSession();
    });
    
}



function eraseCell(eraseBtn,childDivs){
        eraseBtn.addEventListener('click', () => {
            childDivs.forEach(childDiv => {
                childDiv.addEventListener('mouseover',() => {
                    childDiv.style.backgroundColor="lightgray";   
                });
            }); 
        });

    return childDivs;
}

function colorBlack(blackBtn, childDivs){
        blackBtn.addEventListener('click', () => {
            childDivs.forEach(childDiv => {
                childDiv.addEventListener('mouseover',() => {
                    childDiv.style.backgroundColor="black";   
                });
            });      
        });
    return childDivs;
}

function colorRGB(rgbBtn,childDivs){  
        rgbBtn.addEventListener('click', () => {
            childDivs.forEach(childDiv => {
                childDiv.addEventListener('mouseover', () => {
                   let random1=Math.random()*(255-0)+0;  
                   let random2=Math.random()*(255-0)+0;  
                   let random3=Math.random()*(255-0)+0;  
                    childDiv.style.backgroundColor=`rgb(${random1},${random2},${random3})`;
                    console.log(childDiv.style.backgroundColor);
                });
            });
        });
    return childDivs;
}

function newSession(){
    const container=document.querySelector('#container');
    const clearBtn=document.querySelector('#clear');
    const eraseBtn=document.querySelector('#erase');
    const blackBtn=document.querySelector('#black');
    const resetBtn=document.querySelector('#reset');
    const rgbBtn=document.querySelector('#rgb');

    let size=getSize();
    setGrid(size,container);
    const childDivs=document.querySelectorAll('#childDiv');
    childDivs.forEach(childDiv => {
        childDiv.addEventListener('mouseover',() => {
            childDiv.style.backgroundColor="black";   
        });
    });
    eraseCell(eraseBtn,childDivs);
    clearGrid(clearBtn,childDivs); 
    resetSession(resetBtn,childDivs,container);
    colorBlack(blackBtn,childDivs);
    colorRGB(rgbBtn,childDivs);
}