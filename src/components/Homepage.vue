<template>
    <main-layout>
        <div class="container">
            <span class="numbers"></span>
            <div class="content m-p">
                <h1 class="title-header whatwe">What we offer</h1>
                <div class="tech-wrapper">
                    <div class="tech-item list">
                        <div class="info_item">
                            <h2>React.js</h2>
                            <p>React Native is a JavaScript framework, designed for building genuinely native apps for platforms like iOS and Android.</p>
                            <a><span>Check code samples</span></a>
                        </div>
                    </div>
                    <div class="tech-item">
                        <span class="rect_1"></span>
                        <span class="rect_2"></span>
                        <span class="rect_3"></span>
                        <span class="square_1"></span>
                        <span class="square_2"></span>
                        <div class="flex_items">
                            <div class="card_1">
                                <span>Javascript</span>
                                <ul class="card-items">
                                    <li><span class="active">React.js</span></li>
                                    <li>React Native</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                            <div class="card_2">
                                <span>Python</span>
                            <ul class="card-items">
                                <li class="active">Django</li>
                                <li>Flask</li>
                            </ul>
                            </div>
                        </div>
                        <div id="slide_block">
                            <span class="elem active"></span>
                            <span class="elem"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>

    import MainLayout from "./MainLayout";
    export default {
        name: 'Homepage',
        props: {
            msg: String
        },
        components: {
            MainLayout
        }
    }
</script>
<style scoped>

</style>
