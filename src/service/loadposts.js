class postLoader {
  constructor(token) {
    this.token = token
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    }
    this.activeTab = 'a-posts'
  }

  changeTab(index) {
    if (index === 'a') {
      this.activeTab = 'a-posts'
    } else {
      this.activeTab = 'b-posts'
    }
  }

  async getNewItems(pageNumber) {
    try {
      const response = await fetch(
        `https://recruit-api.yonple.com/recruit/${this.token}/${this.activeTab}?page=${pageNumber}.json`,
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
        `https://recruit-api.yonple.com/recruit/${this.token}/${this.activeTab}?search=${query}`,
        this.getRequestOptions
      )
      return await response.json()
    } catch (error) {
      return console.log('error', error)
    }
  }

  async getDetail(tab, id) {
    tab = tab + '-posts'
    console.log(this.activeTab)

    this.changeTab(tab)
    console.log(this.activeTab)

    try {
      const response = await fetch(
        `https://recruit-api.yonple.com/recruit/${this.token}/${tab}/${id}`,
        this.getRequestOptions
      )
      return await response.json()
    } catch (error) {
      return console.log('error', error)
    }
  }
}

export default postLoader
