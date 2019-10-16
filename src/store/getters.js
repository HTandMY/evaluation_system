export default {
    getAge(state){
        return state.students.filter((s) => {return s.age >= 18})
    },
    getAgeLength(state , getters){
        return getters.getAge.length
    }
}