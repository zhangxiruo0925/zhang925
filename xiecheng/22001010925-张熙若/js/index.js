
            // 获取所有按钮
            const buttons = document.querySelectorAll('.list-button');
        
            // 为每个按钮添加点击事件监听器
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    if (this.textContent === '门票/玩乐') {
                        // 跳转到ticket.html页面
                        window.location.href = 'tickets.html';
                    }
                });
            });

              const url="http://rap2api.taobao.org/app/mock/321637/zhang5";
              //dom
              const list=document.querySelector(".zhang_boxes_list");
              //使用fetch获取数据
              fetch(url)
              .then(res=>res.json())
             .then(data=>{
              data.forEach(item=>{
                const li=document.createElement("li");
                li.classList.add("zhang_box_list");
                li.innerHTML=`
                <div class="box_content">
                <img src="${item.imageSrc}" alt="${item.imageAlt}" class="box_image">
                <div class="box_text">
                <p>${item.title}</p>
                <p class="corner_text">${item.cornerText}</p>
                </div>
                `;
                list.appendChild(li);
              })
            })


            //遮罩
            var boxes = document.querySelectorAll(".feature_box");
            for (var i = 0; i < boxes.length; i++) {
                boxes[i].onmouseover = function() {
                    this.children[2].style.display = "block"; // 显示遮罩层
                };
                boxes[i].onmouseout = function() {
                    this.children[2].style.display = "none"; // 隐藏遮罩层
                };
            }
