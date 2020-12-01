import React, { Component } from 'react';
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";


class upload extends Component {
    constructor() {
        super();
        this.state = {
            name: 'file',
            action: '',
            headers: {
                authorization: 'authorization-text',
            }, data: {
                idGroup: "1",
                idImg: "1"
            },
            link_conten: null
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange(info) {
        if (this.props.type === 1 || this.props.type === 2) {
            if (info.file.status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
                this.props.getData(info.file.response.object.url);
                // console.log(info.file.response.object.url);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        } else {
            if (info.file.name.split('.')[1] !== "png") {
                info = { ...info, file: { ...info.file, status: 'error' } };
                if (info.file.status === 'error') {
                    message.error(`Hiện tại hệ thống chỉ hỗ trợ ảnh .png bạn đang xử dụng ảnh đuôi ${info.file.name.split('.')[1]}`);
                    return;
                }
            } else {
                if (info.file.status !== 'uploading') {

                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} hoàn tất tải lên`);
                    this.props.getData(info.file.response.object.url, info.file.response.object.id_img);
                } else if (info.file.status === 'error') {
                    message.error("error");
                }
            }
        }
    }
    componentDidMount() {

        if (this.props.type === 0) {
            this.setState({
                ...this.state, action: `${process.env.REACT_APP_API_URL}/upload/image`, data: { ...this.state.data, idGroup: this.props.idGroup }
            })
        }
        if (this.props.type === 1) {
            this.setState({
                ...this.state, action: `${process.env.REACT_APP_API_URL}/upload/video`, data: { ...this.state.data, idImg: this.props.id }
            })
        }
        if (this.props.type === 2) {
            this.setState({
                ...this.state, action: `${process.env.REACT_APP_API_URL}/upload/video`, data: { ...this.state.data, idImg: this.props.id }
            })
        }
    }
    render() {
        return (
            <>
                <Upload {...this.state} onChange={this.onChange}>
                    <Button icon={<UploadOutlined />}>Tải lên</Button>
                </Upload>
            </>
        );
    }
}

export default upload;