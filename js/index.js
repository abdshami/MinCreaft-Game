


const gameMap = [
   
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 5, 3, 0, 0],
        [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
        [0, 0, 0, 4, 0, 0, 0, 4, 0, 4, 0, 0, 0, 4, 0, 0, 5, 0, 4, 0],
        [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    
]


element = {
    sky: 0,
    cloud: 1,
    ground: 2,
    grass:3,
    stone: 4,
    wood: 5,
    grassGround:6,
    groundCount:0,
    stoneCount:0,
    woodCount:0,
    grassGroundCount:0,
    grassCount:0,

    


    
}

let axeFlag = false,pixkaxeFlag = false,shovelFlag = false;

let groundSelectFlag =false, grassSelectFlag =false, groundGrassSelectFlag = false ,stoneSelectFlag = false , woodSelectFlag =false;




const gameShape = document.querySelector(".gameDraw")

const ground1 = document.querySelector(".ground1")
const grassGround1 = document.querySelector(".grassGround1")
const grass1 = document.querySelector(".grass1")
const wood1 = document.querySelector(".wood1")
const stone1 = document.querySelector(".stone1")




//////////////////////////////////////////////////////////////////////////////////////////

function gameDraw(map,shape){
  
  
    for(let i=0 ; i<map.length; i++){

        let temp = '';
        for (let j=0; j<map[i].length; j++){
           
            switch(map[i][j]){
            
                case element.sky:
                
                     let div1 = document.createElement("div")
                     div1.classList.add("sky");
                     div1.id = `${i} ${j}`;

                     div1.addEventListener('click',(e)=>{
                       alert("before enter enter enter ground")
                        if(groundSelectFlag && element.groundCount){
                            
                                e.target.classList.add("ground");
                                element.groundCount--;
                               alert("enter enter enter ground")
                        }      
                        else if (grassSelectFlag && element.grassCount ){
                                e.target.classList.add("grass");
                                element.grassCount--;
                                alert("enter enter enter ground")
                        } else if (groundGrassSelectFlag && element.grassGroundCount ){
                                e.target.classList.add("grassGround");
                                element.grassGroundCount--;
                                alert("enter enter enter ground")
                        } else if (woodSelectFlag && element.woodCount ){
                                e.target.classList.add("wood");
                                element.woodCount--;
                                alert("enter enter enter ground")
                        } else if (stoneSelectFlag && element.stoneCount ){
                                e.target.classList.add("stone");
                                element.stoneCount--;
                                alert("enter enter enter ground")
                        }
                        
                     })

                     shape.appendChild(div1);
                     break;

                case element.cloud:

                     let div2 = document.createElement("div")
                     div2.classList.add("cloud");
                     div2.id = `${i} ${j}`;
                     shape.appendChild(div2);
                     break;

                case element.ground:
          
                            let div3 = document.createElement("div")
                            div3.classList.add("ground");
                            div3.id = `${i} ${j}`;
                        
                            div3.addEventListener('click',(e)=>{
                                if (shovelFlag){
                            
                                    e.target.classList.add("clearDiv");

                                     element.groundCount++;
                                     ground1.innerText = element.groundCount;
                                }
                            })
                        
                            shape.appendChild(div3);
                            break;

               case element.grass:
            
                            let div4 = document.createElement("div")
                            div4.classList.add("grass");
                            div4.id = `${i} ${j}`;

                            div4.addEventListener('click',(e)=>{
                                if (axeFlag){
                                    e.target.classList.add("clearDiv");

                                    element.grassCount++;
                                    grass1.innerText = element.grassCount;
                                }
                            })

                            shape.appendChild(div4);
                            break;  

                case element.stone:

                            let div5 = document.createElement("div")
                            div5.classList.add("stone");
                            div5.id = `${i} ${j}`;

                            div5.addEventListener('click',(e)=>{
                                if (pixkaxeFlag){
                                    e.target.classList.add("clearDiv");

                                    element.stoneCount++;
                                    stone1.innerText = element.stoneCount;
                                }
                            })

                            shape.appendChild(div5);
                            break; 

                case element.wood:

                            let div6 = document.createElement("div")
                            div6.classList.add("wood");
                            div6.id = `${i} ${j}`;

                            div6.addEventListener('click',(e)=>{
                                if (axeFlag){
                                    e.target.classList.add("clearDiv");

                                    element.woodCount++;
                                    wood1.innerText = element.woodCount;
                                }
                            })

                            shape.appendChild(div6);
                            break; 

                case element.grassGround:

                            let div7 = document.createElement("div")
                            div7.classList.add("grassGround");
                            div7.id = `${i} ${j}`;

                            div7.addEventListener('click',(e)=>{
                                if (shovelFlag){
                                   e.target.classList.add("clearDiv");

                                   element.grassGroundCount++;
                                   grassGround1.innerText = element.grassGroundCount;
                                }
                            })

                            shape.appendChild(div7);
                            
                            
            }
         
           
            
    
        }
         
        
    }
   
}

//////////////////////////////////////////////////////////////////////////////////////


function chooseTool(){

       


        const axe = document.querySelector(".axe").addEventListener('click',()=>{
            axeFlag = true;
            pixkaxeFlag = false;
            shovelFlag = false;
            alert("axe")
        })

        const shovel = document.querySelector(".shovel").addEventListener('click',()=>{
            axeFlag = false;
            pixkaxeFlag = false;
            shovelFlag = true;
            alert("shovel")
        }) 

        const pixkaxe = document.querySelector(".pixkaxe").addEventListener('click',()=>{
            axeFlag = false;
            pixkaxeFlag = true;
            shovelFlag = false;
            alert("pixkaxe")
        })


}



//////////////////////////////////////////////////////////////////////////////


function chooseElement(){

       


    document.querySelector(".ground1").addEventListener('click',()=>{
        groundSelectFlag = true
        grassSelectFlag =false
        groundGrassSelectFlag = false
        stoneSelectFlag = false
        woodSelectFlag =false
        alert("  groundSelect")
    })

    document.querySelector(".grass1").addEventListener('click',()=>{
        groundSelectFlag = false
        grassSelectFlag =true
        groundGrassSelectFlag = false
        stoneSelectFlag = false
        woodSelectFlag =false
        alert("  grassSelect")
    }) 

    document.querySelector(".grassGround1").addEventListener('click',()=>{
        groundSelectFlag = false
        grassSelectFlag =false
        groundGrassSelectFlag = true
        stoneSelectFlag = false
        woodSelectFlag =false
        alert("  ground Grass Select")
    })

    document.querySelector(".stone1").addEventListener('click',()=>{
        groundSelectFlag = false
        grassSelectFlag =false
        groundGrassSelectFlag = false
        stoneSelectFlag = true
        woodSelectFlag =false
        alert("  Stone Select")
    })

    document.querySelector(".wood1").addEventListener('click',()=>{
        groundSelectFlag = false
        grassSelectFlag =false
        groundGrassSelectFlag = false
        stoneSelectFlag = false
        woodSelectFlag =true
        alert("  Wood Select")
    })


}


////////////////////////////////////////////////////////////////////////////////

function buildDiv(div){
     //grassSelectFlag =false, groundGrassSelectFlag = false ,stoneSelectFlag = false , woodSelectFlag =false;

   
       




}







////////////////////////////////////////////////////////////////////////////////
gameDraw(gameMap,gameShape);

chooseTool()

chooseElement();