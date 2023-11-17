import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        count: 0,
        cart: [],

    }),
    getters: {
        count() {
            return this.cart.length;
        },
    },
    actions: {
        setCart(ids) {
            this.cart = ids
        },

        addToCart(id) {

            if (!this.cart.includes(id)) {
                this.cart.push(id)
                localStorage.setItem('cart', JSON.stringify(this.cart))


            }
            else {
                const idIndex = this.cart.indexOf(id)
                if (idIndex === -1) return
                this.cart.splice(idIndex, 1)
                localStorage.setItem('cart', JSON.stringify(this.cart))

            }
        },
        removeFromCart(id) {
            const idIndex = this.cart.indexOf(id)
            if (idIndex === -1) return
            this.cart.splice(idIndex, 1)
        }
    }
})