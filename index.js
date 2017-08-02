const MyForm = {
    validate: () => ({
        isValid: 'Boolean',
        errorFields: 'String',
    }),

    setData: (Object) => undefined,

    submit: () => undefined,
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.forms["myForm"].elements
    MyForm.getData = getData

    function getData(elements) {
        const elementForm = {}
        for (i = 0; i < elements.length; i += 1) {
            if (elements[i].name) {
                elementForm[elements[i].name] = elements[i].value
            }
        }
        return elementForm
    }

    MyForm.getData(elements)

}, false)
