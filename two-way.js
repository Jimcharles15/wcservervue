const TwoWayBinding = {
    data(){
        return {
            message: 'Hello Vue!'
        }
    }
}

VueElement.CreateApp(TwoWayBinding).mount(' #two-way-binding')