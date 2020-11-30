import React, { Component } from 'react';
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";


class upload extends Component {
    constructor() {
        super();
        this.state = {
            name: 'file',
            action: 'http://localhost:4000/upload/image',
            headers: {
                authorization: 'authorization-text',
            }, data: {
                idGroup: "1"
            },
            link_conten:null
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(info) {
        if (info.file.name.split('.')[1] !== "png") {
            info = { ...info, file: { ...info.file, status: 'error' } };
            if (info.file.status === 'error') {
                message.error(`Hiện tại hệ thống chỉ hỗ trợ ảnh .png bạn đang xử dụng ảnh đuôi ${info.file.name.split('.')[1]}`);
                return;
            }
        }else{
            if (info.file.status !== 'uploading') {
                
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} hoàn tất tải lên`);
                this.props.getData(info.file.response.object.url);
            } else if (info.file.status === 'error') {
                message.error("error");
            }
        }
    }
    a(){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    }
    render() {
        console.log(this.state);
        return (
            <>
                <Upload {...this.state} onChange={this.onChange}>
                    <Button icon={<UploadOutlined />}>Tải hình lên</Button>
                </Upload>
            </>
        );
    }
}

export default upload;