import { defineStore } from "pinia";
import { type productType } from "../types/ProductType";
import { ref, type Ref } from "vue";

export const useProductStore = defineStore("productList", () => {
  const productList: Ref<productType[]> = ref([]);

  const updateLocalStorage = () => {
    try {
      localStorage.setItem("productList", JSON.stringify(productList.value));
      console.log("localStorage is updated");
    } catch {
      console.error("error localStorage");
    }
  };

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
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear1.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Проводные',
          },

          {
            id: 2,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear2.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Бепроводные',
          },

          {
            id: 3,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear3.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Беспроводные',
          },

          {
            id: 4,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear4.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Проводные',
          },

          {
            id: 5,
            manufacturerLogo: "/manufacturers/manuf1.png",
            img: "/products/ear5.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Проводные',
          },

          {
            id: 6,
            img: "/products/ear6.png",
            name: "Apple BYZ S852I",
            price: 3527,
            discount: 17,

            type: 'Наушники',
            subtype: 'Беспроводные/проводные',
          },
        ];
        updateLocalStorage();
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
  };

  loadFromLocalStorage();

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

  const findById = (id: Number) => {
    return productList.value.filter((prod) => prod.id === id)[0];
  };

  return {
    productList,
    getFromLocalStorage,
    updateProductInfo,
    findById,
  };
});
