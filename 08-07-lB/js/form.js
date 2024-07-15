document.querySelector(".container").addEventListener('submit',(e)=>{
    e.preventDefault();
    let arr = [];
    let img = document.querySelector("#img");
    let fileName = img.files[0].name;
    console.log(img.files[0].name);
    // console.log(e.target.img)
    // console.log(img.value);
    let obj = {
        url : "./images/"+fileName,
        title: document.querySelector('#title').value
    }
    if(localStorage.getItem('key'))
    {
      arr = JSON.parse(localStorage.getItem('key'));
      if(arr.find((ele)=>ele.url == obj.url)){
      alert("Already have this image");
      }
      else{
        arr.push(obj);
        localStorage.setItem('key',JSON.stringify(arr));
        alert("Image added sucessfully");
      }
    }
    else{
      arr.push(obj);
      localStorage.setItem('key',JSON.stringify(arr));
      alert("Image added sucessfully");
    }
    
    window.location.href = "/index.html"
    
})