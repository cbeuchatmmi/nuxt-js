import MyIcon from '../components/elements/MyIcon.vue'

export default {
    title: 'Elements/MyIcon',
    component: MyIcon,
    argTypes: {
        name: {
            control: "select",
            options: ['arrowleft', 'arrowright', 'chevron', 'healthy', 'horloge', 'locate', 'phone', 'play', 'quality', 'truck', 'uber']
        },
        bgcolor: {
            control: "select",
            options: ['default', 'primary', 'secondary', 'black', 'white']
        },
        size: {
            control: "select",
            options: ['default', 'large']
        },

    },
}
export const Icon = {
    render: (args) => {
        return {
            components: {
                MyIcon,
            },
            setup() {
                return { args }
            },
            template: `<MyIcon v-bind="args"/>`
        }
    },
    args: {

    }
}