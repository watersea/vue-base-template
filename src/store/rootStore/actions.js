const actions = {
  getList (context) {
    context.commit('GETLIST', {
      title: 'ceshi',
      age: 18
    })
  }
}
export default actions
