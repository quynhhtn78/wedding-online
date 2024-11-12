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
            <div class="input-text">
                <label for="guest-name">Lời chúc từ</label>
                <input class="input" type="text" placeholder="Nhập tên bạn" v-model="name"/>
            </div>
            
            <div class="input-text">
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
  <div class="bank-info-section">
    <h4>Bạn có muốn gửi tiền mừng đến cô dâu và chú rễ?</h4>
    <div class="bank-info">
      <img src="@/assets/images/bank-qr.png"/>
      <h4>Số tài khoản: <span>050114086425 (SACOMBANK)</span></h4>
      <h4>Chủ tài khoản: <span>DUONG NGUYEN QUE ANH</span></h4>
    </div>
  </div>
</template>
<style lang="less" scoped>
.wish-form-section {
    background-color: #fae2de;
    border: 8px solid white;
  
    .form {
        padding: 32px 32px 56px;
        
        h4 {
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            text-align: left;
            margin-bottom: 24px;
            color: #373B40;
        }
    }
    .btn-submit {
        width: 100%;
        background-color: @blue-tiffany;
        font-weight: 600;
        text-transform: capitalize;
    }
}

.bank-info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background-color: #fddd61;
  border: 8px solid white;
  
  h4 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    margin-bottom: 24px;
  }
  
  .bank-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > img {
      width: 240px;
      height: 240px;
      border-radius: 10px;
      margin-bottom: 24px;
    }
    
    > h4 {
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 16px;
      
      > span {
        display: block;
        background-color: #ffe2ec;
        color: #2c3a3a;
        padding: 4px;
        border-radius: 4px;
        //background: #596C6F;
        box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
        font-family: "Lato", sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.05em;
        //color: #FFFFFF;
      }
    }
  }
}
</style>