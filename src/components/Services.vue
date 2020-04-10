<template>
    <main-layout>
        <div class="container">
            <span class="numbers"></span>
            <div class="content m-p">
            <h1 class="title-header">Services</h1>
                <div class="item-elem">
                    <div class="tabs flex-tabs">
                        <label class="tab active"><span>Discover Phase</span></label>
                        <label class="tab"><span>Agile Development</span></label>
                        <label class="tab"><span>Dedicated Teams</span></label>
                    </div>
                </div>

                <div class="carousel-containter">
                <ul class="offer">
                    <span class="draw_vector"></span>
                    <li class="offer-item">
                        <div class="item-offer__container">
                            <div class="offer_detail offer__image--first"></div>
                            <div class="card__content">
                                <div class="card__title">Tech Architect</div>
                                <p class="card__text">We create a plan of team size, structure and identify qualification requirements</p>
                            </div>
                        </div>
                    </li>
                    <li class="offer-item">
                        <div class="item-offer__container">
                            <div class="offer_detail offer__image--second"></div>
                            <div class="card__content">
                                <div class="card__title">Business Analysis</div>
                                <p class="card__text">We search for IT experts with the appropriate knowledge</p>
                            </div>
                        </div>
                    </li>
                    <li class="offer-item">
                        <div class="item-offer__container">
                            <div class="offer_detail offer__image--third"></div>
                            <div class="card__content">
                                <div class="card__title">UX/UI Design</div>
                                <p class="card__text">Gathered experts start working during regular hours  only on client’s project.</p>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from "./MainLayout";
    export default {
        name: 'Portfolio',
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
