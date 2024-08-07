
const API_URL = "https://api.themoviedb.org/3/search/movie"
const API_KEY ="d3a9df12c09599b634d71d72ff4c23d3"
const IMG_PATH ="https://image.tmdb.org/t/p/w500"

let movieName = ""

const search = document.querySelector("#Search")
const All = document.querySelector(".All-card")

async function getApi (){
    try {
        let res = await fetch(`${API_URL}?query=${movieName}&api_key=${API_KEY}`)
        let data = await res.json()
        final =   data.results
        return data;
    } catch (error) {
     const para = document.createElement("p")
     para.style.color = "red"
     para.innerText = " Detail not found ..."
     All.prepend(para)
        
    }
}
getApi()


search.addEventListener("click" , async(e)=>{
     e.preventDefault();
     let input = document.querySelector("input").value
       movieName = input 
       
    let result = await getApi(movieName)
   let final = result.results
    showAllmovie(final)
    input = " "


})
const showAllmovie = (final)=>{
    final.forEach(element => {
        console.log(element)
        const card = document.createElement("div")
        card.classList.add("card" )
        card.innerHTML= `
          <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
         <img class="object-cover w-full  rounded-t-lg h-40
          md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="${IMG_PATH + element.poster_path}"
            alt="${element.title}"
            title="${element.title}">
         <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${element.title}</h5>
             <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">            ${element.release_date}
</p>
         </div>
     </a>`
          
    All.append(card)

    });

}


