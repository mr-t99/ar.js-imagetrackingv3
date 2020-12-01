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
            infor: {
                link_img: null,
                link_video: "http://localhost:4000/video/videoplayback.webm",
                link_gif: "https://cuocsongaz.com/wp-content/uploads/2020/04/40-hinh-anh-dong-de-thuong-kute-cho-powerpoint-dep-nhat-1.gif",
                id_img: null
            }
        }
        this.getIdGroup = this.getIdGroup.bind(this);
        this.setDataImg = this.setDataImg.bind(this);
        this.setDataVideo = this.setDataVideo.bind(this);
        this.setDataGif = this.setDataGif.bind(this);
    }
    getIdGroup(idGroup) {
        this.setState({
            ...this.state, idGroup: idGroup
        })
    }
    setDataImg(link, id) {
        this.setState({
            ...this.state, infor: {
                ...this.state.infor, link_img: link, id_img: id
            }
        })
    }
    setDataVideo(link){
        console.log(link);
        this.setState({
            ...this.state,infor:{...this.state.infor, link_video:link}
        })
    }
    setDataGif(link){
        this.setState({
            ...this.state,infor:{...this.state.infor, link_gif:link}
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
                                <iframe width="450" height="300" src={this.state.infor.link_video}></iframe>
                            </div>
                            <div className="v imgtracking">
                                {this.state.infor.link_img === null &&
                                    <>
                                        Chưa tải lên hình ảnh
                                    </>
                                }
                                {
                                    this.state.infor.link_img !== null &&
                                    <img width="450" height="300" src={this.state.infor.link_img}></img>
                                }
                            </div>

                            <div className="v infor">
                                <img width="450" height="300" src={this.state.infor.link_gif}></img>
                            </div>
                        </div>
                        <div className="conten">
                            {
                                this.state.infor.id_img !== null &&
                                <div className="fromupload">
                                    <h3 className="title">Tải lên video:</h3>
                                    <UploadForm type={1} id={this.state.infor.id_img} getData={this.setDataVideo}/>
                                </div>
                            }
                            <div className="fromupload">
                                <h3 className="title" >Tải lên ảnh:</h3>
                                <UploadForm getData={this.setDataImg} type={0} idGroup={this.state.idGroup} />
                            </div>
                            {
                                this.state.infor.id_img !== null &&
                                <div className="fromupload">
                                    <h3 className="title" >Tải lên gif:</h3>
                                    <UploadForm type={2} id={this.state.infor.id_img} getData={this.setDataGif}/>
                                </div>
                            }

                        </div>
                    </>
                }
            </div>
        );
    }
}

export default upload;