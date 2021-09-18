$(".submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newStore = {
        storeName: $("#storeName").val().trim(),
        storeDescription: $("#storeDescription").val().trim()
    };

    fetch('/api/stores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStore),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data);

            if (data) {
                alert("It's Going Down! ... Store Added");
            }
            // Clear the form when submitting

            $("#storeName").val("");
            $("#storeDescription").val("");


            window.location.replace("/home");

        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });


});
