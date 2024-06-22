<script setup>
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref, onMounted } from 'vue';

const totalImage = 29;
const albumImages = ref([]);
for (let index = 0; index < totalImage; index++) {
    albumImages.value.push( new URL(`/src/assets/images/album/hinh-${index + 1}.jpg`, import.meta.url).href  );
};

onMounted(() => {
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay, Navigation],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document.documentElement.style.setProperty('--swiper-navigation-size', '30px');
    document.documentElement.style.setProperty('--swiper-navigation-sides-offset', '-10px');
});

</script>

<template>
    <div class="album-section">
        <div class="title">
            Album
        </div>
        <div class="album-swiper">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" 
                        v-for="(value, index) in albumImages" 
                        :key="index">
                        <img :src="value" alt="album image"/>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.album-section {
    padding: 32px 0;

    .title {
        font-family: 'SVN-Saint Monica', serif;
        font-size: 36px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: @dark-gray;
        text-align: center;
        margin-bottom: 24px;
    }
    
    .album-swiper {
        width: 100%;
        height: auto;
        padding: 16px;
        overflow: hidden;

        .swiper {
            width: 100%;
            height: 100%;
            padding: 0 30px;
            overflow: visible;

            .swiper-slide {
                width: 100%;
                height: auto;
                transition: all 0.25s ease-in;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }

                &.swiper-slide-prev, &.swiper-slide-next {
                    opacity: 0.3;
                }
            }

            .swiper-button-prev,  .swiper-button-next {
                color: @dark-gray;
            }
        }
    }
}
</style>