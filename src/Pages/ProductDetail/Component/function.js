export function minus(count) {
    if(count>1){
    this.setState({
        count: this.state.count-1,
    })}
    else{
        this.setState({
            count: 1,
        })
    }
}

export function plus(count) {
    if(count>0){
        this.setState({
            count: this.state.count+1,
        })}
        else{
            this.setState({
                count: 1,
            })
        }
}