<template>
    <div class="app ng-scope app-header-fixed app-aside-fixed" :class="{'app-aside-folded':isSidebarCollapsed}">
        <lb-header @sidebarCollapsed="sidebarCollapsed" />
        <lb-sidebarmenu />
        <div class="app-content ng-scope">
            <router-view></router-view>
        </div>
        <lb-footer />
    </div>
</template>