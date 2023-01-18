document.addEventListener('DOMContentLoaded',() => {

    const btns = document.querySelectorAll('.form-btn');
    const menu = document.querySelector('.dropdown');
    const rectangleInfo = document.querySelectorAll(".rectangle"),
          circleInfo = document.querySelectorAll('.circle-info');

    menu.addEventListener('click', (e) => {
        let openMenu = e.currentTarget;     
    });
    
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let activeBtn = e.currentTarget;
            
            btns.forEach(btn => {
                if (btn !== activeBtn) {
                    btn.classList.remove('active')
                }
            });
            activeBtn.classList.add('active');
        });
    });

    
    for (let i = 0; i < circleInfo.length; i++){
        circleInfo[i].addEventListener('mouseover', () => {
            let rectangle = rectangleInfo[i]
            rectangle.classList.remove('hide')
        });
    }
    for (let i = 0; i < circleInfo.length; i++){
        circleInfo[i].addEventListener('mouseout', () => {
            let rectangle = rectangleInfo[i]
            rectangle.classList.add('hide')
        });
    }
});
