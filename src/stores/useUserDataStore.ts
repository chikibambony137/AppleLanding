import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";
import { useProductStore } from "./useProductStore";

export const useUserDataStore = defineStore("userData", () => {
  type listItemType = {
    id: Number;
    dateAdded: Number;
    quantity: number;
  };

  const favoritesList: Ref<listItemType[]> = ref([]);
  const cartList: Ref<listItemType[]> = ref([]);

  const updateLocalStorage = (name: string, value: Ref<listItemType[]>) => {
    try {
      localStorage.setItem(name, JSON.stringify(value.value));
      console.log("localStorage is updated");
    } catch {
      console.error("error localStorage");
    }
  };

  const loadFromLocalStorage = (name: string, value: Ref<listItemType[]>) => {
    try {
      const stored = localStorage.getItem(name);
      if (stored) {
        value.value = JSON.parse(stored);
      } else value.value = [];
      updateLocalStorage(name, value);
    } catch {
      console.log("Error");
    }
  };

  loadFromLocalStorage("favorites", favoritesList);
  loadFromLocalStorage("cart", cartList);

  const favoriteCount = computed(() => favoritesList.value.length);
  const cartCount = computed(() => cartList.value.length);

  const lists = {
    favorites: favoritesList,
    cart: cartList,
  };
  type listType = "favorites" | "cart";

  const toggleItemInList = (list: listType, productId: number) => {
    try {
      if (lists[list].value.some((item) => item.id === productId)) {
        lists[list].value = lists[list].value.filter(
          (item) => item.id !== productId
        );
        updateLocalStorage(list, lists[list]);
      } else {
        const newItem = { id: productId, dateAdded: Date.now(), quantity: 1 };
        lists[list].value.push(newItem);
        updateLocalStorage(list, lists[list]);
        return newItem;
      }
    } catch (e) {
      console.log("Error " + e);
    }
  };

  const changeCartQuantity = (productId: number, value: number) => {
    try {
      const product = cartList.value.filter((item) => item.id === productId)[0];
      if (product) {
        product.quantity += value;
        updateLocalStorage("cart", cartList);
      }
    } catch (e) {
      console.log("Error " + e);
    }
  };

  const finalPrice = computed(() => {
    const productStore = useProductStore();
    let res = 0;
    cartList.value.forEach((cartItem) => {
      const product = productStore.findById(cartItem.id)
      res += product!.price * cartItem.quantity;
    });
  
    return res + productStore.deliveryPrice;
  });

  return {
    favoritesList,
    favoriteCount,
    cartList,
    cartCount,
    toggleItemInList,
    changeCartQuantity,
    finalPrice
  };
});
