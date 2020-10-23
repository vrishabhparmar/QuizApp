

// array for storing all the options user selected
var array = [];


// amount is the number of question for the quiz;
const amount = document.getElementById("amount");

var counter = 0;
amount.addEventListener("change", (e) => {

    
    
    // if(counter > 1){ counter = 0; document.getElementById("myDiv1").remove()} 

    console.log(e.target.value);
    array[0] = e.target.value;
    if(counter == 0)
    {
        
        categoryControllerFunction();
        ++counter;
    }
    else
    {
        return;
    }



    
});

// creating category option droppdown
const categoryControllerFunction = () => {


    var div1 = document.createElement("div");
    div1.id = "myDiv1";
   document.getElementById("container").appendChild(div1);



    var select1 = document.createElement("select");
    select1.id = "mySelect1";
    select1.className ="options";
    div1.append(select1);


    
    var option1 = document.createElement("option");
    option1.value = "Category";
   
    option1.textContent ="Select Category";
    select1.append(option1);


    category.forEach(element => {
        
        var option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        select1.append(option);

    });

    let counter1 = 0;
    if(select1 != null)
    {
        select1.addEventListener("change", (e) => {
            if(e.target.value != "")
            {
                console.log(e.target.value);
                
                array[1] = options[e.target.value].number;
                
                if(counter1 == 0)
                {
                    createAnotherOption(e.target.value);
                    
                    ++counter1;
                }
                console.log(array);



            }
        

    });}

//obtaining the handle for select node in the body
// array for storing and creating options node
var arr = [];
createAnotherOption = (value) => {


    console.log(value);

   
    arr = options[value];

    var typeArr = arr.type;



    console.log(arr);

    const div1 = document.createElement("div");
    div1.id = "myDiv2";
    div1.className = "divOptions";
    document.getElementById("container").appendChild(div1);


    const select1 = document.createElement("select");
    select1.id = "mySelect1";
    select1.className ="options";
    div1.append(select1);

    


    const option1 = document.createElement("option");
    option1.value = "Select type";
    option1.textContent ="Select type";
    select1.append(option1);


    typeArr.forEach(element => {
        
        var option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        select1.append(option);

    });
  

    let counter2 = 0;
   if(select1 != null)
   {
    select1.addEventListener("change", (e) => {
    if(e.target.value != "")
    {
        console.log(e.target.value);
        array[2] = e.target.value;
        console.log(array);
        
        if(counter2 == 0)
        {
            createAnotherOption2( e.target.value);
                    
            ++counter2;
        }
       
        
    }});
    }
}

// Function to create new Node
   createAnotherOption2 = (value) => {


    
    var diffArr = arr[value];


    const div1 = document.createElement("div");
    div1.id = "myDiv3";
    document.getElementById("container").appendChild(div1);


    const select1 = document.createElement("select");
    select1.id = "mySelect1";
    select1.className ="options";
    div1.append(select1);

    const option1 = document.createElement("option");
    option1.value = "Select difficulty";
    option1.textContent = "Select difficulty";
    select1.append(option1);

    diffArr.forEach(element => {
        
        var option = document.createElement("option");
        option.value = element;
        option.textContent = element;
        select1.append(option);

    });
   

   if(select1 != null)
   {
    select1.addEventListener("change", (e) => {
    if(e.target.value != "")
    {
        console.log(e.target.value);
        array[3] = e.target.value;
        console.log(array);
       
        
    }});

   }
   

}

    // Eventlistener to display and build the Selection Node  
    const button = document.getElementById("button");
   if(button != null)
   {
        button.addEventListener("click", () => {

        let category;
        if( array[1] == "9") category = "General Knowledge";
        if( array[1] == "18") category = "Computer";
        if( array[1] == "23") category = "History";
        

      
        const heading1 = document.createElement("h1");
        heading1.innerText = "Number of Questions: "+ array[0];
        
        document.getElementById("form").appendChild(heading1);

        const heading2 = document.createElement("h1");
        heading2.innerText = "Category: "+ category; 
        document.getElementById("form").appendChild(heading2);

        const heading3 = document.createElement("h1");
        heading3.innerText = "Type: "+ array[2];
        document.getElementById("form").appendChild(heading3);

        const heading4 = document.createElement("h1");
        heading4.innerText = "Difficulty: "+ array[3];

        document.getElementById("form").appendChild(heading4);

        // alert("Number of Questions: "+array[0]+"\n Category: "+array[1]+" \n Type: "+ array[2]+" \n"
        // + "Difficulty: " + array[3]);

    });
   }

   const resetController = document.getElementById("reset");

   if(resetController != null){
       
    resetController.addEventListener("click", () => {
        location.reload();

    this.array = [];

      
   })}



}
