export default {
    add(state){
        state.counter++
    },
    min(state){
        state.counter--
    },
    add_num(state , num){
        state.counter += Number(num)
    },
    min_num(state , num){
        state.counter -= Number(num)
    },
    save(state){
        localStorage.setItem("test", state.counter);
    },
    readLocal(state){
        state.counter = localStorage.test
    }
}