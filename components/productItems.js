import Link from 'next/link';

const ProductItem = ({ product, addToCartHandler }) => {
  return (
    <div className="w-80 bg-white shadow rounded">
      <div className="h-48 w-full flex flex-col justify-between p-4 bg-cover bg-center items-center">
        <Link href={`/product/${product.slug}`}>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow ImgSize"
          />
        </Link>

        <div
          className={`uppercase text-xs  p-1 border-green-500 border rounded font-medium select-none mt-4 ${
            product.countInStock > 0
              ? product.countInStock > 10
                ? 'border-green-500 text-green-700 bg-green-50 '
                : 'border-yellow-500 text-yellow-700 bg-yellow-50'
              : 'border-red-500 text-red-700 bg-red-50'
          }`}
        >
          {product.countInStock > 0
            ? product.countInStock > 10
              ? 'In stock'
              : 'Low stock'
            : 'Out of stock'}
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <Link href={`/product/${product.slug}`}>
          <h1 className="text-gray-800 text-center mt-12">{product.name}</h1>
        </Link>
        <p className="text-center text-gray-800 mt-1">{product.brand}</p>
        <p className="text-center text-gray-800 mt-1">₹{product.price}</p>
        <button
          className={`py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center ${
            product.countInStock === 0 && 'cursor-not-allowed'
          }`}
          onClick={() => addToCartHandler(product)}
        >
          Add to order
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
