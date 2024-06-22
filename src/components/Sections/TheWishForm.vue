<script setup>
import { computed, ref } from "vue";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebase-config.json";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Loading from "../icons/Loading.vue";
import IconClose from "../icons/IconClose.vue";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let isLoading = ref(false);
let isSubmited = ref(false);
let successMessage = ref("Cảm ơn bạn đã gửi lời chúc!");
let name = ref("");
let message = ref("");

function sendWish() {
    if (isSubmitDisabled.value)
        return;

    const wishData = {
        name: (name.value || '').trim(),
        message: (message.value || '').trim(),
        sendAt: new Date()
    };

    isLoading.value = true;
    const wishesCol = collection(db, 'wishes');
    addDoc(wishesCol, wishData).then(res => {
        isSubmited.value = true;
    })
    .finally(() => isLoading.value = false);
}

function closeMessage() {
    isSubmited.value = false;
}

let isSubmitDisabled = computed(() => {
    return !(name.value || '').trim() || !(message.value || '').trim();
});

</script>

<template>
    <div class="wish-form-section" id="wishForm">
        <div class="form" :class="{ 'is-loading': isLoading, 'is-submited': isSubmited }">
            <Loading v-if="isLoading"/>
            <h4>Bạn có muốn gửi lời chúc đến cô dâu và chú rễ?</h4>
            <div class="input-text dark">
                <label for="guest-name">Lời chúc từ</label>
                <input class="input" type="text" placeholder="Nhập tên bạn" v-model="name"/>
            </div>
            
            <div class="input-text dark">
                <label for="guest-wish">Nội dung</label>
                <textarea name="guest-wish" rows="6" placeholder="Bạn muốn nhắn gửi gì đến cô dâu và chú rễ?" v-model="message"></textarea>
            </div>

            <div class="footer actions">
                <button class="btn-block btn-submit" @click="sendWish" :disabled="isSubmitDisabled">Gửi lời chúc</button>
            </div>
            <div class="success-confirm" v-if="isSubmited">
                {{ successMessage }}
                <span class="btn-close"  @click="closeMessage"><IconClose/></span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.wish-form-section {
    background-color: @light-gray;

    .form {
        padding: 32px 32px 56px;
        
        h4 {
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;
            text-align: left;
            margin-bottom: 24px;
        }
    }
    .btn-submit {
        width: 100%;
        background-color: @blue-tiffany;
        font-weight: 600;
        text-transform: capitalize;
    }
}
</style>