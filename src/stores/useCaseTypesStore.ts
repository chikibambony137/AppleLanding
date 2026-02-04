import { defineStore } from "pinia";
import type { caseType } from "../types/CaseType";
import { ref, type Ref } from "vue";

export const useCaseTypesStore = defineStore('caseTypes', () => {
    const caseTypes: Ref<caseType[]> = ref([
        {
            id: 0,
            name: 'Кожаные',
            img: 'caseTypes/Leather.png'
        },
        {
            id: 1,
            name: 'Стеклянные',
            img: 'caseTypes/Glass.png'
        },
        {
            id: 2,
            name: 'Силиконовые',
            img: 'caseTypes/Sylicon.png'
        },

        {
            id: 3,
            name: 'Пластмассовые',
            img: 'caseTypes/Plastic.png'
        },
    ])

    return { caseTypes }
})