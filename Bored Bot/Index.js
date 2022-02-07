

    document.getElementById("Bored-Button").addEventListener("click", function(){
        fetch("http://www.boredapi.com/api/activity/")
    .then(res => res.json())
    .then(data => {
        
        document.getElementById("boredApi").innerHTML = `
        <h2>${data.activity}</h2>
        `
    })
    })