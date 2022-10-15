import React from 'react'
import ProductCategoryRow from './ProductCategoryRow/productCategoryRow'
import ProductRow from './ProductRow/productRow'

class ProductTable extends React.Component {
    render(){
        const filterText = this.props.filterText
        const inStockOnly = this.props.inStockOnly 
        const rows = []
        let lastCategory = null

        this.props.data.forEach( (item) => {
            if(item.name.indexOf(filterText) === -1) return

            if(inStockOnly && !item.stocked) return

            if(item.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow key={item.category} category={item.category} />
                )
            }
            rows.push(
                <ProductRow key={item.name} item={item} />
            )
            lastCategory = item.category
        })


        return <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    }
}

export default ProductTable