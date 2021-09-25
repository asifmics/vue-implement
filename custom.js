const App = {
  data(){
    return{
      say:'hello Asif',
      message: 'Thank\'s for learning Vue !',
      image: 'https://picsum.photos/200',
      color:'red',
      alt:'demo image',
      link:'https://picsum.photos/200', 
      inStock:80,
      offs:['30% off','40% off','50% off','60% off'],
      variants:[
        {id:1,color:'red',image:'https://picsum.photos/200'},
        {id:2,color:'green',image:'https://picsum.photos/200'},
        {id:3,color:'blue',image:'https://picsum.photos/200'},
        {id:4,color:'orange',image:'https://picsum.photos/200'},
      ],
      cart:0
    }
  },
  methods: {
    updateImage(image){
      this.image = image
    },
    changeColor(color){
      this.color = color
    },
    addToCart(){
      this.cart += 1
    },
    removeToCart(){
     if(this.cart > 0){
      this.cart -= 1
     }
    }
  },
}

const MountApp = Vue.createApp(App).mount('#app');