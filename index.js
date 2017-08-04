const MyForm = {
    validate: () => ({
        isValid: 'Boolean',
        errorFields: 'String',
    }),

    submit: () => undefined,
}

document.addEventListener('DOMContentLoaded', () => {
    const elementsName = ['fio', 'phone', 'email']
    const elements = document.forms["myForm"].elements
    const submit = document.getElementById('submitButton')

    MyForm.getData = getData
    MyForm.setData = setData
    MyForm.validate = validate

    function getData(elements) {
        const elementForm = {}
        for (let i = 0; i < elements.length; i += 1) {
            if (elements[i].name) {
                elementForm[elements[i].name] = elements[i].value
            }
        }
        return elementForm
    }

    function setData(elementForm) {
        for (let key in elementForm) {
            if (elementsName.includes(key)) {
                elements[key].value = elementForm[key]
            }
        }
        return
    }

    function validateFio(value) {
        const valueFio = value.split(' ')
        for (let i = 0; i < valueFio.length; i += 1) {
            if (valueFio[i].length === 0) {
                return false
            }
            if (i === 2) {
                return true
            }
        }
        return false
    }

    function validateEmail(value) {
        const reg = /^([A-Za-z0-9_\-\.])+\@+(?:ya.ru|yandex.ru|yandex.ua|yandex.by|yandex.kz|yandex.com)$/
        return reg.test(value)
    }

    function validatePhone(value) {
        const reg = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?[-.\s]?\d{2}[-.\s]?[-.\s]?\d{2}?$/
        const valueArray = value.match(/[0-9]/gi)
        let total = 0
        valueArray.forEach(element => total += Number(element))
        return total <= 30 && reg.test(value)
    }

    function validate() {
        const data = MyForm.getData(elements)
        let isValid = true
        let errorFields = []
        function error (key) {
            isValid = false
            errorFields.push(key)
        }
        for (let key in data) {
            if (key === 'fio' && !validateFio(data[key])) {
               error(key) 
            }
            if (key === 'email' && !validateEmail(data[key])) {
               error(key) 
            }
            if (key === 'phone' && !validatePhone(data[key])) {
               error(key) 
            }
        }
        return {
            isValid,
            errorFields
        }
    }

    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const validate = MyForm.validate()
    })

}, false)
