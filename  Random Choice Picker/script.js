
const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
if(e.key==='Enter'){
    setTimeout(() =>{
        e.target.value='';
    },10)

        randomselect();
 
     
}
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '');
    
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}
let randomselect =()=>{
    const interval = setInterval(() => {
        const randomtag = pickRandomTag();
        
        highlightTag(randomtag);
        setTimeout(() => {
            unHighlightTag(randomtag); 
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 101)

    }, 30 * 100)
}

function pickRandomTag() {
    const tagss = document.querySelectorAll('.tag')
    return tagss[Math.floor(Math.random() * tagss.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}