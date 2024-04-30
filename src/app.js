document.addEventListener('alpine:init', () => {
    Alpine.data('produk', () => ({
       items: [
        { id: 1, name: 'Chitato', img: '1.jpeg', price: 3000 },
        { id: 2, name: 'Kopi Susu ABC', img: '2.jpeg', price: 1500 },
        { id: 3, name: 'Tepung', img: '3.jpeg', price: 3000 },
        { id: 4, name: 'Gula', img: '4.jpeg', price: 9000 },
        { id: 5, name: 'Susu Ultramilk', img: '5.jpeg', price: 6500 },
        { id: 6, name: 'Teh Sari Wangi', img: '6.jpeg', price: 6500 },
        { id: 7, name: 'Indomie Goreng', img: '7.jpeg', price: 3500 },
        { id: 8, name: 'Indomie Kuah TORI MISO', img: '8.jpeg', price: 4500 },
        { id: 9, name: 'Pantene', img: '9.jpeg', price: 28000 },
        { id: 10, name: 'Biore Guard', img: '10.jpeg', price: 17500 },
       ],
    }));
});