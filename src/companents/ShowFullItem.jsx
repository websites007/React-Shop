import React, { Children, Component } from 'react'

export default class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item' onClick={() => this.props.offShowItem()}>
        <div>
            <img src={'./image/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.desc}</p>
            <b>{this.props.item.price}$</b>
        </div>
      </div>
    )
  }
}
