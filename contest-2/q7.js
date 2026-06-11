const users= [
  {
    name:"Aman",
    posts: [
      { title:"JS", likes:50 },
      { title:"React", likes:10 }
    ]
  },
  {
    name:"Riya",
    posts: [
      { title:"Node", likes:80 }
    ]
  }
];

let fav = users.filter(user=>user.posts.some(post=>post.likes>40))
console.log(fav)
