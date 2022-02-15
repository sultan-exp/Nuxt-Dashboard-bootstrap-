export const state = () => ({
    tasks: [],
  })
  
  export const mutations = {
    setTasks(state, tasks) {
      state.tasks = tasks
    },
    updateTask(state, task) {
      state.tasks = [
        ...state.tasks.filter(oTask => oTask.id !== task.id),
        task
     ]
    }
  }
  
  export const actions = {
    async getTasks({commit, dispatch}, dates) {
      try {
        var startDate = dates.startDate.getFullYear() + '-' +(dates.startDate.getMonth()+1 < 10 ? '0' : '') + (dates.startDate.getMonth()+1) + '-' +(dates.startDate.getUTCDate() < 10 ? '0' : '') +dates.startDate.getUTCDate()
        var endDate = dates.endDate.getFullYear() + '-' +(dates.endDate.getMonth()+1 < 10 ? '0' : '') + (dates.endDate.getMonth()+1) + '-' +(dates.endDate.getUTCDate() < 10 ? '0' : '') +dates.endDate.getUTCDate()
        await this.$axios.get('tasks?startDate=' +startDate+ '&endDate=' +endDate).then((res) => commit('setTasks', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async update({commit, dispatch}, taskAndNewDate) {
        try {
          var task = JSON.parse(JSON.stringify(taskAndNewDate.task))
          task.date = taskAndNewDate.newDate
          await this.$axios.put('task', task).then((res) => commit('updateTask', task))
        } catch (exception) {
          console.error(exception)
          await commit('base/setError', exception, {root: true})
        }
      },
  }