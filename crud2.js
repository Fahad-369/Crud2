
// Validate form inputs
function validateForm() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }
    if (age == "") {
        alert("Age is required");
        return false;
    } else if (age < 1) {
        alert("Age must be greater than 0");
        return false;
    }

    if (address == "") {
        alert("Address is required");
        return false;
    }

    if (email == "") {
        alert("Email is required");
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }

    return true;
}

function showData() {

    var peopleList;
     if(localStorage.getItem("peopleList" == null)){
        peopleList = [];

     }
     else{
        peopleList =JSON.parse(localStorage.getItem("peopleList"))
     }

    let html = "";
    peopleList.forEach(function (element, index) {
        html += `<tr>
                    <td>${element.name}</td>
                    <td>${element.age}</td>
                    <td>${element.address}</td>
                    <td>${element.email}</td>
                    <td>
                    <button onclick="updateData(${index})" class="btn btn-warning m-2">Edit</button>
                        <button onclick="deleteData(${index})" class="btn btn-danger">Delete</button>
                        
                    </td>
                 </tr>`;
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}
document.onload =showData();
// Add data to peopleList
function AddData() {
    if (validateForm()==true) {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;

        
        let peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList = [];
    
         }
         else{
            peopleList =JSON.parse(localStorage.getItem("peopleList"))
         }

        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email
        });
        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        // savePeopleList(peopleList);
        showData();

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
        alert("Data added successfully!");
    }
}


// for delete data

function deleteData(index){
    let peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = [];

     }
     else{
        peopleList =JSON.parse(localStorage.getItem("peopleList"))
     }
  peopleList.splice(index,1)
  localStorage.setItem("peopleList", JSON.stringify(peopleList))
showData()
    
}


function updateData(index){

// submit button will hide and update show
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";
    let peopleList;
    if(localStorage.getItem("peopleList" == null)){
        peopleList = [];

     }
     else{
        peopleList =JSON.parse(localStorage.getItem("peopleList"))
     }
     
     document.getElementById("name").value =     peopleList[index].name
     document.getElementById("age").value =      peopleList[index].age
     document.getElementById("address").value =  peopleList[index].address
     document.getElementById("email").value =    peopleList[index].email

     document.querySelector("#Update").onclick = function (){
        if(validateForm() == true){
         
         peopleList[index].name   =     document.getElementById("name").value                                          
         peopleList[index].age     =   document.getElementById("age").value
         peopleList[index].address  =   document.getElementById("address").value   
         peopleList[index].email  =    document.getElementById("email").value
         
         localStorage.setItem("peopleList", JSON.stringify(peopleList));
         showData();

         document.getElementById("name").value   = ""; 
         document.getElementById("age").value     = "";
          document.getElementById("address").value = "";
         document.getElementById("email").value     = "";
            

         // update button hide and submit show
         document.getElementById("Submit").style.display = "none";
         document.getElementById("Update").style.display = "block";
         document.getElementById("Submit").style.display = "block"
         document.getElementById("Update").style.display = "none"
        }
     }
}



// Run showData on window load
// window.onload = showData;
