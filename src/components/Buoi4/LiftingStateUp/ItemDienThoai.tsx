import React, { Component } from 'react'
import { PropsItemDienThoai } from './LiftingStateUp.types'

export default class ItemDienThoai extends Component<Pick<PropsItemDienThoai, 'itemDienThoai' | 'handOnClick'>, {}> {
    render() {
        const { tenSP, hinhAnh } = this.props.itemDienThoai;
        return (
            <div className="card " style={{ width: '18rem' }}>
                <img className="card-img-top" src={hinhAnh} alt={hinhAnh} style={{width:300,height:200}}/>
                <div className="card-body">
                    <h5 className="card-title">{tenSP}</h5>
                    <button className='btn btn-primary' onClick={() => {
                        const itemDT = this.props.itemDienThoai
                        this.props.handOnClick(itemDT)
                    }}>Xem Chi Tiết</button>
                </div>
            </div>

        )
    }
}
