<template>
    <div class="layout">
        <header class="layout-top">
            <slot name="top"></slot> <!-- Navbar slot -->
        </header>

        <aside class="layout-left">
            <slot name="left"></slot> <!-- Sidebar slot -->
        </aside>

        <main class="layout-content">
            <slot name="content"></slot> <!-- Main content -->
        </main>
    </div>
</template>

<style> 
/* .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.layout-top {
    height: 60px;
    background-color: #f5f5f5;
}

.layout-left {
    width: 200px;
    background-color: #e0e0e0;
    height: 100%;
    position: fixed;
}

.layout-content {
    margin-left: 200px;
    padding-top: 60px;
    flex-grow: 1;
    overflow: auto;
} */
</style>