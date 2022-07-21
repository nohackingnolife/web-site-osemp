//accordion
const heights = []

setTimeout(() => {
    document.querySelectorAll('.accordion-item_trigger').forEach((container) =>
        {
            const content = container.querySelector('.accordion-item_content')
            heights.push({ 
                content, 
                height: content.getBoundingClientRect().height
            })
            content.style.height = 0

            container.addEventListener('click', () => {
                const clicked = container.querySelector('.accordion-item_content')
                const itemActive = document
                    .querySelector('.accordion-item_content.accordion-item_active')

                if(itemActive && clicked != itemActive) {
                    itemActive.style.height = 0
                    itemActive.classList.remove('accordion-item_active')
                }

                clicked.classList.toggle('accordion-item_active')
                clicked.style.height = clicked.classList.contains('accordion-item_active') ? heights.find(h => h.content == clicked).height+'px' : 0
            })
        })
}, 110)