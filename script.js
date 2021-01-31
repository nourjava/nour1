async function get(){
    const respons = await fetch ("https://www.breakingbadapi.com/api/characters/1");
    const data = await respons.json()
    console.log(data);

    document.querySelector("#content").innerHTML = data[0].name
    document.querySelector("#image").src = data[0].img


}
get()