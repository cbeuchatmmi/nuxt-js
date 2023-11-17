import MyButton from '../components/elements/MyButton.vue'

export default {
    title: 'Elements/MyButton',
    component: MyButton,
    argTypes: {
        icon: {
            control: "boolean"
        },
        content: {
            control: "text"
        },
        href: {
            control: "text"
        },
        name: {
            control: "text"
        },
        size: {
            control: "select",
            options: ['regular', 'small']
        },
        iconSize: {
            control: "select",
            options: ['regular', 'large']
        },
        variant: {
            control: "select",
            options: ['default', 'rounded']
        },
        color: {
            control: "select",
            options: ['default', 'secondary', 'primary']
        },
        h: {
            control: "select",
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p1', 'p2']
        },
    },
}

export const PrimaryButton = {
    render: (args) => {
        return {
            components: {
                MyButton,
            },
            setup() {
                return { args }
            },
            template: `<MyButton v-bind="args"></MyButton>`
        }
    },
    args: {
        icon: "false",
        content: "My link button",
        h:"h5",
        size: "regular",
        variant: "default"
    }
}

export const SecondaryButton = {
    ...PrimaryButton,
    args: {
        icon: "false",
        content: "My link button",
        h:"h5",
        size: "regular",
        variant: "rounded"
    }
}


export const SmallPrimaryButton = {
    ...PrimaryButton,
    args: {
        icon: "false",
        content: "My link button",
        h:"h5",
        size: "small",
        variant: "default"
    }
}

export const SmallSecondaryButton = {
    ...PrimaryButton,
    args: {
        icon: "false",
        content: "My link button",
        h:"h5",
        size: "small",
        variant: "rounded"
    }
}

