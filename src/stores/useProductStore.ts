import { defineStore } from "pinia";
import { type productType } from "../types/ProductType";
import { computed, ref, type Ref } from "vue";

export const useProductStore = defineStore("productList", () => {
  const productList: Ref<productType[]> = ref([]);

  const loadFromLocalStorage = () => {
    try {
      const storedProducts = localStorage.getItem("productList");
      if (storedProducts) {
        productList.value = JSON.parse(storedProducts);
      } else {
        // Если в localStorage нет данных, используем дефолтные
        productList.value = [
          {
            id: 1,
            manufacturerLogo: "/public/manufacturers/manuf1.png",
            img: "/products/ear1.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            // category: 'Чехлы',
            // type: 'Стеклянные',

            favorite: false,
          },

          {
            id: 2,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear2.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            favorite: true,
          },

          {
            id: 3,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear3.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            favorite: false,
          },

          {
            id: 4,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear4.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            favorite: false,
          },

          {
            id: 5,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear5.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            favorite: false,
          },

          {
            id: 6,
            img: "/products/ear6.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            favorite: false,
          },
        ];
        updateLocalStorage();
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
  };

  loadFromLocalStorage();

  const updateLocalStorage = () => {
    try {
      localStorage.setItem("productList", JSON.stringify(productList.value));
      console.log("localStorage is updated");
    } catch {
      console.error("error localStorage");
    }
  };

  const getFromLocalStorage = () => {
    try {
      const storedProducts = localStorage.getItem("productList");
      if (storedProducts !== null) {
        return JSON.parse(storedProducts);
      } else {
        console.log("localStorage is empty");
        return productList.value;
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  };

  const updateProductInfo = (newProductInfo: productType) => {
    const storedProducts = getFromLocalStorage();
    const index = storedProducts.findIndex(
      (prod: productType) => prod.id === newProductInfo.id
    );

    if (index !== -1) {
      productList.value[index] = newProductInfo;
      updateLocalStorage();
      console.log("product info updated " + newProductInfo);
    } else console.log("product not found " + newProductInfo.id);
  };

  const toggleFavoriteCheck = (productId: number) => {
    const index = productList.value.findIndex(
      (prod: productType) => prod.id === productId
    );

    if (index !== -1) {
      // Меняем статус в основном массиве
      productList.value[index]!.favorite = !productList.value[index]!.favorite;

      // Сразу сохраняем весь обновленный массив в localStorage
      updateLocalStorage();
      console.log("Favorite toggled for product id: " + productId);
    } else {
      console.log("product not found " + productId);
    }
  };

  const favoriteListLentgh = computed(() => {
    return productList.value.filter(prod => prod.favorite).length;
  });

  const findById = (id: Number) => {
    return productList.value.filter(prod => prod.id === id)[0];
  }

  return {
    productList,
    getFromLocalStorage,
    updateProductInfo,
    toggleFavoriteCheck,
    favoriteListLentgh,
    findById
  };
});
