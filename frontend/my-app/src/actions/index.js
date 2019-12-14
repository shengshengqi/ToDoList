import get from "./get";
import post from "./post";
import put from "./put";

export const doLogin = (
  payload = {
    username: "sqy",
    password: "123456"
  }
) => {
  return post("/account/login", payload)
};

export const signin = (payload) => {
    return post('/account/user', payload)
}

export const addTask = (payload) => {
  return post('/task/task', payload)
}

export const getTask = (payload) => {
  return get('/task/list', payload, payload)
}

export const confirmTask = (taskId, payload) => {
  return put(`/task/${taskId}/confirm`, payload)
}

export const cancelTask = (taskId, payload) => {
  return put(`/task/${taskId}/cancel`, payload)
}

export const starTask = (taskId, payload) => {
  return post(`/task/${taskId}/importance`, payload)
}

export const unStarTask = (taskId, payload) => {
  return post(`/task/${taskId}/unImportance`, payload)
}