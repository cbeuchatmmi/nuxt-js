<template>
    <div class="newsletter">
        <div class="newsletter__image">
            <img src="Burger.png" alt="">
        </div>
        <div class="newsletter__content">
            <MyTitle h="h3" content="Subscribe To Our Newsletter" />
            <MyParagraph class="newsletter__content--paragraph" p="p1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus mauris sem sed urna venenatis vivamus. Egestas in velit nulla viverra turpis id ac. Amet faucibus tempus." />
            <div class="newsletter__input">
                <input class="newsletter__input--input" type="text" placeholder="Type your email.....">
                <MyButton color="primary" h="p2" size="small">SUBSCRIBE</MyButton>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.newsletter {
    position: relative;
    background-color: $black;
    height: rem(289);
    border: rem(1);
    border-radius: rem(30);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-template-areas:
        "image content";
    margin-left: rem(150);
    margin-right: rem(150);
    margin-top: rem(135);



    &__image {
        grid-area: image;
        display: flex;
        justify-content: center;
        width: rem(620);
        height: rem(570);
        position: absolute;
        top: rem(-115);
    }

    &__content {
        grid-area: content;
        color: $white;
        padding: rem(20);
        width: rem(532);
        justify-content: center;
        align-items: center;
        margin-left: rem(106);

        &--paragraph {
            margin-top: rem(15);
            margin-bottom: rem(15);
        }
    }

    &__input {
        display: flex;
        justify-content: space-between;
        background-color: $white;
        border-radius: rem(10);
        padding: rem(5);

        &--input {
            color: $black;
            border-radius: rem(30);
            font-size: $regular-font-size;
            border: none;
            margin-left: rem(5);
            padding: rem(10);
        }
    }
}
</style>





