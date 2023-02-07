var main=document.querySelector("#main")
var inputcontainer=document.querySelector(".inputcontainer")
var inputfood=document.getElementById("inputfood")
var foodcontainer=document.getElementById("foodcontainer")
var inputbtn=document.getElementById("inputbtn")
inputbtn.addEventListener("click",action)
        function action(){
			if(inputfood.value==""){
				    inputfood.setAttribute("placeholder","Enter Your food")
			}
			else{
               var newFoodItemEl=document.createElement("li")
			       newFoodItemEl.className="fooditem"
			        div=document.createElement("div")
			        divBtn=document.createElement("div")
				  // divBtn.parentElement.setAttribute("onclick","remove(event)")
				  divBtn.innerHTML=`<i onClick="remove(event)" class="fa fa-xmark"></i>`				 
				 div.textContent=inputfood.value
				  foodcontainer.appendChild(newFoodItemEl)
				  newFoodItemEl.appendChild(div)
				   newFoodItemEl.appendChild(divBtn)	
                  inputfood.value=""
			}
}
function remove(event) {
  const existingList = event.target.parentNode.parentNode;
  existingList.remove()
}
	      inputfood.addEventListener("keyup", sha)
		    function sha(event){
				if(event.key==="Enter"){
				// inputfood.value=event.key.toUpperCase()
					action()
			    }
				}
// <!-------------------------------------------------------------errors--------------------------------------------->				
	       // inputfood.addEventListener("keyup", sha)
		    // function sha(event){
				// if(inputfood.value=event.key.toUpperCase()){
					 // if(event.key==="Enter"){
					// action()
				// }
			    // }
				// }