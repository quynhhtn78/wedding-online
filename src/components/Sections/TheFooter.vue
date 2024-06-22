<template>
    <div class="footer-section">
        <p>Thank you</p>
        <p>Gia Long & Hải Đường</p>
    </div>
</template>
<style lang="less" scoped>
.footer-section {
    padding: 64px 32px;
    background-color: @darker-gray;

    p {
        font-family: 'SVN-Saint Monica', serif;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.05em;

        &:nth-child(1) {
            font-size: 48px;
            color: @light-gray;
        }

        &:nth-child(2) {
            font-size: 24px;
            color: @light-mint;
        }
    }
}
</style>