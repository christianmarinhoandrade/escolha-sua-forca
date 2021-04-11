import api from '~/services/api'

const services = {
    getLuke() {
        return api.get(`${1}`)
    },
    getDarth() {
        return api.get(`${4}`)
    },
}

export default services
