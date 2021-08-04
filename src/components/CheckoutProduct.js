import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({id, title, price, description, category, image, rating, hasPrime}) => {
    
    const dispatch = useDispatch();

     const addItemToBasket =()=>{
         const product={
            id, title, price, description, category, image, rating, hasPrime
         }
         dispatch(addToBasket(product))
     }

     const removeItemFromBasket=()=>{
         //Remove item from redux
         dispatch(removeFromBasket({id}))
     }

    return (
        <div className="grid grid-cols-5">
            
            <Image src={image} height={200} width={200} objectFit="contain"  />
            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon key={i} className="h-5 text-yellow-500"/>
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currency="GBP"/>

                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img 
                        loading="lazy"
                        className="w-12"
                        src="https://links.papareact.com/fdw"
                        alt=""
                        />
                        <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                    </div>
                )}
            </div>
            {/* Right Side Add/Remove buttons */}
            <div className="flex flex-col space-y-2 my-auto">
            <button onClick={addItemToBasket} className="button mt-auto">Add to Basket</button>
            <button onClick={removeItemFromBasket} className="button mt-auto">Remove from Basket</button>
            </div>
            
        </div>
        
    );
}

export default CheckoutProduct
