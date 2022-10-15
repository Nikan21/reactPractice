import React from 'react'

class ProductCategoryRow extends React.Component {
    render(){
        const category = this.props.category
        return <tr>
            <td colSpan="2">{category}</td>
        </tr>
    }
}

export default ProductCategoryRow