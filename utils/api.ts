import axios from 'axios'

const API_URL = '/api'

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`)
  return response.data
}

export const createTask = async (task: Omit<Task, 'id'>) => {
  const response = await axios.post(`${API_URL}/tasks`, task)
  return response.data
}

export const updateTask = async (id: string, task: Partial<Task>) => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, task)
  return response.data
}

export const deleteTask = async (id: string) => {
  await axios.delete(`${API_URL}/tasks/${id}`)
}

// Ensure that the token is included in all requests
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)