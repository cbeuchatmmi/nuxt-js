import MyShortList from '../components/MyShortList.vue'

export default {
    title: 'MyShortList',
    component: MyShortList,
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
export const Card = {
    render: (args) => {
        return {
            components: {
                MyShortList,
            },
            setup() {
                return { args }
            },
            template: `<MyShortList v-bind="args"/>`
        }
    },
    args: {
        icon: 'horloge',
        title: 'Type de plat',
        subtitle: 'Nom de ce plat',
     
    }
}