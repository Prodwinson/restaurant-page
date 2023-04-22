const createMenuPage = () => {
    const content = document.querySelector('#content')
    const contentPage = document.createElement('div')
    contentPage.classList.add('page-content')

    const heading = document.createElement('h1')
    heading.textContent = 'Our Menu'

    const menuItem = document.createElement('ul')
    const menuItem1 = document.createElement('li')
    menuItem1.textContent = 'Chesse Pizza'
    const menuItem2 = document.createElement('li')
    menuItem2.textContent = 'Pepperoni Pizza'
    const menuItem3 = document.createElement('li')
    menuItem3.textContent = 'Everything Pizza'

    menuItem.appendChild(menuItem1)
    menuItem.appendChild(menuItem2)
    menuItem.appendChild(menuItem3)

    contentPage.appendChild(heading)
    contentPage.appendChild(menuItem)
    content.appendChild(contentPage)
}

export default createMenuPage