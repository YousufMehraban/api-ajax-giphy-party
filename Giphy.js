//  https://api.giphy.com/v1/gifs/random?api_key=Xi3xfHZFQjUpS0jcOFJhhrKGoNUnF7Er&q=rainbow


async function createGiphy(query){
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params:{api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', q: query}})
    console.log(res.data.data[0].images.original.url)
    const image = document.createElement('img')
    const div = document.querySelector('div')
    image.setAttribute('class', 'picture')
    image.src = res.data.data[Math.floor(Math.random()*20)].images.original.url
    div.append(image)
}

const form = document.getElementById('form')
const input = document.getElementById('input')
const searchBTN = document.getElementById('search')
const deleteBTN = document.getElementById('delete')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if(input.value){
        const query = input.value
        createGiphy(query)
        input.value = ''
    } return
})

deleteBTN.addEventListener('click', function(e){
    e.preventDefault()
    const images = document.querySelectorAll('.picture')
    for (let image of images){
        image.remove()

    }
})