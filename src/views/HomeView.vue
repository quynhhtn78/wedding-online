<script setup>
import TheWelcome from '@/components/Sections/TheWelcome.vue';
import TheIntroduction from '@/components/Sections/TheIntroduction.vue';
import TheInvitation from '@/components/Sections/TheInvitation.vue';
import TheMessage from '@/components/Sections/TheMessage.vue';
import TheConfirmForm from '@/components/Sections/TheConfirmForm.vue';
import TheWishForm from '@/components/Sections/TheWishForm.vue';
import TheAlbum from '@/components/Sections/TheAlbum.vue';
import TheFooter from '@/components/Sections/TheFooter.vue';
import { ref } from 'vue';

const confirmFormRefEl = ref<HTMLElement | null>(null);
const wishFormRefEl = ref<HTMLElement | null>(null);

const scrollTo = (elementId) => { 
  document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
}

</script>

<template>
  <main>
    <TheWelcome />
    <div class="action-buttons">
        <button class="btn-block confirm-come-in" @click="scrollTo('comfirmForm')">Xác nhận tham dự</button>
        <button class="btn-block send-wish" @click="scrollTo('wishForm')">Gửi lời chúc</button>
    </div>
    <TheIntroduction/>
    <TheInvitation/>
    <TheMessage/>
    <TheConfirmForm ref="confirmFormRefEl"/>
    <TheWishForm ref="wishFormRefEl"/>
    <TheAlbum/>
    <TheFooter/>
  </main>
</template>
<style lang="less" scoped>
.action-buttons {
    display: flex;
    gap: 16px;
    padding: 16px;

    .btn-block {
        flex: 1;

        &.confirm-come-in {
          font-weight: 600;
            background-color: @blue-tiffany;
        }

        &.send-wish {
          font-weight: 600;
            background-color: @green-pistachio;
        }
    }
}
</style>