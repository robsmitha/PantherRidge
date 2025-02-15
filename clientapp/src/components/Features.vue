<template>
    <v-sheet color="blue-grey-darken-4" class="pb-3">
        <v-container>
            <v-card color="transparent" title="Amenities" subtitle="Minutes away from Lakewood Ranch, I-75, restaurants, golf and more!" flat>
                <v-divider class="mt-3 mb-2" />
                <v-card-text>
                    <v-row class="mt-4">
                        <template v-for="f in features">
                            <v-col v-if="f.enabled" :key="f.title" md="4" sm="6" cols="12">
                                <v-img
                                    height="200px"
                                    :src="f.image"
                                    cover
                                    ></v-img>
                                <v-card
                                    :title="f.title" 
                                    :subtitle="f.subtitle" 
                                    :text="f.text" 
                                    :to="f.to"
                                    :href="f.href"
                                    :target="f.href ? '_blank': ''"
                                    :prepend-icon="f.icon"
                                    rounded="0"
                                    hover>
                                </v-card>
                            </v-col>
                        </template>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-container>
    </v-sheet>
</template>

<script setup lang="ts">
const features = [
    {
        title: 'Horseback Riding',
        subtitle: 'Charming country living',
        text: 'Explore scenic trails and open landscapes, perfect for equestrian enthusiasts of all levels.',
        to: '/',
        icon: 'mdi-horse',
        image: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/bg.jpg',
        enabled: true,
        href: ''
    },
    {
        title: 'Elaborate Scenery',
        subtitle: 'Beautiful gardens and outdoor views',
        text: 'Immerse yourself in stunning natural surroundings, from lush gardens to serene wooded areas.',
        to: '/',
        icon: 'mdi-forest',
        image: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/about.jpg',
        enabled: true,
        href: ''
    },
    {
        title: 'Complete Privacy',
        subtitle: '5-20 acre lots with plenty of space',
        text: 'Enjoy seclusion and tranquility with spacious estate-sized lots designed for ultimate privacy.',
        to: '/',
        icon: 'mdi-eye-off',
        image: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/PantherRidge/intro.jpg',
        enabled: true,
        href: ''
    }
];
</script>