
var inputField=document.getElementById("inputFieldAnswer");

var inputFieldRem=document.getElementById("inputFieldRemember");



     	// home page basic calculation function starts here
          function show(num){
     		inputField.innerHTML+=num;
     		
     	}

     	function allClear(){
     		inputField.innerHTML="";
     		inputFieldRem.innerHTML="";
     	}

     	function singleClear(){

     		inputField.innerHTML=inputField.innerHTML.slice(0,inputField.innerHTML.length-1);
     		if(inputField.innerHTML.length==0)
     		{
     			inputFieldRem.innerHTML="";
     		}
     	}
          
     	function result()
     	{
     		inputFieldRem.innerHTML=inputField.innerHTML;
     		inputField.innerHTML=eval(inputField.innerHTML);
     	}


          // open menubar function starts here
          document.querySelector('.menuBar').addEventListener("click", ()=>{
               document.querySelector(".slidingMenuBar").style.left="0px";
               document.querySelector(".menuBar").style.display="none";
               document.querySelector(".closeMenuBar").style.display="inline-block";
               var menuVisible = document.querySelectorAll(".visible");
               for(i=0; i<menuVisible.length; i++){
                    menuVisible[i].className="noVisible";
               }
          })

          // close MenuBar function starts here
          document.querySelector(".closeMenuBar").addEventListener("click", ()=>{
               document.querySelector(".slidingMenuBar").style.left="-40rem";
               document.querySelector(".menuBar").style.display="flex";
               document.querySelector(".closeMenuBar").style.display="none";
               var menuNoVisible = document.querySelectorAll(".noVisible");
               for(i=0; i<menuNoVisible.length; i++){
                    menuNoVisible[i].className="visible";
               }
          })

          // menu bar first option *Theme*
          document.querySelector(".themeOption").addEventListener("click", ()=>{

               var themeUL =document.querySelector('.slidingMenuBar .themeOptionUl');

               if(themeUL.style.display=="inline-block") 
                    themeUL.style.display="none";
               else{
                    themeUL.style.display="inline-block";
               }

          })

          document.getElementById('themeFirstOption').addEventListener("click", ()=>{
               
               document.querySelector('.container').style.background="#5C6BC0";
               document.getElementById('themeFirstOption').className="themeOptionBack";
               document.getElementById('themeSecondOption').className="";
               document.getElementById('themeThirdOption').className="";
          })

          document.getElementById('themeSecondOption').addEventListener("click", ()=>{
               
               document.querySelector('.container').style.background="#7E57C2";
               document.getElementById('themeSecondOption').className="themeOptionBack";
               document.getElementById('themeFirstOption').className="";
               document.getElementById('themeThirdOption').className="";
          })
          document.getElementById('themeThirdOption').addEventListener("click", ()=>{
               
               document.querySelector('.container').style.background="linear-gradient(#2196f3, #e91e63)";
               document.getElementById('themeThirdOption').className="themeOptionBack";
               document.getElementById('themeFirstOption').className="";
               document.getElementById('themeSecondOption').className="";
          })

          // menu bar first option *ABOUT*
           document.querySelector(".aboutOption").addEventListener("click", ()=>{

               var themeUL =document.querySelector('.slidingMenuBar .aboutOptionDetails');

               if(themeUL.style.display=="inline-block") 
                    themeUL.style.display="none";
               else{
                    themeUL.style.display="inline-block";
               }

          })