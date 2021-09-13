import axios from 'axios'
import * as action from '../constants/productConstant'
const url = ''
export const getProducts = () => async(dispatch) =>{
    try{
        const {data} = await axios.get(`/products`)
        dispatch({type:action.success, payload:data})
        console.log('api data called by frontend',action.success)
    }catch(error){
        dispatch({type:action.fail, payload:error.message})
    }
}

export const getProductdetail = (id) => async(dispatch) =>{
    try{
      const {data} = await axios.get(`/product/${id}`)
     dispatch({type:action.ProductdetailSuccess, payload:data})
     console.log('api data called by frontend getProductdetail',action.success)
    }catch(error){
       dispatch({type:action.ProductdetailFaild, payload:error.message})
    }
}
