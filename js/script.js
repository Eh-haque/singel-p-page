// for change image
const link = document.getElementsByClassName('lil');
const imgBox = document.querySelector('.imgBox>img');

for (const el of link) {
    el.addEventListener('mouseover', (e) => imgBox.src = el.src)
    // console.log(el.href);
}
// link.forEach(el => {
//     el.addEventListener('mouseover', (e) => imgBox.src = el.href);
// });


const magnifyingArea = document.getElementById('magnifying-area');
const magnifyingImg = document.getElementById('magnifying-img');

magnifyingArea.addEventListener('mousemove', (event) => {
    let clientX = event.clientX - magnifyingArea.offsetLeft;
    let clientY = event.clientY - magnifyingArea.offsetTop;

    let mWidth = magnifyingArea.offsetWidth;
    let mHeight = magnifyingArea.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;


    magnifyingImg.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2)'
})
magnifyingArea.addEventListener('mouseleave', () => {
    magnifyingImg.style.transform = 'translate(-50%, -50%) scale(1)'
})