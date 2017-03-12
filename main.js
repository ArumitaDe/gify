

var arr = ['cat', 'dog', 'cheetah', 'crow', 'chicken', 'cow', 'tiger', 'squirrel', 'lion', 'pelican', 'parrot', 'jellyfish', 'shark', 'human'];
for (var i = 0; i < arr.length; i++) {
    var btn = document.createElement("BUTTON");
    var id = 'id' + i;
    btn.setAttribute("id", id);
    // Create a <button> element
    var t = document.createTextNode(arr[i]);
    // Create a text node
    btn.appendChild(t);


    // Append the text to <button>
    document.getElementById("section1").appendChild(btn); // Append <button> to <body>
}

//btn.onclick = function(t){console.log("Yaay"+btn.t.nodeValue);if(btn.t.nodeValue=='shark') console.log("Yaay"+btn.t.nodeValue);}; 
$('#btnTest').click(function() {
    
    var text = document.getElementById("txtText").value;
    if(text!="")
    {
        document.getElementById("txtText").value = "";
    var btn = document.createElement("BUTTON");


    // Create a <button> element
    var t = document.createTextNode(text);
    // Create a text node
    btn.appendChild(t);
    document.getElementById("section1").appendChild(btn);}// Append <button> to <body>
});


$("#section1").click(function(event) {
    var text = $(event.target).text();
    console.log(text);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        text + "&api_key=dc6zaTOxFJmzC&limit=10";
    // Perfoming an AJAX GET request to our queryURL
    console.log(queryURL);
    $.ajax({
            url: queryURL,
            method: "GET"
        })

        // After the data from the AJAX request comes back
        .done(function(response) {

            
            console.log(response);


            
            var results = response.data;
            

            for (var i = 0; i < results.length; i++) {
                var animalDiv = $("<div >");
                var p = $("<p>").html("Rating: " + results[i].rating);
                var Image = $("<img>");
                Image.attr('src', results[i].images.fixed_width.url);
                Image.attr("data-still", results[i].images.fixed_width.url);
                Image.attr("data-move", results[i].images.fixed_width_still.url);
                Image.attr("alt", "image");
                Image.attr("data-state", "still");
                Image.attr("class", "gif");

                animalDiv.append(p);
                animalDiv.append(Image);
                $("#images").prepend(animalDiv);

                
            }


           

            // Prepending the Image to the images div

            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(p);
            animalDiv.append(Image);

            // Prependng the animalDiv to the HTML page in the "#images" div

            $("#images").prepend(animalDiv);
        });
});


$("#images").click(function(e) {
    var className = $(e.target).src;

    console.log("className is: " + e.target);
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