import React, { Component } from 'react';

class ProductList extends Component {
    constructor(){
        super();
        this.state={
            data: [],
        }
    }

  
    componentDidMount = () => {
        fetch('http://10.168.1.149:8000/product/products_info')
          .then((response) => response.json())
          .then((response) => {
            this.setState({
              data: response.PRODUCTS,
            })
          })
        }
    
    render() {
        const {data} = this.state;
        console.log(this.state.data)
        return (
            <ul>
                {data&&
                    data.map(el=>{
                        return(
                            <li>
                                <img key={el.product_id} alt="testImg" src={el.product_image} onClick={()=>this.props.history.push(`/productdetail/${+el.product_id}`)}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default ProductList;