<template>
  <div class="container my-3">
    <!-- Emit 2. 듣고, -->
    <div v-if="videos.length === 0" class="main-logo">
      <img alt="Vue logo" src="./assets/logo.png" class="">
      <p>VueTube</p>  
    </div>
    <SearchBar @input-change="onInputChange" class="mb-4"/>
    <div class="row">
      <VideoDetail :video="selectedVideo" :videos="videos" />
      <VideoList @video-select="onVideoSelect" :videos="videos" />
    </div>
    <button v-if="videos.length > 0" @click="scrollToTop" class="button-bottom btn">Top</button>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from '@/components/SearchBar'
import VideoList from '@/components/VideoList'
import VideoDetail from '@/components/VideoDetail'

// 절대로 바뀌면 안되는 상수는 all capitalize
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY // .env.local 에 있는 "YOUTUBE_API_KEY" 불러오기
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,

  },
  data(){
    return{
      inputValue: '',
      videos: [],
      selectedVideo: null, //선택되지 않았다는 것을 명시하기
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
            res.data.items.forEach(item => {
              const parser = new DOMParser()
              const doc = parser.parseFromString(item.snippet.title, 'text/html')
              
              item.snippet.title = doc.body.innerText

            })
            this.videos = res.data.items
            this.selectedVideo = this.videos[0]
        })
        .catch(err => console.error(err))
    },
    onVideoSelect(video){
      this.selectedVideo = video
    },
    scrollToTop: function(){
                scroll(0,0) // 맨 위로 올리기 = > window는 전역객체라서 생략함
            },
  }
}
</script>

<style scoped>
/* vue에서만 적용되는 scoped 속성 */
div.main-logo{
  width: 100%;
  text-align: center;
  margin-top: 80px;
}

div.main-logo > p {
  font-size: 2.2rem;
  color: #3fb883;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
}

.button-bottom {
    position: fixed;
    right: 4vw;
    bottom: 2vh;
    border: 1px solid #3fb883;
    padding: 4px 8px;
    color: #3fb883;
    font-weight: bold;
}
</style>
