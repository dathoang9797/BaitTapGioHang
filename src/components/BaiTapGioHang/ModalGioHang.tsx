import React, { Component, useState } from 'react'
import { Modal, Button } from 'antd'
import { ItemDt } from "./BaiTapGioHang.types"

type PropsModalGioHang = {
    dataGioHang: Array<ItemDt & { soLuong: number }>
    handleThayDoiSoLuong: (maSP: ItemDt['maSP'], type: ItemDt['type']) => void
}

class ModalGioHang extends Component<PropsModalGioHang> {
    state = {
        visible: false,
        confirmLoading: false,
        modalText: "Content of the modal"
    }

    renderDanhSachGioHang = () => {
        return this.props.dataGioHang.map((item, index) => {
            const { maSP, tenSP, hinhAnh, giaBan, soLuong } = item;
            return (
                <tr key={index} style={{ verticalAlign: 'middle' }}>
                    <td>{maSP}</td>
                    <td>{tenSP}</td>
                    <td>
                        <img src={hinhAnh} alt={hinhAnh} height={100} width={100} />
                    </td>
                    <td>{giaBan}</td>
                    <td>
                        <button className='btn btn-primary' onClick={() => { this.props.handleThayDoiSoLuong(maSP, 1) }}>+</button>
                        <span className='pr-2 pl-2'>{soLuong}</span>
                        <button className='btn btn-danger' onClick={() => { this.props.handleThayDoiSoLuong(maSP, -1) }}>-</button>
                    </td>
                </tr>
            )
        })
    }

    renderTotalGioHang = () => {
        return this.props.dataGioHang.reduce((total, item) => {
            return total + item.soLuong;
        }, 0)
    }
    showModal = () => {
        this.setState({ visible: true })
    };

    handleOk = () => {
        this.setState({ modalText: 'The modal will be closed after two seconds', confirmLoading: true });
        setTimeout(() => {
            this.setState({ visible: false, confirmLoading: false });

        }, 2000);
    };

    handleCancel = () => {
        this.setState({ visible: false })
    };
    render(
    ) {
        return (
            <>
                <div className="text-right">
                    <Button type="primary" onClick={this.showModal} >
                        Giỏ Hàng {this.renderTotalGioHang()}
                    </Button>
                </div>

                <Modal
                    width={1000}
                    title="Giỏ Hàng Của Bạn"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    {/* <p>{this.state.modalText}</p> */}
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Mã Sản Phẩm</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Hình Ảnh</th>
                                <th>Đơn Giá</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSachGioHang()}
                        </tbody>
                    </table>
                </Modal>
            </>
        );
    }
}

export default ModalGioHang;

// const ModalGioHang = () => {
//     const [visible, setVisible] = useState(false);
//     const [confirmLoading, setConfirmLoading] = useState(false);
//     const [modalText, setModalText] = useState('Content of the modal');

//     const showModal = () => {
//         setVisible(true);
//     };

//     const handleOk = () => {
//         setModalText('The modal will be closed after two seconds');
//         setConfirmLoading(true);
//         setTimeout(() => {
//             setVisible(false);
//             setConfirmLoading(false);
//         }, 2000);
//     };

//     const handleCancel = () => {
//         console.log('Clicked cancel button');
//         setVisible(false);
//     };

//     return (
//         <>
//             <Button type="primary" onClick={showModal}>
//                 Open Modal with async logic
//             </Button>
//             <Modal
//                 title="Title"
//                 visible={visible}
//                 onOk={handleOk}
//                 confirmLoading={confirmLoading}
//                 onCancel={handleCancel}
//             >
//                 <p>{modalText}</p>
//             </Modal>
//         </>
//     )
// }

// export default ModalGioHang