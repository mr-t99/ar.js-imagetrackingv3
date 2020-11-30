const { default: axiosClient } = require("./axiosApi");

const imageApi = {
    uploadImg:(data)=>{
        const url = '/upload/image';
        axiosClient.post(url, data);
    }
}

export default imageApi;