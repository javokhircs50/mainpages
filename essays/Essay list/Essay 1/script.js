document.addEventListener("DOMContentLoaded", function() {
    // Annotate the Home button
    const homeLink = document.getElementById('home-link');
    const homeAnnotation = window.RoughNotation.annotate(homeLink, {
        type: 'box',
        color: 'yellow',
        padding: [4, 10, 10, 10]
    });
    homeAnnotation.show();

    // Annotate Published and Read Time spans
    const publishedSpan = document.querySelector('.meta span:first-child');
    const readTimeSpan = document.querySelector('.meta span:last-child');

    if (publishedSpan) {
        const publishedAnnotation = window.RoughNotation.annotate(publishedSpan, {
            type: 'underline',
            color: 'black',
            padding: [1, 0, 0, 1]
        });
        publishedAnnotation.show();
    }
    if (readTimeSpan) {
        const readTimeAnnotation = window.RoughNotation.annotate(readTimeSpan, {
            type: 'underline',
            color: 'black',
            padding: [1, 0, 0, 1]
        });
        readTimeAnnotation.show();
    }

    // Annotate the "Lesson learnt?" header text
    const headerText = document.querySelector('header h1');
    if (headerText) {
        const headerAnnotation = window.RoughNotation.annotate(headerText, {
            type: 'highlight',
            color: 'yellow',
            padding: [1, 1, 2, 2]
        });
        headerAnnotation.show();
    }
});
