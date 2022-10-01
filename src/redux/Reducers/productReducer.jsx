import { createSlice } from '@reduxjs/toolkit'
import axios  from 'axios';
import {http} from '../../util/config'


const initialState = {
    dataProduct: []
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