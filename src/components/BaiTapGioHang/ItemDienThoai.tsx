import React, { Component } from 'react'
import { ItemDt } from './BaiTapGioHang.types'

type PropsItemsDienThoai = {
    itemDienThoai: ItemDt,
    handOnClick: (itemDt: ItemDt) => void,
    handleThemGioHang: (sanPham: ItemDt) => void;
}

export default class ItemDienThoai extends Component<PropsItemsDienThoai, {}> {
    render() {
        const { handOnClick, handleThemGioHang, itemDienThoai } = this.props;
        console.log("🚀 ~ file: ItemDienThoai.tsx ~ line 13 ~ ItemDienThoai ~ render ~ handOnClick", handOnClick)
        return (
            <div className="card " style={{ width: '18rem' }}>
                <img className="card-img-top" src={itemDienThoai.hinhAnh} alt={itemDienThoai.hinhAnh} style={{ width: 300, height: 200 }} />
                <div className="card-body">
                    <h5 className="card-title">{itemDienThoai.tenSP}</h5>
                    <button className='btn btn-primary mb-2' onClick={() => {
                        handOnClick(itemDienThoai)
                    }}>Xem Chi Tiết
                    </button>
                    <button className='btn btn-success' onClick={() => {
                        handleThemGioHang(itemDienThoai)
                    }}>Thêm Giỏ Hàng</button>
                </div>
            </div>

        )
    }
}
