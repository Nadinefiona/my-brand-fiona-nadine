
// fetch('http://localhost:3000/api/posts',{
//     mode:'no-cors'
// })
//    .then((res) => res.json())
//    .then((data) => console.log(data))



const allposts = document.querySelector('.blog-container')
console.log(allposts)
async function getpost(){
    const posts = await fetch('http://localhost:3000/api/posts')
let all = await posts.json();
console.log(all)
all.map((one) => {
    console.log(one)
    const {
        title,
        description,
        image,
        date
    } = one;
    allposts.innerHTML += `<div class="blog-box">
    <div class="blog-img"> 
        <img src="blog2.png" alt="blog" class="image">
    </div>
    <div class="blog-text">
       <span>20  May 2020 /web design</span>
       <a href="#" class="blog-title">${title}</a>
       <p>${description}</p>
       <div class="icons">
         <a href="#" class="ctnn">Read More</a>
         <div class="icon">
             <a href="updatepost.html"><i class="fas fa-edit"></i></a>
             <a href="delete.html"><i class="fas fa-trash-alt"></i></a>
         </div>
       </div>
    </div>
</div> ` 
})
}
getpost()



// async function fetchText() {
//     let response = await fetch('http://localhost:3000/api/posts',{
//         mode:'no-cors'
//     });

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK

//     if (response.status === 200) {
//         let data = await response.json();
//         // handle data
//         console.log(data)
//     }
// }
// fetchText()




// fetch('http://localhost:3000/api/posts', {
//   method: 'GET',
//   mode:'no-cors'
// })
// .then(response => response.json())
// .then(result => {
//   console.log('Success:', result);
// })
// .catch(error => {
//   console.error('Error:', error);
// });
