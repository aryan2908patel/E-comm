import Image from 'next/image';

import product1 from './3.jpeg';


const Items = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            image: '/1.jpeg',
            stars: 2,
            numReviews: 120,
            originalPrice: 50.0,
            discountPrice: 39.99,
        },
        {
            id: 2,
            name: 'Product 2',
            image: '/2.jpeg',
            stars: 3,
            numReviews: 120,
            originalPrice: 50.0,
            discountPrice: 39.99,
        },
        {
            id: 3,
            name: 'Product 3',
            image: '/3.jpeg',
            stars: 4,
            numReviews: 120,
            originalPrice: 50.0,
            discountPrice: 39.99,
        },
        {
            id: 4,
            name: 'Product 2',
            image: '/4.jpeg',
            stars: 4,
            numReviews: 120,
            originalPrice: 50.0,
            discountPrice: 39.99,
        },
        {
            id: 5,
            name: 'Product 3',
            image: '/5.jpeg',
            stars: 3,
            numReviews: 120,
            originalPrice: 50.0,
            discountPrice: 39.99,
        }
    ];

    const generateStars = (rating: any) => {
        const starIcons = [];
        const fullStars = Math.floor(rating);

        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<span key={i} className="text-yellow-500">&#9733;</span>);
        }

        return starIcons;
    };


    return (
        <div className="flex flex-wrap justify-center gap-6 mb-5">
            {products.map((product, index) => (
                <div key={product.id} className={"bg-white p-6 rounded-md shadow-md mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border:2px "}>
                    <div className="relative overflow-hidden rounded-md group">
                        <div className="hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                            <Image src={product1} alt={product.name} width={350} height={400} />
                        </div>

                        <div className="absolute inset-x-0 bottom-0 flex items-center justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-1">
                            <button className="bg-transparent text-slate-700 px-2 py-2 rounded-full border-2 border-slate-700">ex</button>
                            <button className="bg-transparent text-slate-700 px-12 py-2 rounded-full border-2 border-slate-700">ADD TO CART</button>
                            <button className="bg-transparent text-slate-700 px-2 py-2 rounded-full border-2 border-slate-700">lk</button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center font-semibold text-xl">
                                {generateStars(product.stars)}
                            </div>
                            <span className="text-gray-500">{product.numReviews} reviews</span>
                        </div>
                        <div className='my-4 font-semibold text-2xl'>
                            {product.name}
                        </div>
                        <div className="flex justify-start  items-center gap-4 w-full">
                            <span className="text-xl font-semibold text-slate-700">${product.discountPrice}</span>
                            <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
