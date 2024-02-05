$(document).ready(() => {

    $('.link-item').css('transform', 'scale(0)');

    const linkItemLoad = () => {
        let delay = 0;

        $.each($('.link-item'), (index, item) => {
            delay += 0.3;
            $(item).css('transition-delay', `${delay}s`);
            $(item).css('transform', 'scale(1)');
        });
    };

    setTimeout(() => {
        linkItemLoad();
    }, 200);

    setTimeout(() => {
        $('.link-item').css('transition-delay', '.1s');
    }, 300);

});
