import { createSlice } from '@reduxjs/toolkit'
import axios  from 'axios';
import {http} from '../../util/config'


const initialState = {
    dataProduct: [],
    dataCarousel: [
      {
        "id": 1,
        "name": "Adidas Prophere",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-prophere.png"
      },
      {
        "id": 2,
        "name": "Adidas Swift Run",
        "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-swift-run.png"
      },
      {
        "id": 3,
        "name": "Adidas Ultraboost 4",
        "shortDescription": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        "image": "https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png"
      },
    ]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
        setGetPostPageAction: (state, action) => {
            //Lấy dữ liệu về từ payload
            const dataProduct = action.payload;
            //Cập nhật lại state.dataProduct
            state.dataProduct = dataProduct;  
        }
  }
});

export const {setGetPostPageAction} = productReducer.actions

export default productReducer.reducer
/*========================== Action API ========================== */
export const getPostPageApi = (pageParams=1, pageSize=1) => {
    return async dispatch => {
      try {
        const result = await http.get(`/product/getpaging?pageIndex=${pageParams}&pageSize=${pageSize}`);
        // console.log("Kết quả lấy giầy theo trang", result.data.content.items);
        let {items} = result.data.content;
        const action = setGetPostPageAction(items);
        dispatch(action);
      }catch (err) {
        console.log(err);
      }
    }
  }