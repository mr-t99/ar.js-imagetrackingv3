import React, { Component } from 'react';
import "./selectGroup.css";
import { Select, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
const { Option } = Select;


class selectGroup extends Component {
    constructor(){
        super();
    }
    changselect(value){
        alert(value);
    }
    onClick(){
        alert("mẹ nó mệt vl")
    }
    render() {
        return (
            <div className="select">
                <h2>Chọn group của bạn</h2>
                <div>
                    <Select defaultValue="Bình chuẩn 1" className="select-after" onChange = {this.changselect}>
                        <Option value="Bình chuẩn 1">Bình chuẩn 1</Option>
                        <Option value="Tân uyên 1">Tân uyên 1</Option>
                        <Option value=".cn">.cn</Option>
                        <Option value=".org">.org</Option>
                    </Select>
                </div>
                <div className="bt">
                    <Button type="primary" shape="round" icon={<CaretRightOutlined />} size="large" onClick={this.onClick}>
                        Tiếp tục
                    </Button>
                </div>
            </div>
        );
    }
}

export default selectGroup;