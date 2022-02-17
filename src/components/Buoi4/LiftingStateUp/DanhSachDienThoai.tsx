import React, { Component } from 'react';
import ItemDienThoai from 'components/Buoi4/LiftingStateUp/ItemDienThoai';
import { PropsItemDienThoai } from './LiftingStateUp.types'
class DanhSachDienThoai extends Component<Pick<PropsItemDienThoai, 'danhSachDienThoai' | 'handleSanPhamChiTiet'>, {}> {

  renderDSDT = () => {
    return this.props.danhSachDienThoai.map((item, index) => {
      return <ItemDienThoai key={index} itemDienThoai={item} handOnClick={this.props.handleSanPhamChiTiet} />
    })
  }

  render() {

    return (
      <div className='d-flex justify-content-around mt-5'>
        {this.renderDSDT()}
      </div >
    );
  }
}

export default DanhSachDienThoai;

