// Sample book data
const books = [
    {
        id: '1',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        cover: 'https://images.pexels.com/photos/1261180/pexels-photo-1261180.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'A classic American novel set in the Jazz Age',
        genre: 'Classic Literature',
        language: 'English',
        format: 'EPUB',
        pages: 180,
        isbn: '9780743273565',
        rating: 4.2,
        reviews: 1250,
        synopsis: 'Set in the summer of 1922, The Great Gatsby follows Nick Carraway, a young bond salesman who moves to West Egg, Long Island. There, he becomes neighbors with the mysterious millionaire Jay Gatsby, who throws lavish parties in hopes of attracting his lost love, Daisy Buchanan.',
        readingStatus: 'To Read',
        progress: 0,
        isFavorite: false,
        inLibrary: true,
        tags: ['classic', 'american', 'drama'],
        publishedDate: '1925-04-10'
    },
    {
        id: '2',
        title: 'Dune',
        author: 'Frank Herbert',
        cover: 'https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'Epic science fiction novel about power, religion, and ecology',
        genre: 'Science Fiction',
        language: 'English',
        format: 'PDF',
        pages: 688,
        isbn: '9780441172719',
        rating: 4.6,
        reviews: 2100,
        synopsis: 'Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides as his family accepts control of the desert planet Arrakis, the only source of the spice melange, the most important substance in the universe.',
        readingStatus: 'Reading',
        progress: 35,
        isFavorite: true,
        inLibrary: true,
        tags: ['sci-fi', 'epic', 'space'],
        publishedDate: '1965-08-01'
    },
    {
        id: '3',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        cover: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'Romantic novel about manners, upbringing, and marriage',
        genre: 'Romance',
        language: 'English',
        format: 'EPUB',
        pages: 432,
        isbn: '9780141439518',
        rating: 4.3,
        reviews: 1890,
        synopsis: 'Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.',
        readingStatus: 'Finished',
        progress: 100,
        isFavorite: true,
        inLibrary: true,
        tags: ['romance', 'classic', 'british'],
        publishedDate: '1813-01-28'
    },
    {
        id: '4',
        title: '1984',
        author: 'George Orwell',
        cover: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'Dystopian novel about totalitarian surveillance',
        genre: 'Dystopian Fiction',
        language: 'English',
        format: 'PDF',
        pages: 328,
        isbn: '9780451524935',
        rating: 4.5,
        reviews: 3200,
        synopsis: 'Set in Airstrip One, a province of the superstate Oceania, 1984 follows Winston Smith, a diligent and skillful rank-and-file worker who secretly hates the Party and dreams of rebellion.',
        readingStatus: 'To Read',
        progress: 0,
        isFavorite: false,
        inLibrary: false,
        tags: ['dystopian', 'political', 'classic'],
        publishedDate: '1949-06-08'
    },
    {
        id: '5',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        cover: 'https://images.pexels.com/photos/1130623/pexels-photo-1130623.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'Fantasy adventure of Bilbo Baggins',
        genre: 'Fantasy',
        language: 'English',
        format: 'EPUB',
        pages: 366,
        isbn: '9780547928227',
        rating: 4.4,
        reviews: 2800,
        synopsis: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep to whisk him away on an adventure.',
        readingStatus: 'Reading',
        progress: 60,
        isFavorite: true,
        inLibrary: true,
        tags: ['fantasy', 'adventure', 'classic'],
        publishedDate: '1937-09-21'
    },
    {
        id: '6',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        cover: 'https://images.pexels.com/photos/1130621/pexels-photo-1130621.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        description: 'A story of racial injustice and childhood innocence',
        genre: 'Literary Fiction',
        language: 'English',
        format: 'PDF',
        pages: 281,
        isbn: '9780060935467',
        rating: 4.1,
        reviews: 1560,
        synopsis: 'Set in the fictional town of Maycomb, Alabama, during the 1930s, the story is narrated by Jean Louise "Scout" Finch, who recounts her childhood experiences and her father\'s defense of a black man falsely accused of rape.',
        readingStatus: 'To Read',
        progress: 0,
        isFavorite: false,
        inLibrary: true,
        tags: ['literary', 'social', 'american'],
        publishedDate: '1960-07-11'
    }
];

// Application state
let currentView = 'library';
let selectedBookId = null;
let filteredBooks = [...books];
let currentPage = 1;
let totalPages = 100;
let readerSettings = {
    fontSize: 16,
    fontFamily: 'serif',
    theme: 'dark',
    lineHeight: 1.6
};

// DOM elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const formatFilter = document.getElementById('formatFilter');
const statusFilter = document.getElementById('statusFilter');
const booksGrid = document.getElementById('booksGrid');
const bookCount = document.getElementById('bookCount');

// View elements
const libraryView = document.getElementById('libraryView');
const bookDetailView = document.getElementById('bookDetailView');
const readerView = document.getElementById('readerView');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    renderBooks();
});

function initializeApp() {
    // Set initial view
    showView('library');
    
    // Initialize filters
    updateBookCount();
}

function setupEventListeners() {
    // Sidebar toggle
    sidebarToggle.addEventListener('click', toggleSidebar);
    
    // Search and filters
    searchInput.addEventListener('input', handleSearch);
    genreFilter.addEventListener('change', handleFilter);
    formatFilter.addEventListener('change', handleFilter);
    statusFilter.addEventListener('change', handleFilter);
    
    // Quick actions
    document.getElementById('favoritesBtn').addEventListener('click', () => filterByFavorites());
    document.getElementById('libraryBtn').addEventListener('click', () => filterByLibrary());
    
    // Book detail actions
    document.getElementById('readBookBtn').addEventListener('click', () => openReader(selectedBookId));
    document.getElementById('favoriteBtn').addEventListener('click', () => toggleFavorite(selectedBookId));
    document.getElementById('libraryToggleBtn').addEventListener('click', () => toggleLibrary(selectedBookId));
    document.getElementById('statusSelect').addEventListener('change', handleStatusChange);
    
    // Reader controls
    document.getElementById('backToLibraryBtn').addEventListener('click', () => showView('library'));
    document.getElementById('contentsBtn').addEventListener('click', toggleContents);
    document.getElementById('settingsBtn').addEventListener('click', toggleSettings);
    document.getElementById('prevPageBtn').addEventListener('click', previousPage);
    document.getElementById('nextPageBtn').addEventListener('click', nextPage);
    
    // Reader settings
    document.getElementById('fontSizeDown').addEventListener('click', () => adjustFontSize(-1));
    document.getElementById('fontSizeUp').addEventListener('click', () => adjustFontSize(1));
    document.getElementById('fontFamilySelect').addEventListener('change', changeFontFamily);
    document.getElementById('lineHeightRange').addEventListener('input', changeLineHeight);
    
    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => changeTheme(btn.dataset.theme));
    });
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 992 && sidebar.classList.contains('show')) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        }
    });
}

function toggleSidebar() {
    sidebar.classList.toggle('show');
}

function showView(view) {
    // Hide all views
    libraryView.classList.add('d-none');
    bookDetailView.classList.add('d-none');
    readerView.classList.add('d-none');
    
    // Show selected view
    switch(view) {
        case 'library':
            libraryView.classList.remove('d-none');
            currentView = 'library';
            break;
        case 'detail':
            bookDetailView.classList.remove('d-none');
            currentView = 'detail';
            break;
        case 'reader':
            readerView.classList.remove('d-none');
            currentView = 'reader';
            break;
    }
}

function handleSearch() {
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();
    const genre = genreFilter.value;
    const format = formatFilter.value;
    const status = statusFilter.value;
    
    filteredBooks = books.filter(book => {
        const matchesSearch = searchTerm === '' || 
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm) ||
            book.isbn.includes(searchTerm);
        
        const matchesGenre = genre === '' || book.genre === genre;
        const matchesFormat = format === '' || book.format === format;
        const matchesStatus = status === '' || book.readingStatus === status;
        
        return matchesSearch && matchesGenre && matchesFormat && matchesStatus;
    });
    
    renderBooks();
    updateBookCount();
}

function filterByFavorites() {
    filteredBooks = books.filter(book => book.isFavorite);
    renderBooks();
    updateBookCount();
}

function filterByLibrary() {
    filteredBooks = books.filter(book => book.inLibrary);
    renderBooks();
    updateBookCount();
}

function updateBookCount() {
    const count = filteredBooks.length;
    bookCount.textContent = `${count} ${count === 1 ? 'book' : 'books'} available`;
}

function renderBooks() {
    booksGrid.innerHTML = '';
    
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="text-muted">
                    <i class="fas fa-book-open fa-3x mb-3 opacity-50"></i>
                    <h5>No books found</h5>
                    <p>Try adjusting your search or filters</p>
                </div>
            </div>
        `;
        return;
    }
    
    filteredBooks.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';
    
    const statusClass = `status-${book.readingStatus.toLowerCase().replace(' ', '-')}`;
    const formatClass = `format-${book.format.toLowerCase()}`;
    
    col.innerHTML = `
        <div class="book-card h-100">
            <div class="book-cover">
                <img src="${book.cover}" alt="${book.title}" class="img-fluid">
                <div class="book-overlay"></div>
                
                ${book.readingStatus === 'Reading' && book.progress > 0 ? `
                    <div class="book-progress">
                        <div class="progress-bar" style="width: ${book.progress}%"></div>
                    </div>
                ` : ''}
                
                <div class="book-actions">
                    <button class="btn ${book.isFavorite ? 'active' : ''}" onclick="toggleFavorite('${book.id}')">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="btn ${book.inLibrary ? 'active' : ''}" onclick="toggleLibrary('${book.id}')">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            
            <div class="book-info">
                <h5 class="book-title">${book.title}</h5>
                <p class="book-author">by ${book.author}</p>
                <p class="book-description">${book.description}</p>
                
                <div class="rating mb-3">
                    ${generateStars(book.rating)}
                    <span class="rating-text">${book.rating}</span>
                    <span class="rating-reviews">(${book.reviews} reviews)</span>
                </div>
                
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="badge status-badge ${statusClass}">${book.readingStatus}</span>
                    <span class="badge ${formatClass}">${book.format}</span>
                    <small class="text-muted">${book.pages} pages</small>
                </div>
                
                <div class="d-grid gap-2">
                    <div class="row g-2">
                        <div class="col-6">
                            <button class="btn btn-outline-light btn-sm w-100" onclick="viewBookDetail('${book.id}')">
                                <i class="fas fa-eye me-1"></i>Details
                            </button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-primary btn-sm w-100" onclick="openReader('${book.id}')">
                                <i class="fas fa-book-open me-1"></i>Read
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function viewBookDetail(bookId) {
    selectedBookId = bookId;
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    // Populate book detail view
    document.getElementById('detailCover').src = book.cover;
    document.getElementById('detailCover').alt = book.title;
    document.getElementById('detailTitle').textContent = book.title;
    document.getElementById('detailAuthor').textContent = `by ${book.author}`;
    document.getElementById('detailRating').innerHTML = generateStars(book.rating);
    document.getElementById('detailReviews').textContent = `(${book.reviews} reviews)`;
    document.getElementById('detailStatus').textContent = book.readingStatus;
    document.getElementById('detailStatus').className = `badge status-badge status-${book.readingStatus.toLowerCase().replace(' ', '-')}`;
    document.getElementById('detailPages').textContent = book.pages;
    document.getElementById('detailISBN').textContent = book.isbn;
    document.getElementById('detailLanguage').textContent = book.language;
    document.getElementById('detailPublished').textContent = new Date(book.publishedDate).getFullYear();
    document.getElementById('detailFormat').textContent = book.format;
    document.getElementById('detailFormat').className = `badge format-${book.format.toLowerCase()}`;
    document.getElementById('detailGenre').textContent = book.genre;
    document.getElementById('detailSynopsis').textContent = book.synopsis;
    
    // Update progress
    if (book.readingStatus === 'Reading' && book.progress > 0) {
        document.getElementById('detailProgress').style.display = 'block';
        document.getElementById('detailProgress').querySelector('.progress-bar').style.width = `${book.progress}%`;
        document.getElementById('detailProgressText').textContent = `${book.progress}% complete`;
    } else {
        document.getElementById('detailProgress').style.display = 'none';
        document.getElementById('detailProgressText').textContent = '';
    }
    
    // Update buttons
    document.getElementById('favoriteBtn').classList.toggle('btn-danger', book.isFavorite);
    document.getElementById('favoriteBtn').classList.toggle('btn-outline-danger', !book.isFavorite);
    document.getElementById('favoriteBtn').innerHTML = `<i class="fas fa-heart me-1"></i>${book.isFavorite ? 'Favorited' : 'Favorite'}`;
    
    document.getElementById('libraryToggleBtn').classList.toggle('btn-success', book.inLibrary);
    document.getElementById('libraryToggleBtn').classList.toggle('btn-outline-success', !book.inLibrary);
    document.getElementById('libraryToggleBtn').innerHTML = `<i class="fas fa-plus me-1"></i>${book.inLibrary ? 'In Library' : 'Add to Library'}`;
    
    document.getElementById('statusSelect').value = book.readingStatus;
    
    document.getElementById('readBookBtn').innerHTML = `
        <i class="fas fa-book-open me-2"></i>
        ${book.readingStatus === 'Reading' ? 'Continue Reading' : 'Start Reading'}
    `;
    
    // Update tags
    const tagsContainer = document.getElementById('detailTags');
    tagsContainer.innerHTML = book.tags.map(tag => 
        `<span class="badge bg-secondary me-2 mb-2">#${tag}</span>`
    ).join('');
    
    showView('detail');
}

function openReader(bookId) {
    selectedBookId = bookId;
    const book = books.find(b => b.id === bookId);
    
    if (!book) return;
    
    // Populate reader view
    document.getElementById('readerTitle').textContent = book.title;
    document.getElementById('readerAuthor').textContent = `by ${book.author}`;
    document.getElementById('readerFormat').textContent = book.format;
    document.getElementById('readerPages').textContent = book.pages;
    
    // Initialize reader
    totalPages = Math.ceil(book.pages / 2);
    currentPage = Math.max(1, Math.floor((book.progress / 100) * totalPages));
    
    updateReaderProgress();
    loadChapterContent();
    generateTableOfContents();
    
    showView('reader');
}

function toggleFavorite(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.isFavorite = !book.isFavorite;
        
        if (currentView === 'library') {
            renderBooks();
        } else if (currentView === 'detail' && selectedBookId === bookId) {
            viewBookDetail(bookId);
        }
    }
}

function toggleLibrary(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        book.inLibrary = !book.inLibrary;
        
        if (currentView === 'library') {
            renderBooks();
        } else if (currentView === 'detail' && selectedBookId === bookId) {
            viewBookDetail(bookId);
        }
    }
}

function handleStatusChange() {
    const newStatus = document.getElementById('statusSelect').value;
    const book = books.find(b => b.id === selectedBookId);
    
    if (book) {
        book.readingStatus = newStatus;
        if (newStatus === 'Finished') {
            book.progress = 100;
        } else if (newStatus === 'To Read') {
            book.progress = 0;
        }
        
        viewBookDetail(selectedBookId);
    }
}

// Reader functions
function toggleContents() {
    const panel = document.getElementById('contentsPanel');
    panel.classList.toggle('d-none');
    
    // Hide settings panel if open
    document.getElementById('settingsPanel').classList.add('d-none');
}

function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('d-none');
    
    // Hide contents panel if open
    document.getElementById('contentsPanel').classList.add('d-none');
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        updateReaderProgress();
        loadChapterContent();
        updateBookProgress();
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updateReaderProgress();
        loadChapterContent();
        updateBookProgress();
    }
}

function updateReaderProgress() {
    const progress = Math.round((currentPage / totalPages) * 100);
    
    document.getElementById('readerProgress').style.width = `${progress}%`;
    document.getElementById('currentPage').textContent = currentPage;
    document.getElementById('totalPages').textContent = totalPages;
    document.getElementById('readingProgress').textContent = progress;
    
    // Update navigation buttons
    document.getElementById('prevPageBtn').disabled = currentPage === 1;
    document.getElementById('nextPageBtn').disabled = currentPage === totalPages;
}

function updateBookProgress() {
    const book = books.find(b => b.id === selectedBookId);
    if (book) {
        book.progress = Math.round((currentPage / totalPages) * 100);
        if (book.progress > 0 && book.readingStatus === 'To Read') {
            book.readingStatus = 'Reading';
        }
        if (book.progress === 100) {
            book.readingStatus = 'Finished';
        }
    }
}

function loadChapterContent() {
    const content = document.getElementById('readingContent');
    const chapterNum = Math.ceil(currentPage / 5);
    
    // Sample content (in real app, this would load actual book content)
    const sampleContent = `
        <div class="chapter-content">
            <h2>Chapter ${chapterNum}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
            
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p>
        </div>
    `;
    
    content.innerHTML = sampleContent;
    applyReaderSettings();
}

function generateTableOfContents() {
    const contentsList = document.getElementById('contentsList');
    contentsList.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement('button');
        btn.className = `btn ${Math.ceil(currentPage / 5) === i ? 'active' : ''}`;
        btn.innerHTML = `Chapter ${i}`;
        btn.onclick = () => goToChapter(i);
        contentsList.appendChild(btn);
    }
}

function goToChapter(chapterNum) {
    currentPage = (chapterNum - 1) * 5 + 1;
    updateReaderProgress();
    loadChapterContent();
    updateBookProgress();
    generateTableOfContents();
}

// Reader settings
function adjustFontSize(delta) {
    readerSettings.fontSize = Math.max(12, Math.min(24, readerSettings.fontSize + delta));
    document.getElementById('fontSizeDisplay').textContent = `${readerSettings.fontSize}px`;
    applyReaderSettings();
}

function changeFontFamily() {
    readerSettings.fontFamily = document.getElementById('fontFamilySelect').value;
    applyReaderSettings();
}

function changeLineHeight() {
    readerSettings.lineHeight = parseFloat(document.getElementById('lineHeightRange').value);
    document.getElementById('lineHeightDisplay').textContent = `${readerSettings.lineHeight}x`;
    applyReaderSettings();
}

function changeTheme(theme) {
    readerSettings.theme = theme;
    
    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-light');
    });
    
    document.querySelector(`[data-theme="${theme}"]`).classList.remove('btn-outline-light');
    document.querySelector(`[data-theme="${theme}"]`).classList.add('btn-primary');
    
    applyReaderSettings();
}

function applyReaderSettings() {
    const content = document.getElementById('readingContent');
    
    content.style.fontSize = `${readerSettings.fontSize}px`;
    content.style.lineHeight = readerSettings.lineHeight;
    
    // Apply font family
    switch(readerSettings.fontFamily) {
        case 'serif':
            content.style.fontFamily = 'Georgia, serif';
            break;
        case 'sans-serif':
            content.style.fontFamily = 'system-ui, sans-serif';
            break;
        case 'monospace':
            content.style.fontFamily = 'Monaco, monospace';
            break;
    }
    
    // Apply theme
    content.className = `reading-content flex-grow-1 p-5 theme-${readerSettings.theme}`;
}