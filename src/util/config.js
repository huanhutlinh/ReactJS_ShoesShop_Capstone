import axios from "axios";
// import {history} from './../index.js'
export const configs = {
    setStore: (name,value) => {
        localStorage.setItem(name,value);
    },
    getStore: (name) => {
        return localStorage.getItem(name);
    },
    setStoreJSON: (name,value) => {
        //Bien thanh chuoi
        value = JSON.stringify(value);
        //Luu vao store
        localStorage.setItem(name,value);
    },
    getStoreJSON: (name) => {
        if(localStorage.getItem(name)){
            let content = JSON.parse(localStorage.getItem(name));
            return content;
        }
        return null;
    },
    setCookie:  (value ,days, name) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie : (name) => {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    clearCookie: (name) => {
        setCookie('',-1,name);
    },
    clearLocalStorage: (name) => {
        localStorage.removeItem(name);
    }
    ,
    ACCESS_TOKEN: 'accessToken',
    USER_LOGIN: 'userLogin'

}

export const {getCookie, setCookie, setStore, getStore, setStoreJSON, getStoreJSON, clearCookie, clearLocalStorage, ACCESS_TOKEN, USER_LOGIN} = configs;
const TOKEN_CYBERSOFT = '';

//Cấu hình intercepter (cấu hình cho các request và response)
export const http = axios.create({
    baseURL: `https://shop.cyberlearn.vn/api`,
    timeout: 6000
});

//Cấu hình request 
http.interceptors.request.use((configs) => {
    configs.headers = {
        ...configs.headers,
        ['Authorization']: `Bearer ${getStore(ACCESS_TOKEN)}`,
        ['TokenCybersoft']: TOKEN_CYBERSOFT
    }
    return configs;

}, (err) => {
    return Promise.reject(err);
})

/**
 *  statuscode: mã kết quả trả về do backend quy định 
 *  200 (Success): kết quả trả về thành công 
 *  201 (Created): tạo giá trị thành công trên server (không dùng 208)
 *  400(BadRequest) : Không tồn tại đường dẫn 
 *  404(Not Found): Không tim thấy dữ liệu 
 *  401(UnAuthorize) : Không có quyền truy cập vào API
 *  403 (Forbiden): Token chưa đủ quyền truy cập
 *  500(Error in Server): Lỗi xảy ra trên server (Nguyên nhân có thể do fontedn hoặc backend tùy tình huống)
 *  
 */

http.interceptors.response.use((response) => {
    console.log(response);
    return response;
}, err => {
    //const originalRequest  = error.config;
    console.log(err.response.status);
    if(err.response.status === 400 || err.response.status === 404){
        // history.push('/');
        return Promise.reject(err);
    }
    if(err.response.status === 401 || err.response.status === 403){
        alert('Token khong hop le ! Vui long dang nhap lai !');
        // history.push('/login');
        return Promise.reject(err);
    }
})