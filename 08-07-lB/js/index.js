let arr = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }]

    window.addEventListener('load',()=>{
        document.querySelector(".image").src = arr[0].url;
        document.querySelector(".text").innerText = arr[0].title;
        // if(localStorage.getItem('key')!=null)
        // arr.concat(JSON.parse(localStorage.getItem('key')));
    let x = JSON.parse(localStorage.getItem('key'));
    console.log(x);
    let image = arr.find(ele=>ele.url == x)
    console.log(image);
    if(!image)
    arr = arr.concat(x);
    console.log("array = ",arr);
    // console.log("initial array :" , arr)
    })

    let index = 0;
    document.querySelector(".prevButton").addEventListener('click',()=>{
        index--;
        if(index>=0){
        // console.log(arr[index].url);
        document.querySelector(".slidingImage").src = arr[index].url;
        document.querySelector(".text").innerText = arr[index].title;
        }
        else{
            index = arr.length-1;
            document.querySelector(".slidingImage").src = arr[index].url;
            document.querySelector(".text").innerText = arr[index].title;
        }
    })
    document.querySelector(".nextButton").addEventListener('click',()=>{
        index++;
        if(index<=arr.length-1){
        // console.log(arr[index].url);
        document.querySelector(".slidingImage").src = arr[index].url;
        document.querySelector(".text").innerText = arr[index].title;
        }
        else{
            index=0;
            document.querySelector(".slidingImage").src = arr[index].url;
            document.querySelector(".text").innerText = arr[index].title;
        }
    })
