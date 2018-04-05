let own = ['img/users/121.jpg','img/users/image8.jpg','img/users/image9.jpeg']

let share=['img/users/121.jpg','img/users/image8.jpg','img/users/image9.jpeg','img/users/121.jpg','img/users/image8.jpg','img/users/image9.jpeg','img/users/images4.jpeg','img/users/image13.jpg','img/users/image10.jpg','img/users/image11.jpg','img/users/sample1.jpg','img/users/images5.jpeg','img/users/images6.jpeg','img/users/sample3.jpg','img/users/sample4.jpg','img/users/pexels-photo.jpg']


const img_container = document.getElementById("img-container");
const new_img = document.getElementById("new-image");
const to_gallery = document.getElementById("to-gallery");

const format = (i,flag) => {
  let heart;
  if (flag==1){
    heart = "<img class='like-icon' src='icon/grey-heart.svg'><span class='like-num'>0</span>";
  } else {
    heart = "";
  }
  let html = `<div>
    <div class='sub-container'><img class='frame-img' src='${i}'></div>
    ${heart}</div>`;
  console.log(i.filename);
  img_container.insertAdjacentHTML('beforeend',html);
}

const loadown = () => own.forEach(i => format(i,0));
const loadshare = () => share.forEach(i => format(i,1));

window.onload = loadown;
to_gallery.onclick = () => {
  while(img_container.firstChild) {
      img_container.removeChild(img_container.firstChild)
    }
    loadshare();
};
