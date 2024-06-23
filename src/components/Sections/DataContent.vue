<script setup>
import { ref } from "vue";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../../firebase-config.json";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Loading from "../icons/Loading.vue";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let isLoadingGuests = ref(false);
let isLoadingWishes = ref(false);
let guests = ref([]);
let wishes = ref([]);

loadGuests();
loadWishes();

async function getGuests() {
  const col = collection(db, 'guests');
  const snapshot = await getDocs(col);
  const dataList = snapshot.docs.map(doc => doc.data());
  return dataList;
}

async function getWishes() {
  const col = collection(db, 'wishes');
  const snapshot = await getDocs(col);
  const dataList = snapshot.docs.map(doc => doc.data());
  return dataList;
}

function loadGuests() {
    isLoadingGuests.value = true;
  getGuests()
  .then(res => {
    guests.value = res;
  })
  .finally(() => isLoadingGuests.value = false);
}

function loadWishes() {
    isLoadingWishes.value = true;
  getWishes()
  .then(res => {
    wishes.value = res;
  })
  .finally(() => isLoadingWishes.value = false);
}

function getTotalComeInGuests() {
    return guests.value.filter(doc => doc.comeIn).length;
}

</script>

<template>
    <div class="data-content-section">
        <h2 class="title">Danh sách khách mời</h2>

        <div class="grid-container guests-grid" :class="{'is-loading': isLoadingGuests}">
            <Loading v-if="isLoadingGuests"/>
            <div v-if="!isLoadingGuests" class="main-content">
                <div>
                    <p>Xác nhận tham dự: {{ getTotalComeInGuests() }} / {{ guests.length }}</p>
                </div>
                <div class="table">
                    <div class="header">
                        <div>STT</div>
                        <div>Tên</div>
                        <div class="center">Trạng thái</div>
                    </div>
                    <div class="content">
                        <div v-for="(g, index) in guests" class="item">
                            <div>{{ index + 1 }}</div>
                            <div>{{ g.name }}</div>
                            <div class="center">
                                <span class="status" :class="{ 'come-in': g.comeIn }">{{ g.comeIn ? 'Tham gia' : 'Không' }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="title">Lời chúc <span v-if="!isLoadingWishes">({{ wishes.length }})</span></h2>

        <div class="wishes-container" :class="{'is-loading': isLoadingWishes}">
            <Loading v-if="isLoadingWishes"/>
            <div v-if="!isLoadingWishes" class="wishes-list">
                <div v-for="(item, index) in wishes" class="wish-card">
                    <div class="header">
                        <p>From: </p>
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="content">
                        <p>{{ item.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.data-content-section {
    padding: 16px 16px 80px;

    * {
        font-family: "Inter", sans-serif;
    }

    .is-loading {
        &:after {
            background-color: #ffffff;
        }
    }

    .title {
        font-size: 24px;
        font-weight: 600;
        padding: 16px 0;

        &:not(:first-of-type) {
            margin-top: 32px;
        }
    }

    .wishes-container {
        min-height: 300px;
    }

    .wishes-list {
        width: 100%;

        display: flex;
        flex-wrap: wrap;
        align-items: start;
        gap: 16px;

        .wish-card {
            width: calc(~"50% - 20px");
            max-width: 300px;
            background-color: white;
            border-radius: 16px;
            padding: 4px;

            .header {
                padding: 8px 16px;
                display: flex;
                gap: 8px;

                border-bottom: 1px solid @light-gray;
                
                p {
                    &:nth-child(1) {
                    }

                    &:nth-child(2) {
                        font-weight: 600;
                    }
                }
            }

            .content {
                padding: 8px 16px;
                min-height: 100px;

                p {
                    font-family: "Meow Script", cursive;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 28px;
                }
            }
        }
    }
}
</style>