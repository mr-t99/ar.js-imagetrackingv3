import React, { Component } from 'react';
import {  Upload, message, Button  } from "antd";
import {  UploadOutlined  } from "@ant-design/icons";

class upload extends Component {
    
    render() {
        return (
            <>
                <Upload>
                    <Button icon={<UploadOutlined />}>Tải hình lên</Button>
                </Upload>
            </>
        );
    }
}

export default upload;