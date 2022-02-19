import React, { Component } from 'react';
import DanhSachDienThoai from 'components/BaiTapGioHang/DanhSachDienThoai';
import SanPhamChiTiet from 'components/BaiTapGioHang/SanPhamChiTiet';
import ModalGioHang from 'components/BaiTapGioHang/ModalGioHang';
import DSDienThoai from 'Data/DSDT.json';
import { ItemDt } from "./BaiTapGioHang.types"

type StateBaiTapGioHang = {
    DSDienThoai: ItemDt[];
    sanPhamChiTiet: ItemDt;
    gioHang: Array<ItemDt & { soLuong: number }>;
}

class BaiTapGioHang extends Component<{}, StateBaiTapGioHang> {
    state: StateBaiTapGioHang = {
        DSDienThoai,
        sanPhamChiTiet: DSDienThoai[0],
        gioHang: [],
    }

    handleSanPhamChiTiet = (sanPham: ItemDt) => {
        this.setState({ sanPhamChiTiet: sanPham })
    }

    handleThemGioHang = (sanPham: ItemDt) => {
        const cloneGioHang = [...this.state.gioHang];
        const sanPhamGioHang = cloneGioHang.find(sp => sp.maSP === sanPham.maSP);
        if (!sanPhamGioHang) {
            cloneGioHang.push({ ...sanPham, soLuong: 1 })
            this.setState({ gioHang: cloneGioHang })
        } else {
            sanPhamGioHang.soLuong += 1;
            this.setState({ gioHang: cloneGioHang })
        }
    }

    handleThayDoiSoLuong = (maSP: ItemDt['maSP'], type: ItemDt['type']) => {
        const cloneGioHang = [...this.state.gioHang];
        const sanPhamGioHang = cloneGioHang.find(sp => sp.maSP === maSP);
        if (sanPhamGioHang && type === 1) {
            sanPhamGioHang.soLuong++;
            return this.setState({ gioHang: cloneGioHang })
        }

        if (sanPhamGioHang && type === -1) {
            if (sanPhamGioHang.soLuong === 1) {
                sanPhamGioHang.soLuong++;
                cloneGioHang.splice(cloneGioHang.indexOf(sanPhamGioHang), 1);
                return this.setState({ gioHang: cloneGioHang })
            } else {
                sanPhamGioHang.soLuong--;
                return this.setState({ gioHang: cloneGioHang })
            }
        }
    }

    render() {
        return (
            <>
                <div className="p-5 text-center">
                    <ModalGioHang
                        dataGioHang={this.state.gioHang}
                        handleThayDoiSoLuong={this.handleThayDoiSoLuong} />

                    <DanhSachDienThoai
                        danhSachDienThoai={this.state.DSDienThoai}
                        handleSanPhamChiTiet={this.handleSanPhamChiTiet}
                        handleThemGioHang={this.handleThemGioHang} />

                    <SanPhamChiTiet sanPhamChiTiet={this.state.sanPhamChiTiet} />
                </div>
            </>
        );
    }
}

export default BaiTapGioHang;