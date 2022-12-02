import { createContext } from 'React'
import Reducer from './Reducer'

const intialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertAddMsg: ''
}

export const ShopContext = createContext()


export function ContextProvider ({children}) {
    
    const [value, dispatch] = useReducer(Reducer, {intialState})
    
    value.removeFromOrder = (id) => {
        dispatch({type: 'REMOVE_FROM_ORDER', payload: id}) 
    }
    value.increseItemOrder = (id) => {
        dispatch({type: 'INCREASE_ITEM_ORDER', payload: id}) 
    }
    value.decreseItemOrder = (id) => {
        dispatch({type: 'DECREASE_ITEM_ORDER', payload: id}) 
    }
    value.toggleBasket = () => {
        dispatch({type: 'BASKET_TOGGLE'}) 
    }
    
    return <ShopContext.provider value={value}>{children}</ShopContext>
}