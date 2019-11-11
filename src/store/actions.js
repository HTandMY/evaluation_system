export default {
    upDataNum(context , text){
        return new Promise((resolve , reject) => {
            setTimeout(() => {
            //必须通过这个调用commit
            context.commit("add");
            console.log(text);
            resolve("success!")
            },1000)
        })
    }
}