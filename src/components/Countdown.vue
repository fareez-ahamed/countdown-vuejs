<template>
    <div class="block">
        <p class="digit">{{ days | two_digits }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours | two_digits }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes | two_digits }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds | two_digits }}</p>
        <p class="text">Seconds</p>
    </div>
</template>
<script>
    export default {

        props: {
            date: null,
        },

        data: function() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000),
                event: this.date,
            }
        },

        computed: {
            // using computed to take care of the calculation per the doc
            calculatedDate: function() {
                return this.event = Math.trunc(Date.parse(this.event) / 1000);
            },
            seconds: function() {
                return (this.calculatedDate - this.now) % 60;
            },

            minutes: function() {
                return Math.trunc((this.calculatedDate - this.now) / 60) % 60;
            },

            hours: function() {
                return Math.trunc((this.calculatedDate - this.now) / 60 / 60) % 24;
            },

            days: function() {
                return Math.trunc((this.calculatedDate - this.now) / 60 / 60 / 24);
            }
        },
        
        // new ready function
        mounted: function () {
            window.setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
            },1000);
        }
    }
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.text {
    color: #1abc9c;
    font-size: 40px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
}
.digit {
    color: #ecf0f1;
    font-size: 150px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
}
</style>
