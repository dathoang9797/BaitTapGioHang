import React, { Component } from 'react';
import { PropsItemDienThoai } from "./LiftingStateUp.types"
class SanPhamChiTiet extends Component<Pick<PropsItemDienThoai, 'sanPhamChiTiet'>, {}> {

    render() {
        const { hinhAnh, tenSP, giaBan, heDieuHanh } = this.props.sanPhamChiTiet
        return (
            <div className='row w-50 mt-5' style={{ margin: "0 auto" }}>
                <div className="col-5">
                    <img src={hinhAnh} alt="" className='img-fluid' style={{ width: 300, height: 200 }} /></div>
                <div className="col-7">
                    <p>Hệ điều hành : {heDieuHanh}</p>
                    <p>Tên Điện Thoại: {tenSP}</p>
                    <p>Giá Bán: {giaBan}</p>
                </div>
            </div>
        );
    }
}

export default SanPhamChiTiet;