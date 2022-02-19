import React, { Component } from 'react';
import ItemDienThoai from 'components/BaiTapGioHang/ItemDienThoai';
import { ItemDt } from './BaiTapGioHang.types'

type PropsDanhSachDienThoai = {
  handleSanPhamChiTiet: (sanPham: ItemDt) => void,
  handleThemGioHang: (sanPham: ItemDt) => void;
  danhSachDienThoai: ItemDt[];
}

class DanhSachDienThoai extends Component<PropsDanhSachDienThoai, {}> {

  renderDSDT = () => {
    const { handleSanPhamChiTiet, handleThemGioHang, danhSachDienThoai } = this.props;
    return danhSachDienThoai.map((item, index) => {
      return <ItemDienThoai key={index} itemDienThoai={item} handOnClick={handleSanPhamChiTiet} handleThemGioHang={handleThemGioHang} />
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

