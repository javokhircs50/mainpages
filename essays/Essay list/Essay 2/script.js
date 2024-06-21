
document.addEventListener("DOMContentLoaded", function() {
    // Annotate the Home button
    const homeLink = document.getElementById('home-link');
    const homeAnnotation = window.RoughNotation.annotate(homeLink, {
        type: 'box',
        color: 'black',
        padding: [4, 10, 10, 10]
    });
    homeAnnotation.show();

    // Annotate Published and Read Time spans
    const publishedSpan = document.querySelector('.meta span:first-child');
    const readTimeSpan = document.querySelector('.meta span:last-child');

    if (publishedSpan) {
        const publishedAnnotation = window.RoughNotation.annotate(publishedSpan, {
            type: 'box',
            color: 'black',
            padding: [1, 0, 0, 1]
        });
        publishedAnnotation.show();
    }
    if (readTimeSpan) {
        const readTimeAnnotation = window.RoughNotation.annotate(readTimeSpan, {
            type: 'box',
            color: 'black',
            padding: [1, 0, 0, 1]
        });
        readTimeAnnotation.show();
    }
});
