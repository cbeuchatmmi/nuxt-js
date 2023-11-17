import MyTitle from '../components/elements/MyTitle.vue'

export default {
    title: 'Elements/MyTitle',
    component: MyTitle,
    argTypes: {
        h: {
            control: "text",
        },
        content: {
            control: "text",

        },


    },
}
export const Title = {
    render: (args) => {
        return {
            components: {
                MyTitle,
            },
            setup() {
                return { args }
            },
            template: `<MyTitle v-bind="args"/>`
        }
    },
    args: {

    }
}