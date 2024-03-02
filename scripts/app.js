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
        <div class="w-16 h-16 border border-red-900 col-span-1">
            <img src="images/joinforum.png" alt="">
        </div>
        <div class="col-span-6">
            <div class="grid grid-cols-10 text-[--p-color] text-sm font-medium">
                <p class="col-span-2">#${item.category}</p>
                <p class="col-span-8">Author : Awlad Hossai</p>
            </div>
            <div>
                <h1 class="text-xl font-bold text-[#12132D] mb-5 mt-1" >10 Kids Unaware of Their Halloween Costume</h1>
                <p class="font-normal text-[--p-color] text-sm ">It’s one thing to subject yourself to ha Halloween costume mishap because, 
                    hey that’s your prerogative</p>
            </div>
            <hr class=" border-dashed my-5 bg-[--p-color] ">
            <div class="grid grid-cols-2">
            <div class="flex justify-center gap-5 ">
                <p><i class="fa-solid fa-message"></i> 560</p>
                <p><i class="fa-regular fa-eye"></i> 1,568</p>
                <p><i class="fa-regular fa-clock"></i> 5 min</p>
            </div>
            <div class="flex justify-end mr-10">
                <button class="btn btn-accent rounded-full py-0"><i class="fa-regular fa-envelope-open"></i></button>
            </div>
        </div>
        </div>
`;
        itemContainer.appendChild(div)

    });
}


loadData()