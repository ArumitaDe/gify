var requestdata=new XMLHttpRequest();
requestdata.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
requestdata.onload=function(){
    var ourData=requestdata.responseText;
    var data=JSON.parse(requestdata.responseText);
    console.log(data[2].name);};
requestdata.send();

var arr = ['cat','dog','cheetah','crow','chicken','cow','tiger','squirrel','lion','pelican','parrot','jellyfish','shark','human','cat','dog','cheetah','crow','chicken','cow','tiger','squirrel','lion','pelican','parrot','jellyfish','shark','human'];
for(var i=0;i<arr.length;i++)
    {
        var btn = document.createElement("BUTTON"); 
        var id= 'id'+i;
         btn.setAttribute("id", id);
        // Create a <button> element
        var t = document.createTextNode(arr[i]);
        // Create a text node
        btn.appendChild(t);   
     
    
     // Append the text to <button>
        document.getElementById("section1").appendChild(btn);                    // Append <button> to <body>
      }

//btn.onclick = function(t){console.log("Yaay"+btn.t.nodeValue);if(btn.t.nodeValue=='shark') console.log("Yaay"+btn.t.nodeValue);}; 
$('#btnTest').click(function(){
    var text = document.getElementById("txtText").value;
    document.getElementById("txtText").value="";
 var btn = document.createElement("BUTTON"); 
        
        
        // Create a <button> element
        var t = document.createTextNode(text);
        // Create a text node
        btn.appendChild(t);   
    document.getElementById("section1").appendChild(btn);                    // Append <button> to <body>
});


$("#section1").click(function(event) {
    var text = $(event.target).text();
    console.log(text);
     queryURL="http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag="+text;
    // Perfoming an AJAX GET request to our queryURL
    console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

        // Saving the image_original_url property
        var imageUrl = response.data.image_original_url;
          console.log(imageUrl)
           console.log(((imageUrl).slice(0,(imageUrl.length-4)))+"_s.gif")
           var stillUrl=((imageUrl).slice(0,(imageUrl.length-4)))+"_s.gif";
        // Creating and storing an image tag
          var animalDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + response.data.rating);
          console.log("rating is " + response.data.rating);
        var Image = $("<img>");
         

        // Setting the catImage src attribute to imageUrl
          
       Image.attr("src", imageUrl);
           
          Image.attr("data-still", stillUrl);
          Image.attr("data-move", imageUrl);
        Image.attr("alt", "image");
          Image.attr("data-state","still");
           Image.attr("class", "gif");

        // Prepending the catImage to the images div
       
          // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(Image);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          
           $("#images").prepend(animalDiv);
      });
    });


    $("#images").click(function(e) {
        var className = $(e.target).src;
        
    console.log("className is: " +e.target);
        console.log(e.target);
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(e.target).attr("data-state");
        
     console.log(" state is " + state);
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(e.target).attr("src", $(e.target).attr("data-move"));
        $(e.target).attr("data-state", "move");
      } else {
        $(e.target).attr("src", $(e.target).attr("data-still"));
        $(e.target).attr("data-state", "still");
      }
    });
 