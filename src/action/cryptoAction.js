  // Dependencies
import axios from "axios"

// Constant
import {
    CRYPTO_LIST_REQUEST,
    CRYPTO_LIST_SUCCESS,
    CRYPTO_LIST_FAIL
} from '../constant/cryptoContant'

// GET LIST UNIVERSITY DATA
export const listCrypto = () => async(dispatch) => {
  try {
    // Request payload
    dispatch({
      type: CRYPTO_LIST_REQUEST
    })

    // List Data
    const {data} = await axios.get('http://localhost:5000/api/get-all')
    
    dispatch({
      type: CRYPTO_LIST_SUCCESS,
      payload: data
    })
    
  } catch (error) {
    // error payload
    dispatch({
      type: CRYPTO_LIST_FAIL,
      payload: error.response
              && error.response.data.message
              ? error.response.data.message
              : error.message
    })
  }
}