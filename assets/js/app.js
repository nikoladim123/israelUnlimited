var simCard = document.getElementsByClassName('simCard')[0]
console.log(simCard);

function carAnim(){
  simCard.style.top = "-5.904vw";
  simCard.style.opacity = "1";
  simCard.style.transform = 'rotate(0deg)';
}





// elements by ID
// elements by ID
// elements by ID
  //pla boxes
var basicPlan = document.getElementById('basicPlan');
var premiumPlan = document.getElementById('premiumPlan');
var platinumPlan = document.getElementById('platinumPlan');

  //plan checkboxes
var lockedCheckContainer = document.getElementById('lockedCheckContainer');
var checkedYesID = document.getElementById('checkedYesID');
var checkedNoID = document.getElementById('checkedNoID');
var checkedNotSureID = document.getElementById('checkedNotSureID');
  //simcar size
var selectSimSize = document.getElementById('selectSimSize');
var simFullSize = document.getElementById('simFullSize');
var simMicro = document.getElementById('simMicro');
var nanoSim = document.getElementById('nanoSim');
  //selected NO box
var selectedNo = document.getElementById('selectedNo');
  //selected not sure box
var notSure = document.getElementById('notSure');
  //callback
var requestCallback = document.getElementById('requestCallback');
var requestP = document.getElementById('requestP');
  // dates ID;
var dateArivals = document.getElementById('dateArivals');
  //span plan
var spanPalnID = document.getElementById('spanPalnID');
  // MoreDevices
var simCardContainer = document.getElementsByClassName('simCardContainer')[0];
var MoreDevices = document.getElementById('MoreDevices');


// more devices Hover Effect
// more devices Hover Effect
// more devices Hover Effect
simCardContainer.addEventListener('mouseenter',()=>{
  MoreDevices.style.opacity = '1';
});


// requestCallback
// requestCallback
// requestCallback
var reqMod = 1;
requestP.addEventListener('click',()=>{
  if(reqMod % 2 === 1){
    requestCallback.className += " requestCallbackClicked";
  }else{
    requestCallback.classList.remove("requestCallbackClicked");
  }
  reqMod++;
})

// plan big box click
// plan big box click
// plan big box click
basicPlan.addEventListener('click',(e)=>{
  planObject.plan = 'basicPlan';
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);

  planSizeBack();
  basicPlan.style.transform = 'scale(1.05)';
  basicPlan.style.zIndex = '1';
  spanPalnID.innerHTML = "basic";
  lockedCheckContainer.style.overflow = "visible"
});

premiumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);

  planSizeBack();
  planObject.plan = 'premiumPlan';
  premiumPlan.style.transform = 'scale(1.05)';
  premiumPlan.style.zIndex = '1';
  spanPalnID.innerHTML = "premium";
  lockedCheckContainer.style.overflow = "visible"
});

platinumPlan.addEventListener('click',()=>{
  lockedCheckContainer.style.maxHeight = '1000vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);

  planSizeBack();
  planObject.plan = 'platinumPlan';
  platinumPlan.style.transform = 'scale(1.05)';
  platinumPlan.style.zIndex = '1';
  spanPalnID.innerHTML = "platinum";
  lockedCheckContainer.style.overflow = "visible"
});

function planSizeBack(){
  basicPlan.style.transform = 'scale(1)';
  basicPlan.style.zIndex = 'auto';
  premiumPlan.style.transform = 'scale(1)';
  premiumPlan.style.zIndex = 'auto';
  platinumPlan.style.transform = 'scale(1)';
  platinumPlan.style.zIndex = 'auto';
}

// unlockCheck functions
// unlockCheck functions
// unlockCheck functions
function closeBoxes(){
  selectSimSize.style.maxHeight = '0vw';
  selectedNo.style.height = '0vw';
  notSure.style.height = '0vw';
  dateArivals.style.maxHeight = '0vw';
  simFullSize.checked = false;
  simMicro.checked = false;
  nanoSim.checked = false;
}
// yes
checkedYesID.addEventListener('click',()=>{
  closeBoxes();
  selectSimSize.style.maxHeight = '50vw';
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
});

// no
checkedNoID.addEventListener('click',()=>{
  closeBoxes();
  selectedNo.style.height = '16vw';
});

// not sure
checkedNotSureID.addEventListener('click',()=>{
  closeBoxes();
  notSure.style.height = '11vw';
});

// select sim size fun
// select sim size fun
// select sim size fun
simFullSize.addEventListener('click',()=>{
  dateArivals.style.maxHeight = '80vw';
  scroling();
});
simMicro.addEventListener('click',()=>{
  dateArivals.style.maxHeight = '80vw';
  scroling();
});
nanoSim.addEventListener('click',()=>{
  dateArivals.style.maxHeight = '80vw';
  scroling();
});

function scroling(){
  setTimeout(function () {
    window.scrollBy(0,window.innerWidth/100 * 25);
  }, 300);
}




// store object
var planObject = {
  plan:''
}




window.onload = function(){
  carAnim();
}
