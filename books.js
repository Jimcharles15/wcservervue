const app = Vue.createApp({
    // Create Function, data
    data(){
        return{
            showBooks: false,
            title: 'The Ledger',
            author: 'Joseph',
            year: 2008
         
        }
    },
    methods:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
}
);

books.mount('#books')