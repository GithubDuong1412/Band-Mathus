 $(document).click(function(){        
    const buyBtns = document.querySelectorAll('.js-buy-ticket')
    const modal = document.querySelector('.js-modal')
    const modalclose = document.querySelector('.js-modal-close')
    const modalcontainer = document.querySelector('.js-modal-container')

    // Hàm hiển thị modal mua vé (Thêm class open vao modal)
    function showBuyticket() {
        modal.classList.add('open')
    }

    // Hàm ẩn modal mua vé (Gỡ class open vao modal)
    function hideBuyTickets(){
        modal.classList.remove('open')
    }

    // Lặp qua từng thẻ button và nghe hành vi của click
    for (const buyBtn of buyBtns){
        buyBtn.addEventListener('click', showBuyticket ) 
    }

    // Nghe hành vi click vào button close
    modalclose.addEventListener('click', hideBuyTickets )

    modal.addEventListener('click', hideBuyTickets )
    modalcontainer.addEventListener('click', function (event) {
        event.stopPropagation
    })
});