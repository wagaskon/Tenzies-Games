# Unit-Conversion-Extension


## Design After Completion: 

 ![design](Design.png)

### Requirements:
- It should have Ten dices to roll.
- A button for rolling the dice.
- A nice Design the follow the UI design guidelines.
- Some useful functionalities like holding dices, change the color of hold dices and Cafetti when the user win the game.

## Code
### HTML
Link: [Open HTML files in Editor](index.html)
OR
Quick Check here :point_down:
``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="main-clss">
        <div class="sub-1-clss">
            <h1 id="ttf">Metric/Imperial Unit Conversion</h1>
            <input type="text" id="txt" placeholder="0"><br>
            <button class="convert" id="btn-convt" >Convert</button>

        </div>
        <div class="sub-2-clss">
            <div class="sb22clss">
                <h3>Length (Meter/Feet)</h3>
                <p id="meter"> 0 meters = 0 feet | 0 feet = 0 meters</p>
            </div>
            <div class="sb22clss">
                <h3>Volume (Liters/Gallons)</h3>
                <p id="liter"> 0 Liters = 0 Gallons | 0 Gallons = 0 Liters</p>
            </div>
            <div class="sb22clss">
                <h3>Mass (Kilograms/Pounds)</h3>
                <p id="kilogram"> 0 Kilograms = 0 pounds| 0 pounds = 0 Kilograms</p>
            </div>
            
        </div>
    </div>
    <script src="index.js" > </script>
</body>
</html>
 ```

### CSS 
Link: [Open CSS files in Editor](style.css)
OR
Quick Check here :point_down:
```
body{
    margin: 0;
    padding: 0;
    min-width: 400px;
    text-align: center;
    font-family: 'Inter', sans-serif;
    background: url(dog.jpg); 
    background-repeat: no-repeat;
    background-size: 100%; 
}
.main-clss{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}
.sub-1-clss{
    background: #a143ff;

    width: 20rem;
    height: 13rem;
    font-family: 'Inter';
    font-style: normal;
    font-size: 0.7rem;
    color: rgb(245, 247, 122);
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 10px black;
}

input{
    background: #a143ff;
    color: #FFFFFF;
    width: 5rem;
    height: 3rem;
    font-size: 2rem;
    text-align: center;
    margin: 0.2rem;
    border: 2px solid #B295FF;
    border-radius: 0.5rem;
    box-shadow: none;
}
input:focus { 
    outline: none !important;
    box-shadow: 0 0 10px black;
}

input::placeholder{
    color: #FFFFFF;
}
button{
    width: 5rem;
    height: 2rem;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    font-size: 1.00rem;
    margin-top: 0.5rem;

}
button:active{
   box-shadow: 0px 0px 1px 3px #D8F6CE;
}
.sb22clss{
    background: rgb(123, 237, 195);
    margin-bottom: 0.5rem ;
    width: 20rem;
    height: 6.81rem;
    border-radius:none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px black;
    border-radius: 10px;
    font-size: 0.8rem;
}
h1{
    text-shadow: 0 0 5px black;
}
h3{
    margin: 0 0 0.563rem 0;
    padding: 0.563rem 0 0 0;
}
p{
    margin: 0;
    padding: 0;

}
@media only screen and (min-width: 600px) {
    body {
      background-color: rgb(123, 237, 195);
      font-size: 100%;
    }
    .sub-1-clss{
        background: #5643ff;
    
        width: 35rem;
        height: 18rem;
        font-size: 1rem;
        color: rgb(153, 247, 122);
    }
    input{
        background: #5643ff;
        width: 8rem;
        height: 6rem;
        font-size: 4rem;
    }
    button{
        width: 8rem;
        height: 3rem;
        background: #ffffff;
        font-size: 1.3rem; }
    .sb22clss{
        background: white;
        margin-bottom: 1.464rem ;
        width: 35rem;
        font-size: 1rem;
    }
  }



```

### JavaScript
Link: [Open JavaScript files in Editor](index.js)
OR
Quick Check here :point_down:
```

/* Conversion Factors
1 meter = 3.281 feet => 1feet =1/3.281 meter
1 liter = 0.264 gallon =>gallon= 1/0.264 liters
1 kilogram = 2.204 pound
*/
let magnitude=0;
console.log("mag=", magnitude)
const meter=document.getElementById("meter")
const liter=document.getElementById("liter")
const kilogram=document.getElementById("kilogram")

const buttn=document.getElementById("btn-convt")
buttn.addEventListener("click", function(){
    magnitude= Number(document.getElementById("txt").value);
    conversion(magnitude,3.281)
    conversion(magnitude,0.264)
    conversion(magnitude,2.204)
})
function conversion(mag,factor){
    let u1=0;
    let u2=0;
   //Meter and Feet
    
    u1=(mag*factor).toFixed(2);
    u2=((mag)*(1/factor)).toFixed(2);
    if(factor===3.281){
        render(u1, u2,"meter", "feet", meter); 
    }
    else if(factor===0.264){
        render(u1, u2,"Liters", "Gallons", liter); 
    }
    else{
        render(u1, u2,"Kilograms", "Pounds", kilogram); 
    }
       
}

function render(x,y,a,b,body ){
    body.innerHTML= `${magnitude} ${a} = ${x} ${b} | ${magnitude} ${b} = ${y} ${a} `;
    
}




```
### Manifest JSON
```
{
    "manifest_version": 3,
    "version": "1.0",
    "name": "Leads tracker",
    "action": {
        "default_popup": "index.html",
        "default_icon": "icon.png"
    }
}

```
## Preview after Completion: :sunglasses:
 ![Browser_Preview](preview.png)
 
## How to Add this Extension to Chrome
### Steps:
1) Download this repository
2) Open Chrome then setting and then click on extensions  or just copy paste this in search bar--> chrome://extensions/
3) Click on developer mode on
4) click on Load Unpack and choose folder that has been dowloaded.
5) Extension will be shown in extension panel.
