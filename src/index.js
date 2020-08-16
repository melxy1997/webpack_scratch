import $ from 'jquery'
//ES6的模块化语法↑不使用webpack转换的话就不好使，编写入口函数↓
$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor','lightblue')
})