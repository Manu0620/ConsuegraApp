export const CartService = {
   async getCart() {
      const res = await fetch('/api/cart');
      const data = await res.json();
      return data;
   },
   async addToCart(id: string, quantity: number) {
      const res = await fetch('/api/cart', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id,
            quantity,
         }),
      });
      const data = await res.json();
      return data;
   },
   async removeFromCart(id: string) {
      const res = await fetch('/api/cart', {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id,
         }),
      });
      const data = await res.json();
      return data;
   },
   async updateCart(id: string, quantity: number) {
      const res = await fetch('/api/cart', {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            id,
            quantity,
         }),
      });
      const data = await res.json();
      return data;
   },
};
