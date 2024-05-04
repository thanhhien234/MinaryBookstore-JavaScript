//render interest-book-wrapper
const interestBookWrapper = document.querySelector('.interest-book-wrapper');
for (let i = 0; i<4 && i < bookList.length; i++) {
    const book = bookList[i];
    const listItem = document.createElement('li');
    listItem.classList.add('interest-book-item');

    listItem.innerHTML = `
        <img src="${book.image}" alt="">
        <div class="category">[${book.category}]</div>
        <div class="title">${book.title}</div>
        <div class="price-wrapper">
            <div class="sale-price">${book.salePrice}원</div>
            <div class="price">${book.price}원</div>
        </div>
    `;
    interestBookWrapper.appendChild(listItem);
}

//render post-wrapper
const postWrapper = document.querySelector('.post-wrapper');
for (let i = 0; i < postList.length; i++) {
    const post = postList[i];
    const listItem = document.createElement('li');
    listItem.classList.add('post-item');

    listItem.innerHTML = `
        <img src="${post.image}" alt="">
        <div class="post-content-wrapper">
            <div class="post-title">${post.title}</div>
            <div class="post-content">${post.content}</div>
        </div>
    `;
    postWrapper.appendChild(listItem);
}

//render book-list-wrapper
const bookListWrapper = document.querySelector('.book-list-wrapper');
bookList.forEach(book => {
    const listItem = document.createElement('li');
    listItem.classList.add('book-item');
    const date= book.publicationDate.split('-');
    const formattedDate = `${date[0]}년 ${date[1]}월 ${date[2]}일`
    listItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <div class="book-info">
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author} - 저자</div>
            <div class="book-publisher">${book.publisher} . ${formattedDate}</div>
            <div class="book-price-wrapper">
                <div class="book-sale-price">${book.salePrice}원</div>
                <div class="book-price">정가: ${book.price}원</div>
            </div>
            <img class="heart-icon" src="/public/assets/icons/heart-white.png" alt="">
            <button class="go-to-chat-btn">채팅하기</button>
        </div>
    `;
    bookListWrapper.appendChild(listItem);
});


//change search-container
const searchTypeSelect = document.getElementById('search-type');
const searchInput = document.querySelector('.search-input');
searchTypeSelect.addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value === 'isbn') {
        searchInput.placeholder = 'ISBN 13자리 숫자를 입력하세요.';
    }
    else if (selectedOption.value === 'title') {
        searchInput.placeholder = "책 제목을 입력하세요.";
    }
});
