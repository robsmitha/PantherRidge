<template>
    <v-sheet color="blue-grey-darken-4" class="pb-3">
        <v-container>
            <v-card color="transparent"  subtitle="Amentities" title="Experience the Old Florida" flat>
                <v-card-text>
                    <v-row>
                        <template v-for="f in features">
                            <v-col v-if="f.enabled" :key="f.title" md="4" sm="6" cols="12">
                                <v-card
                                    class="fill-height"
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
        enabled: true
    },
    {
        title: 'Elaborate Scenery',
        subtitle: 'Beautiful gardens and outdoor views',
        text: 'Immerse yourself in stunning natural surroundings, from lush gardens to serene wooded areas.',
        to: '/',
        icon: 'mdi-forest',
        enabled: true
    },
    {
        title: 'Complete Privacy',
        subtitle: 'Large lots with plenty of space',
        text: 'Enjoy seclusion and tranquility with spacious estate-sized lots designed for ultimate privacy.',
        to: '/',
        icon: 'mdi-eye-off',
        enabled: true
    }
];
</script>