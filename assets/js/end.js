

// this function runs after the complete page load and 
// it extract the data from the sessions to display the score


const results = () => {

    var jsarray = JSON.parse(sessionStorage.getItem("score"));

    const div = document.createElement("h1");

    div.textContent = jsarray;

    document.getElementById("id").appendChild(div);
}


window.onload = results;