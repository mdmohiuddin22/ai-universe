const loadData= async()=>{
    const url=`https://openapi.programming-hero.com/api/ai/tools`
    const res =await fetch(url);
    const data =await res.json();
   displayData(data.data.tools);
    
}

const displayData =tools =>{
   const allDataContainer =document.getElementById('all-card-container');

  tools=tools.slice(0,6)
   tools.forEach(tool =>{
    const dataDiv = document.createElement('div');
   dataDiv.classList.add('col');
   dataDiv.innerHTML=` <div class="card p-4">
   <img src="${tool.image}" class="card-img-top" alt="...">
   <div class="card-body">
   <h3>features</h3>
     <h5 class="card-title">${tool.name}</h5>
     <p class="card-text">${tool.description}</p>
     <div class="d-flex justify-content-between ">  <p class="card-text">${tool.published_in}</p>
     
     <!-- trigger modal -->
     <div  onclick  type="button"  data-bs-toggle="modal" data-bs-target="#cardDetails">
     <i  id="arrow" class="fa-solid fa-arrow-right"></i></div>
     </div>

   </div>
 </div>
 `;
 allDataContainer.appendChild(dataDiv);
   })

}



const toggleSpinner = isLoading => {
    const loadingSection =document.getElementById('Loading');
   
    if(isLoading){
        loadingSection.classList.remove('d-none')
    }
}
const loadCardDetail = cardDetails=>{

}

loadData();
