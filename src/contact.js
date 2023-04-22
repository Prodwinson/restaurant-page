const createContactPage = () => {
    const content = document.querySelector('#content')
    const contactContent = document.createElement('div')
    contactContent.classList.add('page-content')

    const form = document.createElement('form')
    form.classList.add('#contact-form')

    const headingInput = document.createElement('input')
    headingInput.type = 'text'
    headingInput.placeholder - 'Enter Heading'
    form.appendChild(headingInput)

    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.placeholder - 'Enter your number'
    form.appendChild(phoneInput)

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.placeholder - 'Enter Address'
    form.appendChild(addressInput)

    const submitButton = document.createElement('input')
    submitButton.type = 'submit'
    submitButton.value = 'Submit'
    form.appendChild(submitButton)

    contactContent.appendChild(form)
    content.appendChild(contactContent)
}

export default createContactPage