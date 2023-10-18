import MyShortLists from '../components/MyShortLists.vue'

export default {
    title: 'MyShortLists',
    component: MyShortLists,
    argTypes: {
        icon:{
            control: "select",
            options: ['arrowleft', 'arrowright', 'chevron', 'healthy', 'horloge', 'locate', 'phone', 'play', 'quality', 'truck', 'uber']
        },
        
        subtitle: {
            control: "text"
        },
        title: {
            control: "text"
            
        },

    },
}

export const ShortLists = {
    render: (args) => {
        return {
            components: {
                MyShortLists,
            },
            setup() {
                return { args }
            },
            template: `<MyShortLists/>`
        }
    },

}