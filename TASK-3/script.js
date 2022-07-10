// // TASK - Rest Countries API

// // Header

let header = document.createElement("header");
document.body.append(header);
let heading = document.createElement("h1");
heading.innerText="Rest Countries API";
let uip = document.createElement("input");
uip.setAttribute("type","text");
uip.setAttribute("required", true);
uip.setAttribute("onkeyup", "search()");
uip.setAttribute("placeholder","Enter country name here");
document.querySelector("header").append(heading,uip);

// result section

let sect = document.createElement("section");
document.body.append(sect);


// // logic

let url = "https://restcountries.com/v3.1/all";

async function main(){
    try{
        let res = await fetch(`${url}`);
        let result = await res.json();
        console.log(result);
        for (obj of result){
            secondary(obj);
        }
    }catch(err){
        console.log(err);
    }
}

main();

function secondary(obj){
    let division = document.createElement("div");
    division.innerHTML=`
            <img src=${obj.flags.svg}>
            <p><strong>Name: </strong>${obj.name.common}</p>
            <p><strong>Capital: </strong>${obj.capital}</p>
            <p><strong>Region: </strong>${obj.region}</p>
            <p><strong>Population: </strong>${obj.population}</p>
            <p><strong>Continent: </strong>${obj.continents}</p>
        `
    document.querySelector("section").append(division);
}




// search functionality
async function search(){
    let res = await fetch(`${url}`);
    let result = await res.json();
    document.querySelector("section").innerHTML="Loading results..."
    document.querySelector("section").innerHTML=""
    console.log(result);
    for (obj of result){
        let n1 =obj.name.common;
        n1= n1.toLowerCase();
        let value = document.querySelector("input").value;
        value = value.toLowerCase();
        if(n1.includes(value)){
            console.log(n1, value);
            secondary(obj);
        }
    }
}

