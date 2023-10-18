import MyCardFS from '../components/MyCardFS.vue'

export default {
    title: 'MyCardFS',
    component: MyCardFS,
    argTypes: {
        prix: {
            control: "text"
        },
        subtitle: {
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


    },
}
export const Card = {
    render: (args) => {
        return {
            components: {
                MyCardFS,
            },
            setup() {
                return { args }
            },
            template: `<MyCardFS v-bind="args"/>`
        }
    },
    args: {
        subtitle: 'Nom de ce plat',
        prix: '15.00',
        title: 'Type de plat',
        imageSrc: 'Burger.png',
        imageAlt: 'Image de plat',
    }
}