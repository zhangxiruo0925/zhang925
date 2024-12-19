
//跳转
    // 获取“<”按钮
    const backButton = document.getElementById('backButton');

    // 为“<”按钮添加点击事件监听器
    backButton.addEventListener('click', function() {
        // 跳转到tickets.html页面
        window.location.href = 'tickets.html';
    });


// <!--tab选项卡-->

 // 获取所有的Tab选项和内容区域
 var tabss = document.querySelectorAll('.tab');
 var contents = document.querySelectorAll('.tab-content');

 // 默认显示第一个Tab的内容
 contents[0].style.display = 'block';

 // 为每个Tab选项添加点击事件
 tabss.forEach(function(tab) {
   tab.addEventListener('click', function() {
     // 隐藏所有Tab内容
     contents.forEach(function(content) {
       content.style.display = 'none';
     });

     // 移除所有Tab选项的激活状态
     tabss.forEach(function(tab) {
       tab.classList.remove('active');
     });

     // 显示当前点击的Tab内容
     var activeTabContent = document.getElementById(this.getAttribute('data-tab') + '-content');
     activeTabContent.style.display = 'block';

     // 为当前Tab选项添加激活状态
     this.classList.add('active');
   });
 });






// <!-- 垂直滚动tab -->

// 获取所有的垂直tab项
let verticalTabs = document.querySelectorAll('.vertical-tab');

// 为每个垂直tab项添加点击事件
verticalTabs.forEach(function(tab) {
tab.addEventListener('click', function() {
    // 移除所有tab项的激活状态
    verticalTabs.forEach(function(t) {
        t.classList.remove('active');
    });

    // 为当前点击的tab项添加激活状态
    this.classList.add('active');
});
});
// 显示垂直滚动tab栏
function showVerticalTabs() {
document.body.classList.add('show-vertical-tabs');
}
// 隐藏垂直滚动tab栏
function hideVerticalTabs() {
document.body.classList.remove('show-vertical-tabs');
}

