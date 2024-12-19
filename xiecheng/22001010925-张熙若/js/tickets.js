  let filterContainer = document.getElementById("filterContainer");
  window.onscroll=function(){
      let scrollTop=document.documentElement.scrollTop;
      if(scrollTop>1000){
        filterContainer.style.display='block';
      }else{
        filterContainer.style.display='none';
      }
  }


  
   function goToDetails(url, caption) {
    if (window.confirm('您想要查看 ' + caption + ' 的详情吗？')) {
      window.location.href = url;
    }
  }
  // 获取back-button按钮
  const backButton = document.querySelector('.back-button');
  // 为按钮添加点击事件监听器
  backButton.addEventListener('click', function() {
    // 重定向到index页面
    window.location.href = 'index.html'; // 确保这里的路径是正确的
  });
