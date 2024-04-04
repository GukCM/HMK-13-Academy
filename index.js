const loopFAQItems = (className, callback) => {
    const faqItems = document.getElementsByClassName(className);
    for (let index = 0; index < faqItems.length; index++) {
        callback(faqItems[index]);
    }
};

const changeActiveFAQ = (element) => {
    if (element.classList.contains('active')) {
        loopFAQItems('faq-question-cont', (el) => el.classList.remove('active'));
        loopFAQItems('faq-question-title', (el) => el.classList.remove('active'));
        loopFAQItems('faq-arrow-down', (el) => el.classList.remove('active'));
        loopFAQItems('faq-question-answer', (el) => el.classList.remove('active'));
    } else {
        loopFAQItems('faq-question-cont', (el) => el.classList.remove('active'));
        element.classList.add('active');
   
        loopFAQItems('faq-question-title', (el) => el.classList.remove('active'));
        loopFAQItems('faq-arrow-down', (el) => el.classList.remove('active'));
        loopFAQItems('faq-question-answer', (el) => el.classList.remove('active'));
    
        const title = element.getElementsByClassName('faq-question-title');
        const arrow = element.getElementsByClassName('faq-arrow-down');
        const answer = element.getElementsByClassName('faq-question-answer');
        title[0].classList.add('active');
        arrow[0].classList.add('active');
        answer[0].classList.add('active');
    }
}

const initFAQ = () => {
    loopFAQItems('faq-question-cont', (el) => 
        el.addEventListener('click', () => changeActiveFAQ(el))
    );
};

initFAQ();
