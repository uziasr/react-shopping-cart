import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//context
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])
		// if(cart.length===0){
		// 	setCart([...cart,item])

		// }else{

		// cart.forEach(oldItem=>{
		// 	if (item.id===oldItem.id){
		// 		console.log('this is already in here')
		// 	}else{
		// 		setCart([...cart,item])
		// 	}
			
		// })}
		// console.log(item)
	};
	const removeItem = id => {
		console.log(cart)
        setCart(cart.filter(remove=> remove.id !== id))
    }

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{cart, removeItem}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/" component={Products} />

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
