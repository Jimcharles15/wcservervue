const app = Vue.createApp({
    // Create Function, data
    data(){
        return{
            title:'The Ledger',
            author: 'Joseph',
            age: 34
        }
    }
}
);

app.mount('#app')