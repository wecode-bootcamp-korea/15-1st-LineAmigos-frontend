export function minus = () => {
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

export function plus = () => {
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

//import {plus, minus} from ...
//이렇게 임포트햇는데 setState undefined라고 뜨네요