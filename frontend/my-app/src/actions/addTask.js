import post from './post'
export default (payload) => {
    post('/task/task', payload)
}