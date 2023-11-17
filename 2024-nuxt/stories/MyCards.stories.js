import MyCards from '../components/MyCards.vue'

export default {
    title: 'MyCards',
    component: MyCards,
    argTypes: {
        buttonLabel: {
            control: "text"
        },
        imageSrc: {
            control: "text"
        },
        imageAlt: {
            control: "text"
        },
        note: {
            control: "text"
        },
        prix: {
            control: "text"
        },
        title: {
            control: "text"
        },

    },
}
export const Cards = {
    render: (args) => {
        return {
            components: {
                MyCards,
            },
            setup() {
                return { args }
            },
            template: `<MyCards/>`
        }
    },

}