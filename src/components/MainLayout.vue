<template>
    <div>
        <header class="default-navbar  main-page">
            <div class="in-block-container">
                <a aria-current="page" class="" href="/">
                    <div class="Logo"><img alt="logo" src="../assets/img/logo.svg" data-rjs="2"></div>
                </a>
                <div class="navbar-wrapper"><nav><div>
                    <div class="svg-wrapper burger">
                        <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="22" height="3" rx="1.5" fill="#2D2926"></rect><rect y="8" width="22" height="3" rx="1.5" fill="#2D2926"></rect><rect y="16" width="22" height="3" rx="1.5" fill="#2D2926"></rect></svg>
                    </div>
                </div>
                    <ul class="show-menu">
                        <li class="menu-item">
                            <a aria-current="page" class="" href="/">
                                <router-link to="/">Portfolio</router-link>
                            </a>
                        </li>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="/">Portfolio</a>
                            </li>
                        </ul>
                        <li class="menu-item">
                            <a href="/services">
                                <router-link to="/services">Services</router-link>
                            </a>
                        </li>
                        <li class="menu-item">
                            <a href="/">
                                <router-link to="/">Blog</router-link>
                            </a>
                        </li>
                        <li class="menu-item elem">
                            <a href="/">
                                <router-link to="/">Get a quote</router-link>
                            </a>
                        </li>
                        <span class="close-menu"></span>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
        <slot></slot>
        <footer id="footer">
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'MainLayout',
    }
</script>