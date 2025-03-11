// let a = "Hello World!!"
// console.log(a)

// let products = ["Milk", "Nutter", "Egg"];

// let students = [];
// let courses = new Array();

// let preferences = new Array("Sport", 45, 24.65, true);
// preferences[3] = "Musics";

// preferences.push("Jason");

// console.log(preferences);
// console.log(preferences.length);

// console.log(preferences[0]);
// console.log(preferences[1] + preferences[3]);


// let total = 30.25;
// if (total > 30) {
//     console.log(true);
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let i = 0, j = 5; i < 5; i++, j--) {
//     console.log(i + " " + j);
// }

//var is global
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);


// const preferences = new Array("Sport", 45, 24.65, true);
// console.log("for");
// for (let i in preferences) {
//     console.log(preferences[i]);
// }

// console.log("for of");
// for (let i of preferences) {
//     console.log(i);
// }

// var weight = 60;
// var height = 180;

// bmiCalculation();

// function bmiCalculation()
// {
//     let bmi = weight / ((height / 100) * (height / 100));
//     console.log(bmi);
// }

// bmiCalculation(50, 156);

// function bmiCalculation(weight, height)
// {
//     let bmi = weight / ((height / 100) * (height / 100));
//     console.log(bmi);
// }

// var weight = 60;
// var height = 180;

// let mybmi = bmiCalculation();
// console.log(mybmi);

// function bmiCalculation()
// {
//     let bmi = weight / ((height / 100) * (height / 100));
//     return bmi;
// }

// let mybmi = bmiCalculation(50, 156);
// console.log(mybmi);

// function bmiCalculation(weight, height)
// {
//     let bmi = weight / ((height / 100) * (height / 100));
//     return bmi;
// }

// let prices = [45.53, 199, 1850.50];
// prices.forEach(netPrice);

// function netPrice(price)
// {
//     let afterVat = price * 1.08;
//     console.log(afterVat);
// }


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking</title>
    <link rel="stylesheet" href="style.css">

    <script>
        function Check() 
        {
            let name = document.getElementById("iName");
            if (name.value.length == 0) {
                alert("กรุณากรอกชื่อ");
                return;
            }

            let tel = document.getElementById("iTel");
            if (tel.value.length == 0) {
                alert("กรุณากรอกเบอร์โทรศัพท์");
                return;
            }

            
        }
    </script>
</head>
<body>
    <div class="container02">
        <h1 class="head">Please put your information</h1>

        <div class="booking">
            <form action="#">
                <label for="name">Name</label>
                <input type="text" name="name" id="iName">
                <br>

                <label for="tel">Telephone</label>
                <input type="tel" name="tel" id="iTel">
                <br>

                <label for="travelers">Telephone</label>
                <input type="travelers" name="travelers" id="iTravelers">
                <br>
            </form>
        </div>

        <a>
            <button type="button" class="button1" onclick="Check()">Submit</button>
        </a>

        <h3 class="name02">Pasit Bunsophon / 6733167521</h3>
    </div>
</body>
</html>
