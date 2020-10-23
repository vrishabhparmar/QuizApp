

var choices = []

const questions = document.getElementById("questions")

questions.addEventListener('click', () => {
    sendApi();
    
})

async function sendApi()
{

    let url = new URL("https://opentdb.com/api.php");

    url.searchParams.set("amount",array[0]);

    url.searchParams.set("category",array[1]);

    url.searchParams.set("difficulty",array[3]);


    url.searchParams.set("type",array[2]);

    console.log(url.href);

    console.log("Url"+array);

    
    let responce = await fetch(url);
    console.log(responce);

    let data = await responce.json();



    choices = data.results;


    var jsarray = data;
    sessionStorage.setItem("jsArray", JSON.stringify(jsarray));
    console.log(jsarray);
    
}


const createQuestion = () => {
    
    choices.forEach(question => {
        const p = document.createElement("p");

        p.innerHTML = question;

        document.body.appendChild(p);
    })
    

}









