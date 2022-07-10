// TASK-1



// Async function to make the fetch call

async function arun(offset){
    try{
        let data = await fetch(`https://breakingbadapi.com/api/characters`);
        let res = await data.json();
        document.querySelector(".allchar").innerHTML="";
        res.map((obj) => run(obj));
    }catch(err){
        console.log(err)
    }
}

arun(0);



// Function that runs everytime we loop through the result of fetch. It creates the char container for every single character

function run(obj){
    document.querySelector(".allchar").innerHTML+=`
    <div class="char">
        <img class="imgsrc" src=${obj.img} alt=${obj.name}>
        <div class="charinfo">
            <p><strong>Char_id:  </strong>${obj.char_id}</p>
            <p><strong>Name:  </strong>${obj.name}</p>
            <p><strong>Birthday:  </strong>${obj.birthday}</p>
            <p><strong>Occupation:  </strong>
                <li>${obj.occupation[0]}</li>
                <li>${obj.occupation[1]}</li>
            </p>
            <p><strong>Status:  </strong>${obj.status}</p>
            <p><strong>Nickname:  </strong>${obj.nickname}</p>
            <p><strong>Portrayed:  </strong>${obj.portrayed}</p>
        </div>
    </div>
`
}



// Search Functionality

async function sear(){
    document.querySelector(".allchar").innerHTML="";
    let n = document.querySelector("input").value.toLowerCase();
    console.log(n);
    let data = await fetch('https://breakingbadapi.com/api/characters');
    let res = await data.json();
    // console.log(res);
    // res.filter((ele) => ele.name.includes(n)).map((obj) => run(obj));
    for(obj of res){
        let n1=obj.name;
        n1=n1.toLowerCase()
        if(n1.includes(n)){
            console.log(n1);
            run(obj);
        }
    }
}