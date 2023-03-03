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
     <h5 class="card-title">${tool.name}</h5>
     <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
loadData();
