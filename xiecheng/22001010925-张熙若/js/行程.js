
             const url="http://rap2api.taobao.org/app/mock/321637/zhang4";
             //dom
             const ul=document.querySelector(".zhang_boxes_list");
             //获取数据
             fetch(url)
             .then(res=>res.json())
            .then(data=>{
                data.forEach(item=>{
                    const li=document.createElement("li");
                    li.classList.add("zhang_box_list");
                    li.innerHTML=`
                    <div class="box_content">
                        <img src="${item.image}" alt="${item.alt}" class="box_image">
                        <div class="box_text">
                            <p>${item.title}</p>
                            <p class="corner_text">${item.cornerText}</p>
                        </div>
                    </div>
                    `;
                    ul.appendChild(li);
                })
            })


        const tabItems = document.querySelectorAll('.tab-item');
        const tabContents = document.querySelectorAll('.tab-content-container');
    
        tabItems.forEach(tabItem => {
            tabItem.addEventListener('click', function() {
                // 移除所有选项卡的active类
                tabItems.forEach(item => item.classList.remove('active-tab'));
                // 移除所有内容的active类
                tabContents.forEach(content => content.classList.remove('active-content'));
    
                // 添加active类到当前选项卡和对应的内容
                this.classList.add('active-tab');
                const target = this.getAttribute('data-target');
                document.getElementById(target).classList.add('active-content');
            });
        });