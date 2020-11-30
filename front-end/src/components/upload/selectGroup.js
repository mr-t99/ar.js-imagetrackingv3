import React, { Component } from 'react';
import groupApi from "../../axiosApi//groupApi";
import "./selectGroup.css";
import { Select, Button, Input } from "antd";
import { CaretRightOutlined, PlusOutlined } from "@ant-design/icons";
const { Option } = Select;

class selectGroup extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            optionInput: true,
            valueInputAddGroup:"",
            idGroup:0
        }
        this.onClickAdd = this.onClickAdd.bind(this);
        this.inputAddGroup = this.inputAddGroup.bind(this);
        this.changselect = this.changselect.bind(this);
    }
    changselect(value) {
        this.setState({
            ...this.state, idGroup:value
        })
    }
    onClickSelect() {
        if(this.state.optionInput === true){
            this.props.getId(this.state.idGroup);
        }else{
            this.setState({
                ...this.state, optionInput:!this.state.optionInput
            })
        }
    }
    onClickAdd() {
        if(this.state.optionInput === false){
            if(this.state.valueInputAddGroup.length===0){
                alert("Bạn phải nhập tên Nhóm");
            }else{

            }
        }else{
            this.setState({
                ...this.state, optionInput:!this.state.optionInput
            })
        }
    }
    inputAddGroup(e){
        this.setState({
            ...this.state, valueInputAddGroup:e.target.value
        })
    }
    componentDidMount() {
        const getItemGroup = async () => {
            try {
                const data = await groupApi.getAll();
                this.setState({
                    ...this.state, data: data, idGroup:data[0].id
                })
            } catch (ex) {
                console.log(ex);
                alert("err api component select group");
            }
        }
        getItemGroup();
    }
    
    render() {
        return (
            <div className="select">
                <h2 className="intro">Chọn group của bạn:</h2>
                <div>
                    {
                        !this.state.optionInput && <Input placeholder="Nhập tên nhóm của bạn" value={this.state.valueInputAddGroup} onChange={this.inputAddGroup} />
                    }
                    {
                        this.state.optionInput &&
                        <>
                            {
                                this.state.data.length === 0 && <Select className="select-after" onChange={this.changselect}></Select>
                            }
                            {
                                this.state.data.length !== 0 &&
                                <Select defaultValue={this.state.data[0].name} className="select-after" onChange={this.changselect}>
                                    {
                                        this.state.data.map((value, index) => {
                                            return (
                                                <Option key={index} value={value.id}>{value.name}</Option>
                                            );
                                        })
                                    }
                                </Select>
                            }
                        </>
                    }
                </div>
                <div className="bt">
                    <Button type="primary" shape="round" icon={<PlusOutlined />} size="small" onClick={this.onClickAdd}>
                        Thêm nhóm
                    </Button>
                    <Button type="primary" shape="round" icon={<CaretRightOutlined />} size="small" onClick={()=>this.onClickSelect()}>
                        Lựa chọn
                    </Button>
                </div>
            </div>
        );
    }
}

export default selectGroup;