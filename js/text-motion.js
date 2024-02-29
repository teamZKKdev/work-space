



//お買い上げありがとう
const CLASSNAME = "-visible";
const TIMEOUT = 1500;
const $target = $(".thanks-buy");

    setInterval(() => {
        $target.addClass(CLASSNAME);
        setTimeout(() => {
            $target.removeClass(CLASSNAME);
        }, TIMEOUT);
    }, TIMEOUT * 2);
