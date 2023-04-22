const creatRestaurantHomePage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const image = document.createElement('img')
    image.src = 'http://www.restaurantnewsrelease.com/wp-content/uploads/2020/12/Marcos-Pizza-Expands-Texas-Footprint-with-20-Store-Franchise-Development-Agreement.jpg'
    image.height = '300'
    pageContent.appendChild(image)

    const heading = document.createElement('h1')
    heading.textContent = 'Pizza'
    pageContent.appendChild(heading)

    const copy = document.createElement('p')
    copy.textContent = 'Best pizza in the city'
    pageContent.appendChild(copy)
    content.appendChild(pageContent)
}

export default creatRestaurantHomePage
