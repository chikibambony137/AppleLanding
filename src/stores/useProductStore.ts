import { defineStore } from "pinia";
import { type productType } from "../types/ProductType";
import { ref, type Ref } from "vue";

export const useProductStore = defineStore('productList', () => {
    const productList : Ref<productType[]> = ref([
        {
            id: 1,
            manufacturerLogo: 'manufacturers/manuf1.png',
            img: 'products/ear1.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: false
        },

        {
            id: 2,
            manufacturerLogo: 'manufacturers/manuf1.png',
            img: 'products/ear2.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: true
        },
        
        {
            id: 3,
            manufacturerLogo: 'manufacturers/manuf1.png',
            img: 'products/ear3.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: false
        },
        
        {
            id: 4,
            manufacturerLogo: 'manufacturers/manuf1.png',
            img: 'products/ear4.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: false
        },
        
        {
            id: 5,
            manufacturerLogo: 'manufacturers/manuf1.png',
            img: 'products/ear5.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: false
        },
        
        {
            id: 6,
            img: 'products/ear6.png',
            name: 'Apple BYZ S852I',
            price: 3527,
            discount: 17,

            favorite: false
        },
        
    ]);

    const favoriteChange = (productId: number) => {
        const product = productList.value.filter((prod) => prod.id === productId)[0];
        if (product) product.favorite = !product.favorite;
        else console.error('Product not found!');
    }

    return { productList, favoriteChange }
})