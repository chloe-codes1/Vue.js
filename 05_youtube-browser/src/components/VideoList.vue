<template>
  <div>
    <h5>Up next</h5>
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
    onVideoSelect(){
      this.$emit('video-select', this.video)
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