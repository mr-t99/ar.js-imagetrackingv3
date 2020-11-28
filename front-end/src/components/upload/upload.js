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
            onChange(info) {
                if (info.file.name.split('.')[1] != "png") {
                    info = { ...info, file: { ...info.file, status: 'error' } };
                    if (info.file.status === 'error') {
                        message.error(`Hiện tại hệ thống chỉ hỗ trợ ảnh .png bạn đang xử dụng ảnh đuôi ${info.file.name.split('.')[1]}`);
                        return;
                    }
                }else{
                    if (info.file.status !== 'uploading') {
                        console.log(info.file, info.fileList);
                    }
                    if (info.file.status === 'done') {
                        message.success(`${info.file.name} hoàn tất tải lên`);
                    } else if (info.file.status === 'error') {
                        message.error("error");
                    }
                }
                

                // if (info.file.status === 400) {
                //     const a = { ...info, file: { ...info.file, status: 'error' } };
                //     console.log(a.file.status);
                // }

                
            },
        };
    }
    render() {

        // const props = 
        return (
            <>
                <Upload {...this.state}>
                    <Button icon={<UploadOutlined />}>Tải hình lên</Button>
                </Upload>
            </>
        );
    }
}

export default upload;