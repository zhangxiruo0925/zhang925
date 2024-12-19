            //json
            const url="http://rap2api.taobao.org/app/mock/321637/zhang3";
            const list=document.querySelector('.new-container ul');
            fetch(url)
            .then(res=>res.json())
           .then(data=>{
               data.forEach(item=>{
                   const li=document.createElement('li');
                   li.innerHTML=`
                   <img src="${item.image}" alt="${item.alt}">
                   <p>${item.title}</p>`;
                   list.appendChild(li);
               })
           })


        // onscroll
        // 获取message-box元素
        var messageBox = document.querySelector('.message-box');
        // 监听页面滚动事件
        window.onscroll = function() {
            // 如果页面滚动超过了message-box的高度，则固定定位，否则恢复正常定位
            if (window.pageYOffset > messageBox.offsetHeight) {
                messageBox.classList.add('fixed-message');
            } else {
                messageBox.classList.remove('fixed-message');
            }
        };


  