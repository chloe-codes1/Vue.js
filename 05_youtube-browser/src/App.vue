<template>
  <div class="container my-3">
    <!-- Emit 2. 듣고, -->
    <SearchBar @input-change="onInputChange" class="mb-3"/>
    <div class="row">
      <VideoPlay :videos="videos" class="col-8"/>
      <VideoList :videos="videos" class="col-4"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar'
import VideoList from '@/components/VideoList'
import VideoPlay from '@/components/VideoPlay'

// 절대로 바뀌면 안되는 상수는 all capitalize
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY // .env.local 에 있는 "YOUTUBE_API_KEY" 불러오기
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoPlay,

  },
  data(){
    return{
      inputValue: '',
      video: [],
      videos: [],
    }
  },
  methods: {
    onInputChange(inputText) {
      this.inputValue = inputText
      // emit => data를 수정
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: this.inputValue,
          maxResults: 10,
        }
      })
        .then(res => {
            this.videos = res.data.items
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>
