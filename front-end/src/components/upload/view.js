import React, { Component } from 'react';
import UploadForm from "./upload";
import "./view.css";
const url = process.env.REACT_APP_API_URL;

class upload extends Component {
    render() {
        console.log(url);
        return (
            <div className="upload">
                <div className="view">
                    <div className="v video">
                        <iframe width="450" height="300" src="http://localhost:4000/video/videoplayback.webm"></iframe>
                    </div>
                    <div className="v imgtracking">
                        <img width="450" height="300" src="https://ar-bdu.herokuapp.com/image/oldsv.png"></img>
                    </div>
                    <div className="v infor">
                        <img width="450" height="300" src="https://cuocsongaz.com/wp-content/uploads/2020/04/40-hinh-anh-dong-de-thuong-kute-cho-powerpoint-dep-nhat-1.gif"></img>
                    </div>
                </div>
                <div className="conten">
                    <div className="fromupload">
                        <h3 className="title">Tải lên video:</h3>
                        <UploadForm />
                    </div>
                    <div className="fromupload">
                        <h3 className="title">Tải lên ảnh:</h3>
                        <UploadForm />
                    </div>
                    <div className="fromupload">
                        <h3 className="title">Tải lên gif:</h3>
                        <UploadForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default upload;