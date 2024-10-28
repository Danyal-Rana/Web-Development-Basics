let wishlist = [];

function addToWishlist(id, name) {
    const itemExists = wishlist.some(item => item.id === id);
    
    if (!itemExists) {
        wishlist.push({ id, name });
    }
    displayWishlist();
}

function displayWishlist() {
    const wishlistElement = document.getElementById('wishlist');
    wishlistElement.innerHTML = '';
    wishlist.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        wishlistElement.appendChild(listItem);
    });
}