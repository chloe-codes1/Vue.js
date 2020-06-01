<template>
  <div>
    <h5>Up next</h5>
    <ul class="p-0">
      <li v-for="video in videos" :key="video.etag" class="row m-2">
        <div class="thumbnail col-5">
          <img :src="video.snippet.thumbnails.default.url" />
        </div>
        <p class="col-7 thumbnail-title">{{ video.snippet.title | truncate(50) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'VideoList',
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
.thumbnail {
  position: relative;
  height: 70px;
  overflow: hidden;
}

.thumbnail img {
  position: absolute;
  height: 100px;
  top: -15px;
  left: 0;
}

.thumbnail-title {
  font-size: 0.7rem;
}


</style>