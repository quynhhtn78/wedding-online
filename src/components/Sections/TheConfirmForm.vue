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
let successMessage = ref("Cảm ơn bạn đã xác nhận!");
let name = ref("");
let comeIn = ref();

function confirmSend() {
    if (isSubmitDisabled.value)
        return;

    const guestData = {
        name: (name.value || '').trim(),
        comeIn: comeIn.value == 'true' ? true : false,
        confirmAt: new Date()
    };

    isLoading.value = true;
    const guestsCol = collection(db, 'guests');
    addDoc(guestsCol, guestData).then(res => {
        isSubmited.value = true;
    })
    .finally(() => isLoading.value = false);
}


function closeMessage() {
    isSubmited.value = false;
}

let isSubmitDisabled = computed(() => {
    return !(name.value || '').trim() || comeIn.value == undefined;
});

</script>

<template>
    <div class="confirm-form-section">
        <div class="images-card">
            <img src="@/assets/images/images-card-1.png" />
        </div>
        <div class="form" id="comfirmForm" :class="{ 'is-loading': isLoading, 'is-submited': isSubmited }">
            <Loading v-if="isLoading"/>
            <h4>Xác nhận tham dự</h4>
            <div class="input-text">
                <label for="guest-name">Tên bạn</label>
                <input class="input" type="text" v-model="name" />
            </div>

            <div class="radio-buttons">
                <label class="radio-box">
                    <input type="radio" value="true" name="come-in" v-model="comeIn" />
                    <span class="design"></span>
                    <span class="text">Sẽ tham dự</span>
                </label>
                <label class="radio-box">
                    <input type="radio" value="false" name="come-in" v-model="comeIn" />
                    <span class="design"></span>
                    <span class="text">Không thể tham dự</span>
                </label>
            </div>

            <div class="footer actions">
                <button class="btn-block btn-submit" @click="confirmSend" :disabled="isSubmitDisabled">Xác nhận</button>
            </div>
            <div class="success-confirm" v-if="isSubmited">
                {{ successMessage }}
                <span class="btn-close" @click="closeMessage"><IconClose/></span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.confirm-form-section {
    padding-top: 16px;
    background-color: #fff2f1;

  h4 {
    color: #ffaaa9;
    font-weight: 600;
  }
  
    .images-card {
        display: flex;
        justify-content: center;
        padding: 40px 32px 16px;
      
      > img {
        width: 289px;
      }
    }

    .form {
        padding: 16px 32px 56px;
    }

    .btn-submit {
        background-color: @yellow-macaroon;
        font-weight: 600;
        text-transform: capitalize;
    }
}
</style>