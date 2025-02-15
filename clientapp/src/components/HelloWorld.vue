<template>
  <v-parallax 
      :src="props.src" 
      :height="props.height"
      class="mt-n16"
  >
    <v-container class="fill-height text-white">
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12">
          <span class="text-h5 d-block mb-6 font-weight-bold" v-html="props.subtitle"></span>
          <span :class="titleClass">{{ props.title }}</span>
          <span>{{ props.text }}</span>
          <v-btn v-for="b in props.actions" :key="b.text" variant="outlined" rounded="0" :to="b.to" :href="b.href" :target="b.href ? '_blank': ''" :prepend-icon="b.icon">{{ b.text }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const isMobile = computed(() => mobile.value)
const titleClass = computed(() => {
  return {
    'text-h1': !isMobile.value,
    'text-h2': isMobile.value,
    'd-block': true,
    'mb-4': true,
    'font-weight-thin': true
  }
})

type HeroAction = {
  text: string,
  to: string | undefined,
  href: string | undefined,
  icon: string | undefined
}

const props = defineProps({
  src: { type: String, default: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/bg.jpg' },
  height: { type: Number, default: 700 },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  text: { type: String, required: false },
  actions: { type: Array<HeroAction>, default: [] }
})
</script>
