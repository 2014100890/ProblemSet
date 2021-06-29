class postLoader {
  constructor(token) {
    this.token = token
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
  }

  async getNewItems(pageNumber) {
    try {
      const response = await fetch(
        `https://recruit-api.yonple.com/recruit/${this.token}/a-posts?page=${pageNumber}.json`,
        this.getRequestOptions
      )
      return await response.json()
    } catch (error) {
      return console.log('error', error)
    }
  }

  async search(query) {
    try {
      const response = await fetch(
        `https://recruit-api.yonple.com/recruit/${this.token}/a-posts?search=${query}`,
        this.getRequestOptions
      )
      return await response.json()
    } catch (error) {
      return console.log('error', error)
    }
  }

  async getDetail(id) {
    try {
      const response = await fetch(
        `https://recruit-api.yonple.com/recruit/${this.token}/a-posts/${id}`,
        this.getRequestOptions
      )
      return await response.json()
    } catch (error) {
      return console.log('error', error)
    }
  }
}

export default postLoader
