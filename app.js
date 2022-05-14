
const cardObject = cardDetails;
const mainWindow = document.querySelector('.mainWindow');
const popupCard = document.querySelector('.popupContainer');
const cardContainer = document.querySelector('.card-container');
const workDetails = document.querySelector('.worklist');
const techDetails = document.querySelector('.technologiesContainer');
  


  
const popupmethod = (projectId) => {
    let carditems = {};
    

// filter 
for (let i = 0; i < cardObject.length; i += 1) {
    if (cardObject[i].id === projectId) {
      carditems = { ...cardObject[i] };
    }
  }

 
    
  const popupImg = document.querySelector('.card-image')
    
  const projectTitle = document.querySelector('.Popup-project-title');
  const popuDetail = document.querySelector('.popup-details-sec');
  const technList = document.createElement('ul');
  const technologiesList = document.createElement('ul');
  popupImg.setAttribute('src', carditems.featuredImage);
  projectTitle.innerText = carditems.projectName;
  popuDetail.innerText = carditems.projectDescription;


     carditems.works.forEach((elem) => {
          const item = document.createElement('li');
         
         item.classList.add('workInfo');
          item.innerText = elem;
         technList.append(item);
       });
      
        workDetails.replaceChildren(technList);
     

       carditems.technologies.forEach((dataelem) => {
        const data = document.createElement('button');
        data.classList.add('btn-small');
     
        data.innerText = dataelem;
       technologiesList.append(data);
     });
     
      techDetails.replaceChildren(technologiesList);




}




// see project handler
const buttonMethod = (event) => {
    const id = parseInt(event.target.id, 10);
    popupmethod(id);
    
        // mainWindow.style.display = 'none'; 
    popupCard.style.display =  'block';
    
  }

  // console.log(popupCard.classList)




  // project card builder
const projectCard = () => {
    cardObject.forEach((data) => {
      const card = document.createElement('div');
      const cardContentArea = document.createElement('div');
      const imageContainer = document.createElement('div');

      const featuredImg = document.createElement('img');
      const projectTitle = document.createElement('h2');
       const technologiesDetails = document.createElement('ul');
      const workDetails = document.createElement('ul');
      
      const projectDescription = document.createElement('p');
      const Btn = document.createElement('button');
      cardContentArea.classList.add('card-content-area');
      imageContainer.classList.add('card-img-head')

      technologiesDetails.classList.add('tag-btn-container')
  
      card.classList.add('card');
      featuredImg.classList.add('card-img');
      featuredImg.classList.add('card-img');
      projectTitle.classList.add('project-title');
      workDetails.classList.add('workInfo');
      workDetails.classList.add('workInfoDetails');
      Btn.classList.add('btnNormal');
      projectDescription.classList.add('details-sec')
  
      featuredImg.setAttribute('src', data.featuredImage);
      projectTitle.innerText = data.projectName;
      projectDescription.innerHTML = data.projectDescription;

      Btn.innerText = 'See Project';
      Btn.setAttribute('id', data.id);
    
      
      Btn.addEventListener('click', buttonMethod);

      data.works.forEach((item) => {
        const workItem = document.createElement('a');
        workItem.classList.add('workInfoDetails');
        workItem.classList.add('workInfoDetailsLink');
       
        workItem.classList.add('workInfo');
        workItem.innerText = item;
        workDetails.append( workItem);
      });

      

      data.technologies.forEach((item) => {
        const technoItem = document.createElement('button');
        technoItem.classList.add('tag-btn-container');
        technoItem.classList.add('tag-btn');
        technoItem.classList.add('btn-small');
        technoItem.innerText = item;
        technologiesDetails.append( technoItem);
      });

      card.append(imageContainer);

      imageContainer.append(featuredImg)
        
       cardContentArea.append(projectTitle,  workDetails, projectDescription, technologiesDetails ,  Btn)
      card.append(cardContentArea);
      cardContainer.append(card);
    });
  };

  window.onload = () => {
    projectCard();
  };
  



// close modal box when user click anywhere outside the modal
window.onclick = (event) => {
  if (event.target ===  popupCard) {
    popupCard.style.display = 'none';
    
  }
};


const closePopupBox = () => {
   popupCard.style.display = 'none';
   
};
 const closePopup = document.querySelector('.close-popup');
 closePopup.addEventListener('click', closePopupBox);
























// navigation script
const navOpenBtn = document.querySelector("#btnOpen");
const navCloseBtn = document.querySelector("#btnClose");
const navElem = document.querySelector("nav");
let closeNavBar = document.querySelectorAll(".navbarTwo-link");




for(i = 0; i < closeNavBar.length; i++ ){
    closeNavBar[i].addEventListener('click', function (){
        navElem.classList.add("hide")
        document.getElementById("btnOpen").style.visibility = "visible";
       
    });
}

navOpenBtn.addEventListener('click', function(){
    navElem.classList.remove("hide")
 document.getElementById("btnOpen").style.visibility = "hidden";

})

navCloseBtn.addEventListener("click", function(){
    navElem.classList.add("hide")
    document.getElementById("btnOpen").style.visibility = "visible";

})




