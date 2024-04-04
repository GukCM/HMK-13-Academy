const iterateElements = (className, callback) => {
    const elements = document.getElementsByClassName(className);
    for (let index = 0; index < elements.length; index++) {
        callback(elements[index]);
    }
};

const changeActive = (element) => {
    if (element.classList.contains("active")) {
        iterateElements('cont-question', (el) => el.classList.remove('active'));
        iterateElements('question-title', (el) => el.classList.remove('active'));
        iterateElements('arrow-down', (el) => el.classList.remove('active'));
        iterateElements('question-answer', (el) => el.classList.remove('active'));
    } else {
        iterateElements('cont-question', (el) => el.classList.remove('active'));
        element.classList.add('active');
        
        iterateElements('question-title', (el) => el.classList.remove('active'));
        iterateElements('arrow-down', (el) => el.classList.remove('active'));
        iterateElements('question-answer', (el) => el.classList.remove('active'));
        
        const title = element.getElementsByClassName('question-title');
        const arrow = element.getElementsByClassName('arrow-down');
        const answer = element.getElementsByClassName('question-answer');
        
        title[0].classList.add('active');
        arrow[0].classList.add('active');
        answer[0].classList.add('active');
    }
}

const initializeAccordion = () => {
    iterateElements('cont-question', (el) => 
        el.addEventListener('click', () => changeActive(el))
    );
};

initializeAccordion();
