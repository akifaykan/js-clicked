let xBody = document.body,
    xOpen = document.querySelectorAll('.xopen'),
    xPlace = document.querySelector('.xplace'),
    xClose = document.querySelectorAll('.xclose'),
    xContent = document.querySelectorAll('[data-content]');

if (xOpen.length) {
    xOpen.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            itemXClose();
            itemXOpen(e);
        });
    });

    [xPlace, ...xClose].forEach((item) => {
        item.addEventListener('click', () => {
            itemXClose();
        });
    });
}

function itemXClose() {
    xPlace.classList.remove('active');
    xBody.classList.remove('noscroll');

    xContent.forEach((item) => {
        item.setAttribute('data-content', 'false');
    });

    xOpen.forEach((item) => {
        item.classList.remove('active');
    });
}

function itemXOpen(e) {
    let targetDataId = e.target.getAttribute('data-id'),
        targetID = document.getElementById(targetDataId),
        tabActive = targetID.parentNode.hasAttribute('data-tabs');

    e.target.classList.add('active');
    targetID.setAttribute('data-content', 'true');

    if (!tabActive) {
        xPlace.classList.add('active');
        xBody.classList.add('noscroll');
    }
}
