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
     <p class="card-text">${tool.features[1]}</p>
     <div class="d-flex justify-content-between ">  <p class="card-text">${tool.published_in}</p>
     
     <!-- trigger modal -->
     <div id="modalclk" onclick="loadCardDetail('${tool.id}')"  type="button"  data-bs-toggle="modal" data-bs-target="#cardDetails">
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


const loadCardDetail =async id=>{
  const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayCardDetails(data.data);
}

const displayCardDetails =tool =>{
  console.log(tool.features[1].feature_name);
  const modalTile =document.getElementById('cardDetailsLabel');
  modalTile.innerText=tool.tool_name;
  const modalCardDetails=document.getElementById('modal-card-details');
  modalCardDetails.innerHTML=`
  <img src="${tool.image_link[0]}" class="img-fluid" alt="...">
  <img  src="" alt="">
  <h3>${tool.input_output_examples[0].input}</h3>
  `
}

loadData();
