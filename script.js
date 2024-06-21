document.addEventListener("DOMContentLoaded", function() {
    // Annotate the description with Rough Notation
    const descriptionText = document.getElementById('description-text');
    const descriptionAnnotation = window.RoughNotation.annotate(descriptionText, {
        type: 'highlight',
        color: 'lime',
        padding: [1, 6, 3, 2]
    });
    descriptionAnnotation.show();

    // Select all essay links
    const essayLinks = document.querySelectorAll('.essays-list ul li a');

    essayLinks.forEach(link => {
        const linkAnnotation = window.RoughNotation.annotate(link, {
            type: 'highlight',
            color: 'yellow',
            padding: [0, 2, 0, 2]
        });

        link.addEventListener('mouseenter', () => {
            linkAnnotation.show();
        });

        link.addEventListener('mouseleave', () => {
            linkAnnotation.hide();
        });
    });
});
