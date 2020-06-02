<template>
<div>
  <div v-for="video in videos.slice(0, 1)" :key="video.etag">
    <iframe id="player" type="text/html" class="video-iframe" 
            :src="'https://www.youtube.com/embed/'+ video.id.videoId" frameborder="0"></iframe>

    <p v-html="video.snippet.title"></p>
    <p class="published-at">{{video.snippet.publishedAt | dateParse('MM.DD.YY', { epoch: 1900 }) }}</p>
  </div>
  </div>
</template>

<script>

export default {
  name: 'VideoDetail',
  props: {
    videos: Array,
  },
}
</script>

<style>
.video-iframe{
  width : 100%;
  height : 500px
}

.published-at {
  font-size: 0.8rem;
}

</style>