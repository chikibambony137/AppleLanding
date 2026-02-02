import { defineStore } from "pinia";
import type { cardType } from "../types/CardType";

export const useCaseTypesStore = defineStore('caseTypes', () => {
    const caseTypes: Array<cardType> = [
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
    ]

    return { caseTypes }
})