import MyCardsFS from '../components/MyCardsFS.vue'

export default {
    title: 'MyCardsFS',
    component: MyCardsFS,
    argTypes: {
        imageSrc: {
            control: "text"
        },
        imageAlt: {
            control: "text"
        },
        subtitle: {
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
                MyCardsFS,
            },
            setup() {
                return { args }
            },
            template: `<MyCardsFS/>`
        }
    },

}