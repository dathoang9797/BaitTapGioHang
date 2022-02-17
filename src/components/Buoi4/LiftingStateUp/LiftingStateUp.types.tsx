

export type PropsItemDienThoai = {
    handleSanPhamChiTiet: (arr: any) => void,
    handOnClick: (arr: PropsItemDienThoai['sanPhamChiTiet']) => void,
    danhSachDienThoai: {
        maSP: number,
        tenSP: string,
        manHinh: string,
        heDieuHanh: string,
        cameraSau: string,
        cameraTruoc: string,
        ram: string,
        rom: string,
        giaBan: number,
        hinhAnh: string
    }[]
    itemDienThoai: {
        maSP: number,
        tenSP: string,
        manHinh: string,
        heDieuHanh: string,
        cameraSau: string,
        cameraTruoc: string,
        ram: string,
        rom: string,
        giaBan: number,
        hinhAnh: string
    }
    sanPhamChiTiet: {
        maSP: number,
        tenSP: string,
        manHinh: string,
        heDieuHanh: string,
        cameraSau: string,
        cameraTruoc: string,
        ram: string,
        rom: string,
        giaBan: number,
        hinhAnh: string
    }


}
