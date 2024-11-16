function saveData(){
    const name = document.getElementById("name").value;
    const age =document.getElementById("age").value;

    if(!name || !age){
        alert("All fields must be filled!")
        return;
    }

    if(parseInt(age) < 21){
        alert("Age must be 21 or older!");
        return;
    }

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    alert("Data saved successfully!");
}

function clearFields(){
    document.getElementById("name");
    document.getElementById("age")
}