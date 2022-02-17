import React, { Component } from 'react';
import DanhSachDienThoai from 'components/Buoi4/LiftingStateUp/DanhSachDienThoai';
import SanPhamChiTiet from 'components/Buoi4/LiftingStateUp/SanPhamChiTiet';
import DSDienThoai from 'Data/DSDT.json';
class index extends Component {
    state = {
        DSDienThoai,
        sanPhamChiTiet: DSDienThoai[0]
    }

    handleSanPhamChiTiet = (sanPham: typeof this.state.sanPhamChiTiet) => {
        console.log(sanPham);
        this.setState({ sanPhamChiTiet: sanPham  })
    }

    render() {
        return (
            <>
                <DanhSachDienThoai danhSachDienThoai={this.state.DSDienThoai} handleSanPhamChiTiet={this.handleSanPhamChiTiet} />
                <SanPhamChiTiet sanPhamChiTiet={this.state.sanPhamChiTiet} />
            </>
        );
    }
}

export default index;