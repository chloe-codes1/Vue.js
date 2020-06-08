<template>
  <div class="col-md-12 col-lg-4">
    <h5 v-if="videos.length > 0">Up next</h5>
    <VideoListItem 
          @video-select="onVideoSelect"
          :video="video" 
          v-for="video in videos" 
          :key="video.etag" 
          class="row m-2"/>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  methods: {
    onVideoSelect(video){
      this.$emit('video-select', video)
    }
  },
  props: {
    videos: Array,
  },
  data () {
    return {

    }
  }
 }
</script>

<style>


</style>