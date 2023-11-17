import MyCard from '../components/MyCard.vue'


export default {
    title: 'MyCard',
    component: MyCard,
    argTypes: {
        prix: {
            control: "text"
        },
        note: {
            control: "text"
        },
        title: {
            control: "text"
        },
        imageSrc: {
            control: "text"
        },
        imageAlt: {
            control: "text"
        },
        buttonLabel: {
            control: "text"
        },

    },
}
export const Card = {
    render: (args) => {
        return {
            components: {
                MyCard,
            },
            setup() {
                return { args }
            },
            template: `<MyCard v-bind="args"/>`
        }
    },
    args: {
        note: '4.9',
        prix: '15.00',
        title: 'Nom du plat',
        imageSrc: 'Gyro_sandwich.jpg',
        imageAlt: 'Image de plat',
        buttonLabel: 'Add to card',
    }
}