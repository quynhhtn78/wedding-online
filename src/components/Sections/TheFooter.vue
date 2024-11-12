<template>
    <div class="footer-section">
        <p>Thank you</p>
        <p>Hoàng Vinh & Quế Anh</p>
    </div>
</template>
<style lang="less" scoped>
.footer-section {
    padding: 64px 32px;
    background-color: #deefee;

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
            font-size: 18px;
            color: #807771;
        }
    }
}
</style>