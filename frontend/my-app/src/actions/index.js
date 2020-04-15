import get from "./get";
import post from "./post";
import put from "./put";

export const doLogin = (
  payload = {
    username: "ssy",
    password: "123456"
  }
) => {
  return post("/user/login", payload)
};

export const signin = (payload) => {
    return post('/user/user', payload)
}

export const addTask = (payload) => {
  return post('/task/task', payload)
}

export const getTask = (payload) => {
  return get('/task/list', payload, payload)
}

export const reTaskName = (taskId,payload) =>{
  return post(`/task/${taskId}/name`,payload)
}

export const finishTask = (taskId, payload) => {
  return put(`/task/${taskId}/finish`, payload)
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

//step
export const addStep = (taskId,payload) => {
  return post(`/step/${taskId}/step`,payload)
}

export const getStep = (payload) => {
  return get('/step/list',payload)
}

export const finishStep = (stepId, payload) => {
  return put(`/step/${stepId}/finish`, payload)
}

export const cancelStep = (stepId, payload) => {
  return put(`/step/${stepId}/cancel`, payload)
}

export const reStepName = (stepId,payload) =>{
  return post(`/step/${stepId}/name`,payload)
}