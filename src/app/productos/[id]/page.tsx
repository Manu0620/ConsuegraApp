'use client';

import { useCart } from '@/components/cart/cart-context';
import { toast } from '@/components/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ProductCarousel } from '@/components/view-products/images-carousel';
import { Products } from '@/app/api/models/products';
import { currencyFormat } from '@/lib/utils';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { LuLoader2 } from 'react-icons/lu';

export default function ProductDetails() {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [product, setProduct] = useState<Products>();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const productId = params.id.toString();

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  const fetchProduct = async (productId: string) => {
    setLoading(true);
    const res = await fetch(`/api/products?id=${productId}`);
    const data = await res.json();
    setProduct(data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex flex-col bg-white items-center justify-center min-h-screen">
        <LuLoader2 className="text-red-800 animate-spin w-10 h-10" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col bg-white items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-red-800">¡Oops!</h1>
        <p className="text-lg">Producto no encontrado. 😅</p>
      </div>
    );
  }

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
      name: product.description ?? 'Descripción no disponible',
      price: product.price.toString(),
      portrait: product.image ?? '/LogoMono.png',
      quantity: quantity,
    });

    toast({
      title: 'Éxito!',
      description: <p>{product.description} ha sido agregado al carrito</p>,
    });
  };

  return (
    <main className="flex flex-col items-center p-0 bg-red">
      <section className="hero-products flex flex-col w-full py-12 px-6 bg-white border-b border-red-700 mt-48 shadow-md text-start items-center overflow-hidden">
          {/* <ProductCarousel images={product ? product.image : []} /> */}
          <ScrollArea className="min-h-20 flex flex-col space-y-3">
            <h1 className="flex flex-col text-red-800 font-bold leading-none mobilesm:text-xl mobile:text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              {product ? product.description : 'Producto no encontrado'}
              <span className="text-[14px] font-normal text-black">
                {product ? product.class + ' ' + product.brand : ''}
              </span>
            </h1>
            <h1 className="flex flex-col text-black font-bold text-xl">
              {product ? currencyFormat(product.price) : ''}
              <span className="text-sm font-light text-red-800">Unidad</span>
            </h1>
            {/* {product?.images ? (
              <div className="flex flex-row border-t-2 border-red-700 py-3 ">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    className="w-28 h-28 p-2 space-x-2 aspect-square contrast-125 rounded-xl basis-1/4 object-contain hover:border-red-800 hover:border-2"
                  />
                ))}
              </div>
            ) : null} */}
            <p className="text-green-700 text-sm font-medium">In Stock</p>
            <p className="text-gray-700 font-light max-w-lg">
              {product.description && product.description.length > 10 ? 
                  `${product.description} \n ${product.brand}`
                : ''}
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
      </section>
    </main>
  );
}
