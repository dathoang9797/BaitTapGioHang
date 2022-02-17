import React, { Component } from 'react'
import DSPhones from 'Data/DSDienThoai.json'



type ItemPhone = {
  itemPhone: {
    url: string,
    price: string,
    name: string,
  }

}

type DanhSachPhone = {
  data: {
    url: string,
    price: string,
    name: string,
  }[]
}

class ItemDt extends Component<ItemPhone, {}>{
  render() {
    const { name, price, url } = this.props.itemPhone
    return (
      <div >
        <img src={url} />
        <p>ten dt :{name}</p>
        <p>gia tien : {price}</p>
      </div >
    )
  }
}


class RenderWithMap extends Component<{}, DanhSachPhone>{
  state = {
    data: DSPhones
  }
  renderData = () => {
    return this.state.data.map((item) => {
      return <ItemDt itemPhone={item} />
    })
  }

  render() {
    console.log(require.resolve('../../assets//images'));
    return (
      <div>{this.renderData()}</div>
    )
  }
}

export default RenderWithMap