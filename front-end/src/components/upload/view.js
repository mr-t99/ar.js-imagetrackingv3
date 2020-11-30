import React, { Component } from 'react';
import SelectGroup from "./selectGroup";
import UploadForm from "./upload";
import "./view.css";
const url = process.env.REACT_APP_API_URL;

class upload extends Component {
    constructor() {
        super();
        this.state = {
            idGroup: null,
            infor:{
                link_img:null,
                link_video:null,
                link_gif:null
            }
        }
        this.getIdGroup = this.getIdGroup.bind(this);
        this.getDataImg = this.getDataImg.bind(this);
    }
    getIdGroup(idGroup) {
        this.setState({
            ...this.state, idGroup: idGroup
        })
    }
    getDataImg(data){
        this.setState({
            ...this.state, infor:{
                ...this.state.infor,link_img:data
            }
        })
    }
    render() {
        console.log(this.state);
        return (
            <div className="upload">
                {
                    this.state.idGroup === null && <SelectGroup getId={this.getIdGroup} />
                }
                {
                    this.state.idGroup != null &&
                    <>
                        <div className="view">
                            <div className="v video">
                                <iframe  width="450" height="300" src="http://localhost:4000/video/videoplayback.webm"></iframe>
                            </div>
                            <div className="v imgtracking">
                                {this.state.infor.link_img === null && 
                                    <>
                                        Chưa tải lên hình ảnh
                                    </>
                                }
                                {
                                    this.state.infor.link_img!==null && 
                                    <img width="450" height="300" src={this.state.infor.link_img}></img>
                                }
                            </div>
                            <div className="v infor">
                                <img width="450" height="300" src="https://cuocsongaz.com/wp-content/uploads/2020/04/40-hinh-anh-dong-de-thuong-kute-cho-powerpoint-dep-nhat-1.gif"></img>
                            </div>
                        </div>
                        <div className="conten">
                            <div className="fromupload">
                                <h3 className="title" getData = {this.getDataImg}>Tải lên video:</h3>
                                <UploadForm />
                            </div>
                            <div className="fromupload">
                                <h3 className="title" >Tải lên ảnh:</h3>
                                <UploadForm getData = {this.getDataImg} test="ok" />
                            </div>
                            <div className="fromupload">
                                <h3 className="title" getData = {this.getDataImg}>Tải lên gif:</h3>
                                <UploadForm />
                            </div>
                        </div>
                    </>
                }
            </div>
        );
    }
}

export default upload;