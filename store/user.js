export const state = () => ({
    user: {
      name: '',
      title: '',
      city: '',
      phone: '',
      about: '',
    },
    profile: {},
    signupUser: {
      name: '',
      password: '',
      email: ''
    },
    colleagues: [],
    notifications: [],
    allNotifications: [],
    activity: [],
    tasks: [],
    passwordError: false,
    archived: [],
  })
  
  export const mutations = {
    setUser(state, user) {
      if (!user) user = {}
        state.user = user
    },
    setProfile(state, profile) {
      state.profile = profile
    },
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    setActivity(state, activity) {
      state.activity = activity
    },
    setSignupUser(state, user) {
      if (user) {
        user.name = ''
        user.password = ''
        state.signupUser = user
      }
    },
  
    setUserName(state, name) {
      state.user.name = name
    },
    setUserTitle(state, title) {
      state.user.title = title
    },
    setUserCity(state, city) {
      state.user.city = city
    },
    setUserPhone(state, phone) {
      state.user.phone = phone
    },
    setUserAbout(state, about) {
      state.user.about = about
    },
    setUserType(state, type) {
      state.user.type = type
    },
    setUserEmail(state, email) {
      state.user.email = email
    },
    setPasswordError(state, passwordError) {
      state.setPasswordError = passwordError
    },
  
    setCompanyName(state, companyName) {
      state.user.company.name = companyName
    },
    setCompanyColleagues(state, colleagues) {
      state.user.company.colleagues = colleagues
    },
    setCompanyVAT(state, vat) {
      state.user.company.vat = vat
    },
    setCompanyAddress(state, address) {
      state.user.company.address = address
    },
    setCompanyCountry(state, country) {
      state.user.company.country = country
    },
    setCompanyZip(state, zip) {
      state.user.company.zip = zip
    },
    setCompanyCity(state, city) {
      if(state.user.company)
        state.user.company.city = city
      else
        state.user.company = {city}
    },
  
    setSignupUserName(state, name) {
      state.signupUser.name = name
    },
    setSignupUserEmail(state, email) {
      state.signupUser.email = email
    },
    setSignupUserPassword(state, password) {
      state.signupUser.password = password
    },
    setColleagues(state, colleagues) {
      if (colleagues)
        state.colleagues = colleagues
    },
    setNotifications(state, notifications) {
      if (notifications)
        state.notifications = notifications
    },
    setAllNotifications(state, notifications) {
      state.allNotifications = state.allNotifications.concat(notifications)
    },
    setNotificationsAsRead(state) {
      for (var i = 0; i < state.notifications.length; i++) {
        state.notifications[i].seen = 1
      }
    },
    deleteUser(state, userId) {
      state.colleagues = state.colleagues.filter(user => user.Id !== userId)
    },
    updateColleague(state, user) {
      state.colleagues[state.colleagues.findIndex(oUser => oUser.Id === user.Id)] = user
    },
    setArchived(state, users) {
      state.archived = users
    },
    setTaskStatus(state, status) {
      if(state.tasks && state.tasks.length > 0) {
        state.tasks[state.tasks.findIndex(oTask => oTask.Id === status.taskId)].status = status.status
      }
    },
  }
  
  export const actions = {
    async getProfile({commit, dispatch}, userId) {
      try {
        await this.$axios.get('users/' +userId).then((res) => commit('setProfile', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getTasks({commit, dispatch}, userId) {
      try {
        await this.$axios.get('users/' +userId+ '/tasks').then((res) => commit('project/setTasks', res.data, {root: true}))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getUserByInviteToken({commit, dispatch}, inviteToken) {
      try {
        await this.$axios.get('user/invite/' +inviteToken).then((res) => commit('setSignupUser', {invite_token: inviteToken, ...res.data}))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getColleagues({commit, dispatch}) {
      try {
        await this.$axios.get('users').then((res) => {
          commit('setColleagues', res.data)
          commit('dashboard/setTopPerformers', res.data, {root: true})
        })
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getNotifications({commit, dispatch}) {
      try {
        await this.$axios.get('user/notifications').then((res) => commit('setNotifications', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getAllNotifications({commit, dispatch}, limitFrom) {
      try {
        await this.$axios.get('user/notifications/all?limitFrom=' +limitFrom).then((res) => commit('setAllNotifications', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getWeeklyTasks({commit, dispatch}, dates) {
      try {
        await this.$axios.get('user/tasks?startDate=' +dates.startDate+ '&endDate=' +dates.endDate).then((res) => commit('setTasks', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getActivity({commit, dispatch}, userId) {
      try {
        await this.$axios.get('users/' +userId+ '/activity').then((res) => commit('setActivity', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async markNotificationsAsRead({commit, dispatch}) {
      try {
        await this.$axios.put('user/notifications').then((res) => commit('setNotificationsAsRead'))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async invite({commit, dispatch}, user) {
      try {
        await this.$axios.post('user/invite', user)
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async saveEmailLostSignup({commit, dispatch}, email) {
      try {
        await this.$axios.post('user/email', {email})
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateCompany({commit, dispatch}, user) {
      try {
        await this.$axios.put('company', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateUser({commit, dispatch}, user) {
      try {
        await this.$axios.put('user', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateNameAndRole({commit, dispatch}, user) {
      try {
        await this.$axios.put('user/role-name', user).then((res) => commit('updateColleague', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async getArchived({commit, dispatch}) {
      try {
        await this.$axios.get('user/archived').then((res) => commit('setArchived', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateEmail({commit, dispatch}, email) {
      try {
        await this.$axios.put('user/email', {email}).then((res) => commit('setUserEmail', email))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updatePassword({commit, dispatch}, user) {
      try {
        await this.$axios.put('user/password', user).then((res) => commit('setPasswordError', false))
      } catch (exception) {
        commit('setPasswordError', true)
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async signUp({commit, dispatch}, user) {
      try {
        await this.$axios.post('user', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async signIn({commit, dispatch}, user) {
      try {
        await this.$axios.post('login', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async forgot({commit, dispatch}, user) {
      try {
        await this.$axios.post('forgot', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async changeForgotPassword({commit, dispatch}, user) {
      try {
        await this.$axios.put('forgot/password', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async checkEmailCode({commit, dispatch}, emailCode) {
      try {
        await this.$axios.put('user/verify-email/' + emailCode, {}).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async createCompany({commit, dispatch}, user) {
      try {
        await this.$axios.post('company', user).then((res) => this.$auth.setUser(res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async delete({commit, dispatch}, userId) {
      try {
        await this.$axios.delete('user/' +userId).then((res) => commit('deleteUser', userId))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
  }