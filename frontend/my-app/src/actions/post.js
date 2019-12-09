import config from '../config'

export default (path, body = {}) => {
    return fetch(
        `${config.domain}${path}`,
        {
            method: 'POST',
            mode: 'cors',
            body
        }
    )
}