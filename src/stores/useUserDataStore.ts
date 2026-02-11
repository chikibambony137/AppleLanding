import { defineStore } from "pinia";
import { computed, ref, type Ref } from "vue";

export const useUserDataStore = defineStore("userData", () => {
  const favoritesList: Ref<number[]> = ref([]);
  const cart: Ref<number[]> = ref([]);

  const updateLocalStorage = () => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favoritesList.value));
      console.log("localStorage is updated");
    } catch {
      console.error("error localStorage");
    }
  };

  const loadFromLocalStorage = () => {
    try {
      const favorites = localStorage.getItem("favorites");
      if (favorites) {
        favoritesList.value = JSON.parse(favorites);
      }
      else favoritesList.value = [];
      updateLocalStorage();
    } catch {
      console.log("Error");
    }
  };

  loadFromLocalStorage();

  const favoriteCount = computed(() => favoritesList.value.length);

  const toggleFavoriteProduct = (productId: number) => {
    try {
        if (!(favoritesList.value.includes(productId))) {
            favoritesList.value.push(productId);
            updateLocalStorage();
        }
        else {
            favoritesList.value = favoritesList.value.filter(id => id !== productId);
            updateLocalStorage();
        }
    }
    catch(e) {
        console.log("Error " + e);
    }
  }

  return { favoritesList, favoriteCount, toggleFavoriteProduct };
});
