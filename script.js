document.addEventListener('DOMContentLoaded', function() {
    const showSurveyButton = document.getElementById('showSurveyButton');
    const formSection = document.getElementById('form-section');
    const introductionSection = document.getElementById('introduction-section');

    showSurveyButton.addEventListener('click', function() {
        introductionSection.classList.add('introduction-small');
        formSection.classList.add('form-expanded');
        formSection.style.display = 'block'; // Ensure the form section is visible
        setTimeout(scrollToForm, 500); // Scroll after the transition completes
    });

    function scrollToForm() {
        const yOffset = -60;
        const surveyForm = document.getElementById('surveyForm');
        const y = surveyForm.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
});
