<template>
  <div @click="onVideoSelect" class="thumbnail-area">
    <div class="media thumbnail-image col-5">
      <img :src="thumbnailURL" alt="youtube-thumbnail-image" />
    </div>
    <!-- <div class="col-7 media-body thumbnail-title">{{ video.snippet.title | truncate(40) }}</div> -->
    <div class="col-7 media-body thumbnail-title">
        <span v-html="video.snippet.title"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  methods: {
    onVideoSelect(){
      this.$emit('video-select', this.video)
    }
  },
  computed: {
    // 함수지만 명사 => 결국 리턴되는 값으로 사용되기 때문
    thumbnailURL(){
      return this.video.snippet.thumbnails.default.url
    }
  }
};
</script>

<style>

div.thumbnail-area{
  cursor: pointer;
}

div.thumbnail-area:hover{
  background-color: #eee;
}

.thumbnail-image {
  position: relative;
  height: 70px;
  overflow: hidden;
}

.thumbnail-image img {
  position: absolute;
  height: 100px;
  top: -15px;
  left: 0;
}

.thumbnail-title {
  font-size: 0.7rem;
}

</style>