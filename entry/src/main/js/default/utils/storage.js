import storage from '@system.storage'

const Storage = {
  getStorage(key) {
    return new Promise(resolve => {
      storage.get({
        key,
        success(data) {
          resolve(JSON.parse(data))
        },
        fail(data, code) {
          console.log('call storage.get fail, code: ' + code + ', data: ' + data);
          resolve(null)
        },
        complete() {
        }
      })
    })
  },
  setStorage(key, value) {
    return new Promise(resolve => {
      storage.set({
        key,
        value: JSON.stringify(value),
        success() {
          resolve()
        },
        fail(data, code) {
          console.log('call storage.get fail, code: ' + code + ', data: ' + data);
          resolve()
        },
        complete() {
        }
      })
    })
  },
  clearStorage() {
    return new Promise(resolve => {
      storage.clear({
        success() {
          resolve()
        },
        fail(data, code) {
          console.log('call storage.get fail, code: ' + code + ', data: ' + data);
          resolve()
        },
        complete() {
        }
      })
    })
  },
  deleteStorage(key) {
    return new Promise(resolve => {
      storage.delete({
        key,
        success() {
          resolve()
        },
        fail(data, code) {
          console.log('call storage.get fail, code: ' + code + ', data: ' + data);
          resolve()
        },
        complete() {
        }
      })
    })
  }
}

export default Storage