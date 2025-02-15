<template>
  <v-sheet class="py-7">
    <v-container>
      <v-row>
        <v-col md="8" cols="12">
          <template v-if="!homePage">
            <v-skeleton-loader
              type="article"
              color="transparent"
            ></v-skeleton-loader>
            <v-skeleton-loader
              v-for="i in 2"
              :key="i"
              type="paragraph"
              color="transparent"
            ></v-skeleton-loader>
          </template>
          <template v-else>
            <v-card color="transparent" flat>
              <v-card-title>Experience</v-card-title>
              <v-card-subtitle>
                <span v-html="homePage.title"></span>
              </v-card-subtitle>
              <v-card-text>
                <span v-html="homePage.content"></span>
              </v-card-text>
              <template v-if="!aboutPage">
                <v-skeleton-loader
                  type="article"
                  color="transparent"
                ></v-skeleton-loader>
                <v-skeleton-loader
                  v-for="i in 2"
                  :key="i"
                  type="paragraph"
                  color="transparent"
                ></v-skeleton-loader>
              </template>
              <template v-else>
                <v-card color="transparent" flat>
                  <v-card-text>
                    <span v-html="aboutPage.content"></span>
                  </v-card-text>
                </v-card>
          </template>
              <!-- <v-card-actions>
                <v-btn to="/search" variant="tonal" :block="$vuetify.display.mobile">Search by Serial Number</v-btn>
              </v-card-actions> -->
            </v-card>
          </template>
        </v-col>
        <v-col md="4" cols="12"  class="d-flex justify-center align-center">
          <!-- <v-avatar
            color="grey"
            rounded="shaped"
            size="150"
          >
            <v-img src="https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/intro.jpg" cover></v-img>
          </v-avatar> -->
          <!-- <v-img 
            :max-width="300"
            aspect-ratio="1/1"
            cover
            src="https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/about.jpg">
          </v-img> -->
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.420018548346!2d-82.32948999999999!3d27.425017999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c336cec83c910d%3A0xcbd62a1e7ce0d07e!2s6418%20209th%20St%20E%2C%20Bradenton%2C%20FL%2034211!5e0!3m2!1sen!2sus!4v1739656817585!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from "@/store/app";
import { storeToRefs } from 'pinia'

const emit = defineEmits(['search', 'clear'])
const appStore = useAppStore();
const { homePage, aboutPage } = storeToRefs(appStore)

</script>
