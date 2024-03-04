const loadData = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    fatchData(data.posts);
}

const fatchData = (items) => {
    console.log(items);
    items.forEach(item => {
        const bgClass = item.isActive === true ? 'bg-[#10B981]' : 'bg-[red]' ;       
        console.log(item.title)
        const itemContainer = document.getElementById('itemContainer');
        const div = document.createElement('div');
        div.classList = 'showSearchItem card w-[95%] lg:w-[100%] bg-[#F7F8F8] shadow-xl p-1 mx-auto';
        div.innerHTML = `
        <div class="card-body grid grid-cols-7 gap-0">
        <div class="w-10 lg:w-16 h-16  col-span-1 relative">
             <img class="rounded-lg" src="${item.image}" alt="">
             <button class="showItemButton  ${bgClass} w-4 h-4 rounded-full absolute -top-1 lg:-top-1.5 left-8 lg:left-14 "></button>

        </div>
         <div class="col-span-6">
             <div class="grid grid-cols-10 text-[--p-color] text-sm font-medium">
                 <p class="col-span-2">#${item.category}</p>
                 <p class="col-span-8">Author : ${item.author.name}</p>
             </div>
             <div>
                 <h1 class="text-xl font-bold text-[#12132D] mb-5 mt-1" >${item.title}</h1>
                 <p class="font-normal text-[--p-color] text-sm ">${item.description}</p>
             </div>
             <hr class=" border-dashed my-5 bg-[--p-color] ">
             <div class="grid grid-cols-2">
            <div class="flex justify-center gap-5 ">
                 <p><i class="fa-solid fa-message"></i> ${item.comment_count}</p>
                <p><i class="fa-regular fa-eye"></i> ${item.view_count}</p>
                 <p><i class="fa-regular fa-clock"></i> ${item.posted_time} min</p>
             </div>
             <div class="flex justify-end mr-10">
             <button id="showItem" onclick="showItemBtn('${item.title.replace(/'/g, 'title')}', '${item.view_count}')" class="btn btn-accent rounded-full py-0"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
         </div>
        </div>
`;
itemContainer.appendChild(div)     

           
    });



}



 






let count=0;

const showItemBtn = (title, view) => {
    count++
    const countItem=document.getElementById('countItem');
    countItem.innerHTML=count;
    console.log(`count is ${count}`);
    const readItemContainer = document.getElementById('readItemContainer');
    const div = document.createElement('div');
    div.classList='bg-[#fff] grid grid-cols-3 rounded-2xl px-5 py-2'
    const titleText = document.createElement('p');
    titleText.classList='col-span-2'
    const viewAmount = document.createElement('p');
    viewAmount.classList='col-span-1'
    titleText.innerHTML =title;
    viewAmount.innerHTML = `<i class="fa-regular fa-eye px-3"></i> ${view}`
    div.appendChild(titleText);
    div.appendChild(viewAmount);
    readItemContainer.appendChild(div);
    console.log(title);
    console.log(view);
}







const loadLatestData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    console.log(data)
    fatchLatestData(data);
}



const fatchLatestData = (allNews) => {
    allNews.forEach(news => {
        console.log(news.title)
        console.log(news.author.posted_date)
        // if () {
        //     console.log('undefinedssss')
        // }
        const posted_date = !news.author.posted_date ? 'No publish date' : news.author.posted_date;  
        const designation = !news.author.designation ? 'Unknown' : news.author.designation;  
        const latestNewsContainer = document.getElementById('latestNewsContainer');
        const div = document.createElement('div');
        div.classList = ' bg-[#F7F8F8] card card-compact w-[95%] bg-base-100 shadow-xl mx-auto';
        div.innerHTML = `
        <figure><img src="${news.cover_image}" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="grid grid-cols-12">
                        <p><i class="fa-solid fa-camera col-span-1"></i></p>
                        <p class="col-span-11">${posted_date}</p>
                    </div>

                    <h2 class="card-title">${news.title}</h2>
                    <p>${news.description}</p>
                    <div class="flex">
                        <div class="w-16 h-16  col-span-1 ">
                            <img class="rounded-lg" src="images/joinforum.png" alt="">
                        </div>
                        <div>
                            <h1>${news.author.name}</h1>
                            <p>${designation}</p>
                        </div>
                    </div>
                </div>
`;
        latestNewsContainer.appendChild(div)
    });
}












const showSearchData = async (categoryName) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${categoryName}`)
    const data = await res.json()
    searchDataFatch(data)
    console.log(data)
    // fatchData(data.posts);
}




const searchDataFatch = (searchItems) => {
    const searchItemContainer = document.getElementById('searchItemContainer');
    searchItemContainer.innerText = '';
    console.log(searchItems);
    searchItems.posts.forEach(item => {
        console.log(item)
        const bgClass = item.isActive === true ? 'bg-[#10B981]' : 'bg-[red]' ; 
        const div = document.createElement('div');
        div.classList = 'showSearchItem card w-[95%] lg:w-[100%] bg-[#F7F8F8] shadow-xl p-1 ';
        div.innerHTML = `
       <div class="card-body grid grid-cols-7 gap-0">
        <div class="w-10 lg:w-16 h-16  col-span-1 relative">
             <img class="rounded-lg" src="${item.image}" alt="">
             <button class="showItemButton  ${bgClass} w-4 h-4 rounded-full absolute -top-1.5 left-14 "></button>

        </div>
         <div class="col-span-6">
             <div class="grid grid-cols-10 text-[--p-color] text-sm font-medium">
                 <p class="col-span-2">#${item.category}</p>
                 <p class="col-span-8">Author : ${item.author.name}</p>
             </div>
             <div>
                 <h1 class="text-xl font-bold text-[#12132D] mb-5 mt-1" >${item.title}</h1>
                 <p class="font-normal text-[--p-color] text-sm ">${item.description}</p>
             </div>
             <hr class=" border-dashed my-5 bg-[--p-color] ">
             <div class="grid grid-cols-2">
            <div class="flex justify-center gap-5 ">
                 <p><i class="fa-solid fa-message"></i> ${item.comment_count}</p>
                <p><i class="fa-regular fa-eye"></i> ${item.view_count}</p>
                 <p><i class="fa-regular fa-clock"></i> ${item.posted_time} min</p>
             </div>
             <div class="flex justify-end mr-10">
             <button id="showItem" onclick="showItemBtn('${item.title.replace(/'/g, 'title')}', '${item.view_count}')" class="btn btn-accent rounded-full py-0"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
         </div>
        </div>
 `;
        searchItemContainer.appendChild(div)

    });
    searchItems='';
    loadSpinner(false)
    
}



const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    loadSpinner(true)
    const searchData = document.getElementById('searchData');
    showSearchData(searchData.value)
    console.log(searchData.value);
    const itemContainer = document.querySelector('#itemContainer');
    const searchItemContainer = document.querySelector('#searchItemContainer');

    itemContainer.classList.add('hidden')
    searchItemContainer.classList.remove('hidden')
    console.log(itemContainer);
    searchData.value=''

})

const loadSpinner = (isLodding) => {
    if (isLodding) {
        const isHidden = document.getElementById('isHidden');
        isHidden.classList.remove('hidden')
    }
    else {
        const isHidden = document.getElementById('isHidden');
        isHidden.classList.add('hidden')
    }


}


loadLatestData()
loadData()
