import React from 'react'
import Header from './companents/Header'
import Footer from './companents/Footer'
import Item from './companents/Items'
import Categories from './companents/Categories'
import ShowFullItem from './companents/ShowFullItem'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [

            ],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Chair grey',
                    img: 'chair-grey.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Table',
                    img: 'table.webp',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Sofe',
                    img: 'sofa.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                    category: 'sofa',
                    price: '459.99'
                },
                {
                    id: 4,
                    title: 'Wall light',
                    img: 'wall-light.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                    category: 'light',
                    price: '29.00'
                },
                {
                    id: 5,
                    title: 'Chair white',
                    img: 'chair-white.jpeg',
                    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
                    category: 'chairs',
                    price: '49.99'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }

        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.offShowItem = this.offShowItem.bind(this)
    }
    render(){
        return (
          <div className="wrapper">
              <Header orders={this.state.orders} onDelete={this.deleteOrder} />
              <Categories chooseCategory={this.chooseCategory}/>
              <Item onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

              {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} offShowItem={this.offShowItem} onShowItem={this.onShowItem} item={this.state.fullItem} />}
              <Footer />
          </div>
        )
    }

    offShowItem(item) {
        this.setState({showFullItem: false})
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if(category === 'all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id) isInArray = true
        })
        if(!isInArray) this.setState({orders: [...this.state.orders, item] })
    }
}

export default App