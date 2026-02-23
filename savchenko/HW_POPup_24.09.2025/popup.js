$(`.open-modal`).click(function() {
    $(`.popup-bg`).fadeIn(600);
    $('body').addClass('no-scroll');
});

$(`.cross`).click(function() {
    $(`.popup-bg`).fadeOut(600);
    $('body').removeClass('no-scroll');
});

$(`.close-modal`).click(function() {
    $(`.popup-bg`).fadeOut(600);
    $('body').removeClass('no-scroll');
});

$('.popup-bg').click(function (event) {
    if ($(event.target).closest(".modal-box")) {
        $('.popup-bg').fadeOut(600);
        $('body').removeClass('no-scroll');
    }
});