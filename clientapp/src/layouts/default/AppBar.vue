<template>
    <v-app-bar 
      :color="!drawer && transparency ? 'transparent' : 'blue-grey-darken-4'" 
      :class="{
        'text-white': !drawer && transparency
      }" 
      flat
      fixed
    >
      <template #prepend>
        <v-app-bar-nav-icon v-if="false" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <span v-if="!$vuetify.display.mobile" class="text-uppercase">
          Panther Ridge
        </span>
        <span  class="text-uppercase text-subtitle-1" v-else>
          Panther Ridge
        </span>
      </v-app-bar-title>
      <v-spacer />
      <v-btn href="https://g.co/kgs/kD4X6zK" target="_blank" icon>
        <v-icon>mdi-map-marker-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        temporary
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-horseshoe" title="Home" value="home" to="/"></v-list-item>
        <!-- <v-list-item prepend-icon="mdi-magnify" title="Find Card" value="search" to="/search"></v-list-item>

        <v-list-item subtitle="External Links"></v-list-item>
        <v-list-item prepend-icon="mdi-link-variant" title="Socials & Podcast" href="https://linktr.ee/geekscloset" target="_blank"></v-list-item>
        <v-list-item prepend-icon="mdi-shopping-outline" title="Shop Here" href="https://www.ebay.com/str/bemysalesman" target="_blank"></v-list-item>

        <v-list-item :subtitle="auth.signedIn ? auth.userDetails : 'Administration'"></v-list-item>
        <template v-if="auth.signedIn">
          <v-list-item prepend-icon="mdi-cards-outline" title="GCG Cards" href="/admin"></v-list-item>
          <v-list-item prepend-icon="mdi-nuke" title="Remove Personal Data" href="/.auth/purge/aad"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" title="Sign out" href="/.auth/logout"></v-list-item>
        </template>
        <v-list-item v-else prepend-icon="mdi-login" title="Sign in" href="/.auth/login/aad"></v-list-item> -->
      </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useAppStore } from "@/store/app"
import { useAuthStore } from "@/store/auth"
import { useRoute } from 'vue-router'
const route = useRoute()

const store = useAppStore()
//store.fetchContent()

const auth = useAuthStore()
//auth.fetchAuth()

const drawer = ref(false)
const transparency = ref(false)

watch(route, (newVal) => {
    transparency.value = newVal.path === '/'
}, { immediate: true })

onMounted(() =>{
  window.addEventListener('scroll', () => {
    transparency.value = route.path === '/' && window.scrollY <= 75
  })
})
</script>
