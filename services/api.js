import data from "../database/data"
const delay = 1500

export const getAllData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
}

export const getDataById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[id])
    }, delay)
  })
}