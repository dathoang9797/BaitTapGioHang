import React, { Component } from 'react';

class HandleEvent extends Component {
    handleClickHello = () => {
        alert("Hello mn");
    };
    handleLuong = (luong:number) => {
        alert(`luong toi ${luong} `);
    };

    render() {
        let luong = 300;
        return (
            <>
                <button onClick={this.handleClickHello}>bam vao</button>
                <button
                    onClick={() => {
                        this.handleLuong(luong);
                    }}
                >
                    {" "}
                    luong toi
                </button>
            </>
        );
    }
}

export default HandleEvent;