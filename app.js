// Global variables

const bill = document.getElementById("bill");
const people = document.getElementById("people");
const billwarn = document.getElementById("billwarn");
const peoplewarn = document.getElementById("peoplewarn");
const tipamount = document.getElementById("tipamount");
const totalamount = document.getElementById("totalamount")
const custombtn = document.getElementById("custombtn");
const custom = document.getElementById("custom");

// Button event Listeners

document.getElementById("0.05").addEventListener("click", loadButton);
document.getElementById("0.1").addEventListener("click", loadButton);
document.getElementById("0.15").addEventListener("click", loadButton);
document.getElementById("0.25").addEventListener("click", loadButton);
document.getElementById("0.5").addEventListener("click", loadButton);
custombtn.addEventListener("click", loadCustom);
document.getElementById("resetbtn").addEventListener("click", loadReset);

// Input blur events

bill.addEventListener("blur", billWarning);
people.addEventListener("blur", peopleWarning);



// Function for buttons with value

function loadButton(e){

  const percentValue =  bill.value * e.target.id;
  const tipValue = percentValue / people.value;
  const totalValue = bill.value / people.value;
//String(tipValue);

  if (people.value === "" && bill.value === "") {
    addPeopleWarning();
    addBillWarning();
  } else if (bill.value === "") {
    addBillWarning();
  } else if (people.value === ""){
    addPeopleWarning();
  }
  else {
   // let tipValue = tipValue.substring(0,5);
  tipamount.innerHTML = `$${Math.round(tipValue)}`;
  totalamount.innerHTML = `$${Math.round(totalValue)}`
  e.preventDefault();}
}

// Function for custom button

function loadCustom(){


  if (people.value === "" && bill.value === "") {
    addPeopleWarning();
    addBillWarning();
  } else if (bill.value === "") {
    addBillWarning();
  } else if (people.value === ""){
    addPeopleWarning();
  }
  else {
  const form = document.createElement('form');
  form.innerHTML = `
  <div id="customform">
  <label for="">Custom Tip (%)</label>
            <br>
            <input class="input" type="number" id="custom" placeholder="Press enter">
             </div>
             <div id="customwarn"></div>
            `
  document.getElementById("buttoncard").appendChild(form);
  custombtn.disabled = true;
  

  document.getElementById("custom").addEventListener("keydown", function(e){
      if(e.keyCode === 13){
        const custom = document.getElementById("custom");
      const tipValue =  bill.value * custom.value / 100;
      const totalValue = bill.value / people.value;
      console.log(totalValue);
      tipamount.innerHTML = `$${Math.round(tipValue)}`;
      totalamount.innerHTML = `$${Math.round(totalValue)}`
      e.preventDefault();
      
       
      
      }
      
  });

}};


// Functions for blur event

function addBillWarning(){
    bill.classList.add("form-control");
    bill.classList.add("is-invalid");
    billwarn.classList.add("invalid-feedback");
    billwarn.innerText = "Please enter a value"
};

function removeBillWarning(){
    bill.classList.remove("form-control");
    bill.classList.remove("is-invalid");
    billwarn.classList.remove("invalid-feedback");
    billwarn.innerText = ""
};

function billWarning(){
  if(bill.value === ""){
    addBillWarning();
  } else {
    removeBillWarning();
  }
};

function addPeopleWarning(){
  people.classList.add("form-control");
  people.classList.add("is-invalid");
  peoplewarn.classList.add("invalid-feedback");
  peoplewarn.innerText = "Please enter a value"
};

function removePeopleWarning(){
  
  people.classList.remove("form-control");
    people.classList.remove("is-invalid");
    peoplewarn.classList.remove("invalid-feedback");
    peoplewarn.innerText = ""
};

function peopleWarning(){
  if(people.value === ""){
    addPeopleWarning();} 
    else {
    removePeopleWarning();
  }
};

// Function for reset button

function loadReset(){
  bill.value = "";
  people.value = "";
  tipamount.innerHTML = "$";
  totalamount.innerHTML = "$";

  if(document.getElementById("custom") !== null ){
    document.getElementById("customform").remove();
    custombtn.disabled = false;
  } 
  removeBillWarning();
  removePeopleWarning();
};


