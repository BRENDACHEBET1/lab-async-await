// Write your code here!

async function fetchAndDisplayPosts(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const posts = await response.json()
        console.log(posts)
        displayPosts([posts])
        return posts

    } catch(error){
        console.error('Error fetching posts:', error)
    }
}


function displayPosts(posts){
     const postList = document.getElementById("post-list")
      if (!postList) {
            console.error('Element with id "post-list" not found.');
            return;
        }

    posts.forEach(post => {
        const listItem = document.createElement('li')
        const h1 = document.createElement('h1')
        h1.textContent = post.title

        const p1 = document.createElement('p')
        p1.textContent = post.body
        listItem.appendChild(h1)
        listItem.appendChild(p1)

        postList.appendChild(listItem)
       
        
    });
}

fetchAndDisplayPosts();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fetchAndDisplayPosts };
}
