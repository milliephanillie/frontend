import './css/index.css';
import * as $ from 'jquery';


const main = () => {
    console.log("Hell world");
};

main();

var num = 30;

const navigation = () => {
    if ($(window).scrollTop() > num) {
        $('.header-banner').addClass('fixed');
    } else {
        $('.header-banner').removeClass('fixed');
    }
}
