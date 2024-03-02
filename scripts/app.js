const loadData = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json()
    fatchData(data.posts);
}

const fatchData = (items) => {
    console.log(items);
    items.forEach(item => {
        console.log(item.category)
        const itemContainer = document.getElementById('itemContainer');
        const div = document.createElement('div');
        div.classList = 'card w-[100%] bg-[#F7F8F8] shadow-xl p-10 ';
        div.innerHTML = `
        <div class="card-body grid grid-cols-7 gap-0">
        <div class="w-16 h-16  col-span-1 ">
            <img class="rounded-lg" src="${item.image}" alt="">
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
                <button onclick="showItemBtn('${item.title}','${item.view_count}' )" id="showItemBtn" class="btn btn-accent rounded-full py-0"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
        </div>
        </div>
`;
        itemContainer.appendChild(div)

    });
}



const showItemBtn = (title, view) => {
    const showItemBtns = document.querySelectorAll('#showItemBtn');
    const readItemContainer = document.getElementById('readItemContainer');
    const titleText = document.createElement('p');
    const viewAmmount = document.createElement('p');
    titleText.innerHTML = title;
    viewAmmount.innerHTML = view;
    readItemContainer.appendChild(titleText, viewAmmount)
    readItemContainer.appendChild(viewAmmount)
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
        const latestNewsContainer = document.getElementById('latestNewsContainer');
        const div = document.createElement('div');
        div.classList = ' bg-[#F7F8F8] card card-compact w-[90%] bg-base-100 shadow-xl';
        div.innerHTML = `
        <figure><img src="${news.cover_image}" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="grid grid-cols-12">
                        <p><i class="fa-solid fa-camera col-span-1"></i></p>
                        <p class="col-span-11">${news.author.posted_date}</p>
                    </div>

                    <h2 class="card-title">${news.title}</h2>
                    <p>${news.description}</p>
                    <div class="flex">
                        <div class="w-16 h-16  col-span-1 ">
                            <img class="rounded-lg" src="images/joinforum.png" alt="">
                        </div>
                        <div>
                            <h1>${news.author.name}</h1>
                            <p>${news.author.designation}</p>
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
    console.log(data)
    // fatchData(data.posts);
}

const searchBtn=document.getElementById('searchBtn');
searchBtn.addEventListener('click', ()=>{
    const searchData=document.getElementById('searchData');
    showSearchData(searchData.value)
    console.log(searchData.value);
})




loadLatestData()
loadData()
