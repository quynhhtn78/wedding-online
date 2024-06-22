<template>
    <div class="loading-indicator">
        <div class="book">
            <div class="heart-cover">
                <svg width="50" height="40" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M49.9999 19.1807C23.7224 -31.8686 -47.9932 29.5915 49.9999 79.9999C49.9999 79.9999 50.0001 79.9998 49.9999 19.1807ZM50.0001 19.1807C76.2776 -31.8686 147.993 29.5915 50.0001 79.9999C50.0001 79.9999 49.9999 79.9998 50.0001 19.1807Z"
                        fill="currentColor" />
                </svg>
            </div>
            <div class="heart-page" v-for="i in 3">
                <svg width="25" height="40" viewBox="0 0 50 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.54787e-05 19.1808C26.2776 -31.8685 97.9932 29.5915 6.54787e-05 80C6.54787e-05 80 -8.18484e-05 79.9999 6.54787e-05 19.1808Z"
                        fill="currentColor" />
                </svg>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@light-color: #fd80bf;
@dark-color: #fd67b2;

.loading-indicator {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &::before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
        height: 100%;
        background: conic-gradient(transparent 47%, @dark-color 47%, @dark-color 53%, transparent 53%);
        background-color: #66141413;
        border-radius: 50%;
        box-sizing: border-box;
        transform: rotate(-180deg);
        animation: spin 1.5s infinite linear;
    }

    &::after {
        content: '';
        position: absolute;
        z-index: 2;
        top: 4px;
        width: calc(100% - 8px);
        height: calc(100% - 8px);
        background-color: white;
        border-radius: 50%;
        box-sizing: border-box;
    }
}

.book {
    position: relative;
    top: 2px;
    z-index: 3;
    margin: 0 auto;
    width: 50px;
    height: 40px;

    .heart-cover {
        position: absolute;
        z-index: 0;
        color: @light-color;
    }

    .heart-page {
        position: absolute;
        left: 50%;
        margin: 0 auto;
        color: @light-color;
        width: 25px;
        height: 40px;
        transform-origin: 0% 50%;
        -webkit-animation: flip 1.2s infinite linear;
        animation: flip 1.2s infinite linear;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;

    }

    .heart-page:nth-child(1) {
        z-index: 3;
        -webkit-animation-delay: 1.4s;
        animation-delay: 1.4s;
    }

    .heart-page:nth-child(2) {
        z-index: 2;
        -webkit-animation-delay: 2.8s;
        animation-delay: 2.8s;
    }

    .heart-page:nth-child(3) {
        z-index: 1;
        -webkit-animation-delay: 4.2s;
        animation-delay: 4.2s;
    }
}

@-webkit-keyframes spin {
    from {
        transform: rotate(-180deg);
    }

    to {
        transform: rotate(180deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(-180deg);
    }

    to {
        transform: rotate(180deg);
    }
}

@-webkit-keyframes flip {
    0% {
        transform: perspective(300px) rotateY(0deg);
    }

    20% {
        color: @dark-color;
    }

    29.9% {
        color: @dark-color;
    }

    30% {
        transform: perspective(100px) rotateY(-90deg);
        color: @light-color;
    }

    54.999% {
        opacity: 1;
    }

    55% {
        opacity: 0;
    }

    60% {
        transform: perspective(100px) rotateY(-180deg);
        color: @light-color;
    }

    100% {
        transform: perspective(100px) rotateY(-180deg);
        color: @light-color;
    }
}

@keyframes flip {
    0% {
        transform: perspective(300px) rotateY(0deg);
    }

    20% {
        color: @dark-color;
    }

    29.9% {
        color: @dark-color;
    }

    30% {
        transform: perspective(100px) rotateY(-90deg);
        color: @light-color;
    }

    54.999% {
        opacity: 1;
    }

    55% {
        opacity: 0;
    }

    60% {
        transform: perspective(100px) rotateY(-180deg);
        color: @light-color;
    }

    100% {
        transform: perspective(100px) rotateY(-180deg);
        color: @light-color;
    }
}</style>