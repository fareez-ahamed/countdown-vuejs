<template>
    <div class="block">
        <p class="digit">{{ days }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds }}</p>
        <p class="text">Seconds</p>
    </div>
</template>
<script>
export default {

    ready() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },

    props : {
        date : {
            type: Number,
            coerce: str => Math.trunc(Date.parse(str) / 1000)
        }
    },

    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },

    computed: {
        seconds() {
            return (this.date - this.now) % 60;
        },

        minutes() {
            return Math.trunc((this.date - this.now) / 60) % 60;
        },

        hours() {
            return Math.trunc((this.date - this.now) / 60 / 60) % 60;
        },

        days() {
            return Math.trunc((this.date - this.now) / 60 / 60 / 24) % 60;
        }
    }
}

</script>
<style>
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}

.text {
    font-size: 20px;
    margin-top:10px;
    margin-bottom: 10px;
}

.digit {
    font-size: 50px;
    margin-top:10px;
    margin-bottom: 10px;
}
</style>
