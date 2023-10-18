import MyCardFF from '../components/MyCardFF.vue'

export default {
    title: 'MyCardFF',
    component: MyCardFF,
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
                MyCardFF,
            },
            setup() {
                return { args }
            },
            template: `<MyCardFF v-bind="args"/>`
        }
    },
    args: {
        icon: 'horloge',
        title: 'Type de plat',
        subtitle: 'Nom de ce plat',
     
    }
}