window.onload=function(){
    let $=tName=>{
        return document.querySelector(tName);
    }
    let oSearchBox=$('.search-box');
    let oSearchBtn=$('.search-btn');
    let oClear=$('.clear');
    let oText=$('input[type="text"]');
    // 按下搜索框会边长
    oSearchBtn.addEventListener('click',()=>{
        oSearchBox.classList.toggle('changeWidth');
    });
    // 搜索框的清除
    oClear.addEventListener('click',()=>{
        oText.value='';
    });
    
   // 注册登录
    const wrapper=$('.wrapper');
    const loginLink=$('.login-link');
    const registerLink=$('.register-link');
    const btnPopup=$('.btnLogin-popup');
    const iconClose=$('.icon-close');
    // 注册事件
    registerLink.addEventListener('click',()=>{
        wrapper.classList.add('active');
    });
    // 登录事件
    loginLink.addEventListener('click',()=>{
        wrapper.classList.remove('active');
    })
    // 登录按钮
    btnPopup.addEventListener('click',()=>{
        wrapper.classList.add('active-popup');
    });
    // 关闭按钮
    iconClose.addEventListener('click',()=>{
        wrapper.classList.remove('active-popup');
    });
    

} 
