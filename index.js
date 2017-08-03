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

    function validate() {
        const data = MyForm.getData(elements)
        let isValid = true
        let errorFields = []
        for (let key in data) {
            if (key === 'fio' && !validateFio(data[key])) {
                isValid = false
                errorFields.push(key)
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
