<template>
    <div class="c-footer">
        <div class="c-footer__col">
            <a class="c-footer__logo" href="/">
                <img class="c-footer__logo--img" src="logo.png" alt="logo">
            </a>
            <MyParagraph p="p1"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id." />
            <div class="c-footer__reseaux">
                <ul class="c-footer__reseaux--ul">
                    <li><img src="Facebook.png" alt="Icon Facebook"></li>
                    <li><img src="Twitter.png" alt="Icon Twitter"></li>
                    <li><img src="Linkind.png" alt="Icon LinkedIn"></li>
                    <li><img src="Instagram.png" alt="Icon Instagram"></li>
                </ul>
            </div>
        </div>
        <div class="c-footer__col">
            <MyTitle class="c-footer__col--title" h="h4" content="Opening Restaurant" />
            <ul class="c-footer__col--ul">
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Sat-Wet: 09:00am-10:00PM" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Thursdayt: 09:00am-11:00PM" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Friday: 09:00am-8:00PM" />
                </li>
            </ul>
        </div>
        <div class="c-footer__col">
            <MyTitle class="c-footer__col--title" h="h4" content="User Link" />
            <ul class="c-footer__col--ul">
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="About Us" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Contact Us" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Order Delivery" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Payment & Tex" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="Terms of Services" />
                </li>
            </ul>
        </div>
        <div class="c-footer__col">
            <MyTitle class="c-footer__col--title" h="h4" content="Contact Us" />
            <ul class="c-footer__col--ul">
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="1234 Country Club Ave" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="NC 123456, London, UK" />
                </li>
                <li>
                    <MyParagraph class="c-footer__col--paragraph" p="p1" content="+0123 456 7891" />
                </li>
            </ul>
            <div class="c-footer__input">
                <input class="c-footer__input--input" type="text" placeholder="Enter your email....">
                <MyIcon bgcolor="primary" name="chevron" size="small" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.c-footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    color: $grey;
    margin-top: rem(155);

    &__logo {
        &--img {
            height: rem(108);
            margin-bottom: rem(30);
        }
    }

    &__col {
        &--title {
            color: $black;
            margin-bottom: rem(68);
        }

        &--ul {}

        &--paragraph {
            margin-bottom: rem(13);
        }
    }

    &__reseaux {
        display: flex;
        margin-top: rem(10);

        &--ul {
            list-style: none;
            padding: 0;
            display: flex;
            gap: rem(10);
        }
    }

    &__input {
        background-color: white;
        border-radius: rem(50);
        box-shadow: 0 0 5px 0 $grey;
        display: flex;
        justify-content: space-between;
        padding: rem(5);
        width: rem(290);

        &--input {
            color: $grey;
            border-radius: rem(30);
            font-size: $regular-font-size;
            border: none;
            margin-left: rem(5);
            padding: rem(10);
        }
    }
}
</style>