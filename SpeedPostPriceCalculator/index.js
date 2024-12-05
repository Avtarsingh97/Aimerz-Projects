// Input Required to execute Calculation
        // Distance in KM
        // Weight in gram



// Function to calculate Total Price for Speed Post
let totalPrice = 0;
function priceCalculate(dist,weight){
    if(dist <= 0 || weight <= 0){alert("Invalid Input"); return 0;}
    // Calculation for Distance <= 50
    if(dist <= 50){
        if(weight <= 50){totalPrice = 15;}
        else if(weight <= 200){totalPrice = 25;}
        else if(weight <= 500){totalPrice = 30;}
        else{totalPrice = 30 + (10 * ((weight - 500) / 500));}
    }

    // Calculation for Distance <= 200
    if(dist > 50 &&dist <= 200){
        if(weight <= 50){totalPrice = 35;}
        else if(weight <= 200){totalPrice = 35;}
        else if(weight <= 500){totalPrice = 50;}
        else{totalPrice = 50 + (15 * ((weight - 500) / 500));}
    }


    // Calculation for Distance <= 1000
    if(dist > 200 && dist <= 1000){
        if(weight <= 50){totalPrice = 35;}
        else if(weight <= 200){totalPrice = 40;}
        else if(weight <= 500){totalPrice = 60;}
        else{totalPrice = 60 + (30 * ((weight - 500) / 500));}
    }

    // Calculation for Distance <= 2000
    if(dist > 1000 && dist <= 2000){
        if(weight <= 50){totalPrice = 35;}
        else if(weight <= 200){totalPrice = 60;}
        else if(weight <= 500){totalPrice = 80;}
        else{totalPrice = 80 + (40 * ((weight - 500) / 500));}
    }


    // Calculation for Distance > 2000
    if(dist > 2000){
        if(weight <= 50){totalPrice = 35;}
        else if(weight <= 200){totalPrice = 70;}
        else if(weight <= 500){totalPrice = 90;}
        else{totalPrice = 90 + (50 * ((weight - 500) / 500));}
    }
    console.log(dist, weight);
    return totalPrice;
}



// run function onclicking calculate button on html form
document.getElementById("calculate").addEventListener("click", function() {
    // Fetch Input Data from HTML Form input
    const distance = Number(document.getElementById('distance').value);
    const weight = Number(document.getElementById('weight').value);

    // Calculate total price
    const finalPrice = priceCalculate(distance, weight);

    // Return totalPrice to HTML input element
    document.getElementById("finalPrice").value = finalPrice;
});