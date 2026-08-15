// lọc theo phân loại
export function filterByCategory(listProducts, category) {
    if (category === "all") {
        return listProducts
    } else {
        return listProducts.filter(item => item.category === category);
    }
}

// lọc theo tìm kiếm
export function searchByKeyWord(listProducts, searchWord) {
    const keyWord = searchWord.trim().toLowerCase();
    if (keyWord === "") {
        return listProducts
    } else {
        return listProducts.filter(item => {
            const nameResult = item.name.toLowerCase().includes(keyWord);
            const categoryResult = item.category.toLowerCase().includes(keyWord);
            return nameResult || categoryResult;
        });
    }
}

// hàm sắp xếp
export function sortData(listProducts, sortBy) {
    const sortedList = [...listProducts];
    if (sortBy === "price-asc") {
        return sortedList.sort((a,b) => a.price - b.price);
    } else if (sortBy ==="price-desc") {
        return sortedList.sort((a,b) => b.price - a.price);
    } else if (sortBy === "default")
        return sortedList;
}

// lọc tổng hợp
export function filterData(products, state) {
    const categoryList = filterByCategory(products, state.category);
    const searchList = searchByKeyWord(categoryList, state.searchWord);
    const finalResult = sortData(searchList, state.sortBy);
    return finalResult;
}

// debounce tim kiem
export function debounce(func, delay = 500) {
    let timer
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this,args);
        }, delay)
    };
}