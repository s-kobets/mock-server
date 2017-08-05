const validateFio = (value) => {
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

const validateEmail = (value) => {
    const reg = /^([A-Za-z0-9_\-\.])+\@+(?:ya.ru|yandex.ru|yandex.ua|yandex.by|yandex.kz|yandex.com)$/
    return reg.test(value)
}

const validatePhone = (value) => {
    const reg = /^\+?\d.\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?[-.\s]?\d{2}[-.\s]?[-.\s]?\d{2}?$/
    const valueArray = value.match(/[0-9]/gi)
    let total = 0
    valueArray.forEach(element => total += Number(element))
    return total <= 30 && reg.test(value)
}

export default {
    validateFio,
    validateEmail,
    validatePhone
}
