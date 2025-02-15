// Utilities
import { defineStore } from 'pinia'
import { WpPage, WpPost, WpTag, WpCategory } from './types'
import apiClient from '@/api/elysianClient'

type State = {
  pages: PageContent[]
}

type PageContent = {
  title: string,
  content: string,
  slug: string
}

export const useAppStore = defineStore('app', {
  state: (): State => ({
    pages: defaultState.pages
  }),
  getters: {
    // pages
    homePage: (state: State) => state.pages.find((page) => page.slug === 'geeks-closet-home-page'),
    aboutPage: (state: State) => state.pages.find((page) => page.slug === 'geeks-closet-about-page'),
    findCardPage: (state: State) => state.pages.find((page) => page.slug === 'geeks-closet-find-card')
  },
  actions: {
    async fetchContent(): Promise<void> {
      const response = await apiClient.getData('/api/WordPressContent')
      if (!response.success){
        console.error("Failed to get page content.")
        return
      }
      
      this.pages = response.data.pages.map((p : WpPage) => {
        return {
          title: p.title.rendered,
          content: p.content.rendered,
          slug: p.slug
        }
      })
    }
  }
})


const defaultState: State = {
  pages: [
    {
      content: '\n<p>Panther Ridge, located in East Manatee County, blends country charm with estate-style living. Its expansive, natural landscape captures the essence of "old Florida," offering residents ample space for horseback riding, lush gardens, and ultimate privacy.</p><br><br><p> Single-family homes are set on generous lots ranging from five to twenty acres, featuring diverse architectural styles, from classic Southern estates and contemporary Florida homes to elegant modern country mansions. Each residence enhances the beauty of this thoughtfully designed equestrian community.</p>\n',
      title: 'Old Florida',
      slug: 'geeks-closet-home-page'
    },
    {
      content: '\n<h4 class="wp-block-heading"><strong>Lots for sale</strong></h4>\n\n\n<div style="height:25px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<a href="https://g.co/kgs/kD4X6zK" target="_blank">6418 209th ST E, Bradenton FL 34211</a>\n\n\n\n',
      title: 'Panther Ridge About',
      slug: 'geeks-closet-about-page'
    },
    {
      content: '\n<p>Quickly and easily locate your specific card using the serial number provided on your card graded by Panther Ridge Grading. Whether you\'re checking the status of a card you\'ve submitted, verifying its authenticity, or simply browsing through your collection, the serial number is your key to accessing detailed information about your card.</p>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p><strong>How to Use:</strong></p>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p>1. <strong>Locate the Serial Number:</strong> On each card graded by Graded Geeks, you\'ll find a unique serial number. This number is typically found on the label at the top of the card\'s case.</p>\n\n\n<ol class="wp-block-list"></ol>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p>2. <strong>Enter the Serial Number:</strong> Type the serial number into the search box provided on this page. Be sure to enter it exactly as it appears on your card to ensure accurate results.</p>\n\n\n<ol class="wp-block-list"></ol>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p>3. <strong>View Your Card&#8217;s Details:</strong> Once you\'ve entered the serial number, click the search button. You&#8217;ll be presented with a detailed view of your card, including its grade, condition, and any other pertinent information.</p>\n\n\n<ol class="wp-block-list"></ol>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p>This tool is here to help you keep track of your cards and ensure you&#8217;re always informed about the details of your collection. If you have any questions or need assistance, feel free to reach out to our support team.</p>\n\n\n<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>\n\n\n<p>Thank you for choosing Panther Ridge, and happy collecting!</p>\n\n\n<p></p>\n',
      title: 'Panther Ridge Find Card',
      slug: 'geeks-closet-find-card'
    }
  ]
};