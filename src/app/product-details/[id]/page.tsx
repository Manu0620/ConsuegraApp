'use client';

import { useCart } from '@/components/cart/cart-context';
import { toast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCarousel } from '@/components/view-products/images-carousel';
import { productos } from '@/data/productos';
import { currencyFormat } from '@/lib/utils';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';

export default function ProductDetails() {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const productId = params.id;
  
  const product = productos.find(
    (product) => product.id.toString() === productId,
  );

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-800">¡Oops!</h1>
        <p className="text-lg">Producto no encontrado. 😅</p>
      </div>
    );
  }

  // useEffect(() => {
  //     const fetchProduct = async () => {
  //         if (productId) {
  //             const res = await fetch('http://192.168.1.233:8080/api/products?id_product=PVC-345');
  //             if (!res.ok) {
  //                 throw new Error(`HTTP error! status: ${res.status}`);
  //                 }
  //             let data = await res.json();
  //             console.log(data);
  //         }
  //     };
  //     fetchProduct();
  // }, [productId]);


  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value;

    if (isNaN(value)) {
      return;
    }

    setQuantity(Number(value)); // Actualiza el valor de la cantidad
  };

  const handleBlur = (e: any) => {
    const value = e.target.value;
    if (isNaN(value) || quantity < 1) {
      setQuantity(1);
    }
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleClick = () => {
    if (cartItems.find((item) => item.id === product.id.toString())) {
      // Actualizar la cantidad del producto en el carrito
      const currentQuantity = cartItems.find(
        (item) => item.id === product.id.toString(),
      )?.quantity;
      
      if (currentQuantity === undefined) return;
      
      updateQuantity(product.id.toString(), currentQuantity + quantity);

      toast({
        title: 'Producto duplicado 👻!',
        description: <p>Cantidad actualizada.</p>,
      });

      return;
    }

    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      portrait: product.portrait,
      quantity: quantity,
    });

    toast({
      title: 'Éxito!',
      description: <p>{product.name} ha sido agregado al carrito</p>,
    });
  };

  return (
    <main className="flex flex-col items-center p-0 bg-red">
      <section className="hero-products flex flex-col w-full py-12 px-6 bg-white border-b border-red-700 mt-48 shadow-md text-start items-center overflow-hidden">
        <div className="flex flex-row flex-wrap gap-12 w-10/12 text-start justify-center">
          <ProductCarousel images={product ? product.images : []} />
          <ScrollArea className="min-h-20 flex flex-col space-y-3">
            <h1 className="flex flex-col text-red-800 font-bold leading-snug mobilesm:text-xl mobile:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              {product ? product.name : 'Producto no encontrado'}
              <span className="text-[16px] font-normal text-black">
                Categoría
              </span>
            </h1>
            <h1 className="flex flex-col text-black font-bold text-xl">
              {product ? currencyFormat(parseFloat(product.price)) : ''}
              <span className="text-sm font-light text-red-800">Unidad</span>
            </h1>
            {product?.images ? (
              <div className="flex flex-row border-t-2 border-red-700 py-3 ">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-28 h-28 p-2 space-x-2 aspect-square contrast-125 rounded-xl basis-1/4 object-contain hover:border-red-800 hover:border-2"
                  />
                ))}
              </div>
            ) : null}
            <p className="text-green-700 text-sm font-medium">In Stock</p>
            <p className="text-gray-700 font-light max-w-lg">
              {product ? product.description : ''}
            </p>
            <div className="flex flex-row items-center py-2">
              <div className="flex flex-row pr-2">
                <Button
                  onClick={handleDecrement}
                  className="text-red-800 border border-red-800 rounded-xl hover:bg-red-800 hover:text-white outline-none"
                >
                  -
                </Button>
                <Input
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  value={quantity}
                  className="border-none font-medium w-20 text-red-800 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <Button
                  onClick={handleIncrement}
                  className="text-red-800 border border-red-800 rounded-xl hover:bg-red-800 hover:text-white outline-none"
                >
                  +
                </Button>
              </div>
              <div className="flex grow ">
                <Button
                  onClick={handleClick}
                  className="text-red-800 w-full space-x-3 gap-2 text-md border border-red-800 self-center font-medium rounded-xl hover:bg-red-700 hover:text-white outline-none"
                >
                  <FaOpencart /> Agregar al carrito
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </section>
    </main>
  );
}
