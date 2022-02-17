import React, { Component } from 'react'
import Images from 'assets/images'

type StateBaiTapChonXe = {
    carOption: string
}

export default class BaiTapChonXe extends Component<{}, StateBaiTapChonXe> {
    state = {
        carOption: Images.blackCar
    }

    handleOption = (option: StateBaiTapChonXe['carOption']) => {
        this.setState({
            carOption: option
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <img src={this.state.carOption} className="col-7" alt="true" />
                    <div className="col-5 row">
                        <button onClick={() => { this.handleOption(Images.blackCar) }} className="btn btn-danger col4" >red car</button>
                        <button onClick={() => { this.handleOption(Images.redCar) }} className="btn btn-secondary col-4" > silver car </button>
                        <button onClick={() => { this.handleOption(Images.silverCar) }} className="btn btn-dark col-4" > black car</button>

                    </div>
                </div>

            </div>
        )
    }
}
