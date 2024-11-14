<template>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Admin - Dashboard</title>
        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">

    </head>

    <body>
        <div id="wrapper"  >
            <AppSidebar class="sidebar-fixed" />
            <div id="content-wrapper"  >
                <div id="content">

                    <AppNavbar class="navbar-fixed" />

                    <div class="container-fluid content-scrollable">
                        <RouterView />
                    </div>

                </div>
                <AppFooter class="footer-fixed" />
            </div>
        </div>
    </body>

</template>

<script setup>
import AppNavbar from '../components/navbar/AppNavbar.vue';
import AppSidebar from '../components/sidebar/AppSidebar.vue';
import AppFooter from '../components/footer/AppFooter.vue'; 
</script>

<style scoped> 
</style>