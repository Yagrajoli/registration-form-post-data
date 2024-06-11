const formEl = document.querySelector(".form");
formEl.addEventListener("submit", async(event)=>{
    event.preventDefault();

    const form = new FormData(formEl);
    const data = Object.fromEntries(form);
    // console.log(data);

    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },

        body:JSON.stringify(data)
    })

    if(response.ok){
        window.location.href = "http://127.0.0.1:5500/test.html"
    }

    const result = await response.json();
    console.log(result);

   
})
