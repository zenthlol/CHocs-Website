function validateForm(e){
    let name = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phone-number").value;
    let quantity = document.getElementById("quantity").value;
    let productChoice = document.getElementById("product-choice").value;
    let theAddress = document.getElementById("address").value;
    
    if(name.length <= 3){
        alert("name length must be more than 3");
        e.preventDefault();
        return;
    }

    if(phoneNumber.startsWith("08") == false){
        alert("phone number must start with 08");
        e.preventDefault();
        return;
    }

    if(quantity.length < 1){
        alert("Please input order quantity!");
        e.preventDefault();
        return;
    }
    if(quantity == 0){
        alert("Cannot input 0!");
        e.preventDefault();
        return;
    }

    // let ageNumber = parseInt(age);
    // if(isNaN(ageNumber) == true || ageNumber <= 17){
    //     alert("Age must be more than 17");
    //     e.preventDefault();
    //     return;
    // }

    // if(isMaleChecked == false && isFemaleChecked == false){
    //     alert("Must choose gender");
    //     e.preventDefault();
    //     return;
    // }

    if(productChoice == "Choose Product"){
        alert("Please Choose Product!");
        e.preventDefault();
        return;
    }

    if(theAddress.length < 5){
        alert("The Address is too short! (Min 5 Char.)");
        e.preventDefault();
        return;
    }
    if(theAddress.length > 100){
        alert("The Address is too long! (Max 100 Char.)");
        e.preventDefault();
        return;
    }
}