var code;
// 获取id 为char 的标签元素
var charBox = document.querySelector('#char');
var okCount = 0;
var errorCount = 0;

function show() {
    // 随机0 到 1 之间的数字，不包含1
    var rand = Math.random(); 
    // 随机出来0到26之间的数字
    code = rand * 26;
    // 向下取整得到0到25；
    code = Math.floor(code);
    code = code + 65;
    // 通过ASC||编码，进行转换，得到26个英文字母65-90
    var char = String.fromCharCode(code);
    // 插入文本
    charBox.innerText = char;
    // alert(code);
}
show();
// 点击键盘的时候调用这个事件
// window.onkeyup 
window.onkeyup = jianPan;
function jianPan(ev) {
// 得到键盘的字母
     var key = ev.keyCode;
     if (key == code){
         okCount++;

         show();
        
     }else{
         errorCount++;
     }
    result();
     
    
}
// 计算结果的函数
function result() {
    var zhengque = 100*okCount/(okCount + errorCount);
    document.querySelector('#result').innerText = 
    '正确' + okCount +'个' +
    '错误' + errorCount + '个' +
    '正确率' + zhengque.toFixed(2) + '%';
}