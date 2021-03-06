import { session, useSession } from 'next-auth/client'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Currency from 'react-currency-formatter'

function Checkout() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
    const [session] = useSession();


    return (
        <div className="bg-gray-100">
            <Header />
            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* Left side of checkout */}
                <div className="flex-grow m-5 shadow-sm">
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />

                    <div className="flex flex-col p-5 space-y-10">
                        <h1 className="text-3xl border-b pb-4">
                            {items.length === 0 ?
                                'Your Basket is Empty' :
                                `Your Shopping Basket have ${items.length} items`}
                        </h1>
                        {items.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                image={item.image}
                                rating={item.rating}
                                hasPrime={item.hasPrime}
                                quantity = {item.quantity}
                            />
                        ))}
                    </div>
                </div>
                {/* Right */}
                <div className="flex flex-col bg-white p-10 shadow-md">
                    {items.length > 0 && (
                        <>
                            <h2>
                                Subtotal ({items.length} items):
                                <span className="font-bold">
                                    <Currency quantity={total} currency="GBP" />
                                </span>
                            </h2>
                            <button
                                className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 text-gray-300'}`}>
                                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    )}
                </div>
            </main>

        </div>
    )
}

export default Checkout
