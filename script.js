const books = [
    {
        id: 1,
        title: "El Señor de los Anillos",
        author: "J.R.R. Tolkien",
        price: 29.99,
        image: "images/El Señor de los Anillos.jpg",
        featured: true,
        publishDate: "29 de julio de 1954",
        description: "Una épica historia de fantasía que sigue a Frodo Bolsón en su misión para destruir el Anillo Único y derrotar al Señor Oscuro Sauron.",
        reviews: [
            { user: "María G.", rating: 5, comment: "Una obra maestra absoluta." },
            { user: "Juan P.", rating: 5, comment: "El mejor libro de fantasía jamás escrito." },
            { user: "Ana R.", rating: 4, comment: "Increíble mundo y personajes." }
        ],
        recommendations: [2, 4, 8],
        pages: 1178,
        language: "Español",
        isbn: "978-8445000668",
        editorial: "Minotauro"
    },
    {
        id: 2,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        price: 24.99,
        image: "images/Cien Años de Soledad.jpg",
        featured: true,
        publishDate: "30 de mayo de 1967",
        description: "La saga de la familia Buendía y el pueblo mítico de Macondo, una obra maestra del realismo mágico que narra la historia de siete generaciones y explora temas de amor, guerra, y destino.",
        reviews: [
            { user: "Carlos M.", rating: 5, comment: "Una joya de la literatura latinoamericana." },
            { user: "Laura S.", rating: 4, comment: "Fascinante y complejo." },
            { user: "Pedro N.", rating: 5, comment: "Un viaje inolvidable." }
        ],
        recommendations: [3, 6, 13],
        pages: 432,
        language: "Español",
        isbn: "978-8497592208",
        editorial: "Diana"
    },
    {
        id: 3,
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        price: 19.99,
        image: "images/Don Quijote de la Mancha.jpg",
        featured: true,
        publishDate: "1605",
        description: "La obra cumbre de la literatura española, que narra las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza. Una sátira magistral que explora los límites entre la realidad y la ficción.",
        pages: 863,
        language: "Español",
        isbn: "978-8424922498",
        editorial: "Alfaguara",
        reviews: [
            { user: "Roberto L.", rating: 5, comment: "La obra maestra de la literatura española." },
            { user: "Carmen D.", rating: 4, comment: "Una lectura esencial y atemporal." }
        ]
    },
    {
        id: 4,
        title: "Harry Potter y la Piedra Filosofal",
        author: "J.K. Rowling",
        price: 22.99,
        image: "images/Harry Potter.jpg",
        featured: true,
        publishDate: "26 de junio de 1997",
        description: "El primer libro de la saga Harry Potter, donde un joven mago descubre su verdadera identidad y comienza sus aventuras en la Escuela Hogwarts de Magia y Hechicería.",
        pages: 309,
        language: "Español",
        isbn: "978-8478884459",
        editorial: "Salamandra",
        reviews: [
            { user: "Diana P.", rating: 5, comment: "El inicio perfecto de una saga mágica." },
            { user: "Miguel A.", rating: 5, comment: "Cautivador desde la primera página." }
        ]
    },
    {
        id: 5,
        title: "1984",
        author: "George Orwell",
        price: 18.99,
        image: "images/1984.jpg",
        featured: true,
        publishDate: "8 de junio de 1949",
        description: "Una inquietante visión distópica de un futuro totalitario, donde el gobierno mantiene el poder mediante la vigilancia constante y la manipulación de la verdad.",
        pages: 326,
        language: "Español",
        isbn: "978-8499890944",
        editorial: "Debolsillo",
        reviews: [
            { user: "Andrea M.", rating: 5, comment: "Más relevante que nunca." },
            { user: "Luis R.", rating: 4, comment: "Una obra profética y perturbadora." }
        ]
    },
    {
        id: 6,
        title: "La Casa de los Espíritus",
        author: "Isabel Allende",
        price: 21.99,
        image: "images/La casa de los Espiritus.jpg",
        featured: false,
        publishDate: "1982",
        description: "Una saga familiar que mezcla realismo mágico con la historia política de Chile, siguiendo a cuatro generaciones de la familia Trueba a través de momentos cruciales del siglo XX.",
        pages: 442,
        language: "Español",
        isbn: "978-8401352898",
        editorial: "Plaza & Janés",
        reviews: [
            { user: "Sofia B.", rating: 5, comment: "Una obra maestra del realismo mágico." },
            { user: "Gabriel H.", rating: 4, comment: "Narrativa poderosa y envolvente." }
        ]
    },
    {
        id: 7,
        title: "Rayuela",
        author: "Julio Cortázar",
        price: 23.99,
        image: "images/Rayuela.jpg",
        featured: false,
        publishDate: "1963",
        description: "Una novela revolucionaria que puede leerse en múltiples órdenes, explorando el amor, el arte y la búsqueda existencial a través de sus personajes en París y Buenos Aires.",
        pages: 736,
        language: "Español",
        isbn: "978-8466331906",
        editorial: "Alfaguara",
        reviews: [
            { user: "Martín C.", rating: 5, comment: "Una experiencia literaria única." },
            { user: "Elena V.", rating: 4, comment: "Compleja y fascinante." }
        ]
    },
    {
        id: 8,
        title: "El Alquimista",
        author: "Paulo Coelho",
        price: 17.99,
        image: "images/El Alquimista.jpg",
        featured: false,
        publishDate: "1988",
        description: "La historia de Santiago, un joven pastor andaluz que viaja a Egipto tras un sueño recurrente, descubriendo el significado de seguir nuestro destino y escuchar al corazón.",
        pages: 192,
        language: "Español",
        isbn: "978-8408144121",
        editorial: "Planeta",
        reviews: [
            { user: "Clara M.", rating: 5, comment: "Un libro que cambia vidas." },
            { user: "Pablo S.", rating: 4, comment: "Inspirador y profundo." }
        ]
    },
    {
        id: 9,
        title: "La Sombra del Viento",
        author: "Carlos Ruiz Zafón",
        price: 20.99,
        image: "images/La Sombra del Viento.jpg",
        featured: false,
        publishDate: "2001",
        description: "Un misterioso libro lleva a Daniel Sempere a adentrarse en una intriga en la Barcelona de la posguerra, donde amor, traición y literatura se entrelazan en el Cementerio de los Libros Olvidados.",
        pages: 544,
        language: "Español",
        isbn: "978-8408163434",
        editorial: "Planeta",
        reviews: [
            { user: "Marina R.", rating: 5, comment: "Una historia absorbente y magistral." },
            { user: "Jorge L.", rating: 5, comment: "Barcelona cobra vida en sus páginas." }
        ]
    },
    {
        id: 10,
        title: "Ficciones",
        author: "Jorge Luis Borges",
        price: 19.99,
        image: "images/Ficciones.jpg",
        featured: false,
        publishDate: "1944",
        description: "Una colección de cuentos que exploran temas como el infinito, el tiempo, los espejos y los laberintos, demostrando la maestría de Borges en la creación de universos literarios complejos.",
        pages: 218,
        language: "Español",
        isbn: "978-8499089507",
        editorial: "Debolsillo",
        reviews: [
            { user: "Eduardo M.", rating: 5, comment: "Genialidad en estado puro." },
            { user: "Rosa P.", rating: 4, comment: "Complejo y fascinante." }
        ]
    },
    {
        id: 11,
        title: "Los Detectives Salvajes",
        author: "Roberto Bolaño",
        price: 25.99,
        image: "images/Los Detectives Salvajes.jpg",
        featured: false,
        publishDate: "1998",
        description: "Una búsqueda épica que sigue a un grupo de poetas por México, Europa y África, mezclando realidad y ficción en una narrativa que revoluciona la literatura latinoamericana.",
        pages: 624,
        language: "Español",
        isbn: "978-8433969755",
        editorial: "Anagrama",
        reviews: [
            { user: "Felipe R.", rating: 5, comment: "Una obra maestra contemporánea." },
            { user: "Ana M.", rating: 4, comment: "Innovadora y cautivante." }
        ]
    },
    {
        id: 12,
        title: "La Ciudad y los Perros",
        author: "Mario Vargas Llosa",
        price: 22.99,
        image: "images/La Ciudad y los Perros.jpg",
        featured: false,
        publishDate: "1963",
        description: "La vida en el Colegio Militar Leoncio Prado de Lima, donde un grupo de cadetes lucha por sobrevivir en un ambiente de violencia, jerarquía y códigos de honor.",
        pages: 448,
        language: "Español",
        isbn: "978-8420471830",
        editorial: "Alfaguara",
        reviews: [
            { user: "Ricardo V.", rating: 5, comment: "Cruda y poderosa." },
            { user: "Sandra L.", rating: 4, comment: "Una crítica social brillante." }
        ]
    },
    {
        id: 13,
        title: "Pedro Páramo",
        author: "Juan Rulfo",
        price: 16.99,
        image: "images/Pedro Páramo.jpg",
        featured: false,
        publishDate: "1955",
        description: "Juan Preciado viaja a Comala buscando a su padre, Pedro Páramo, solo para encontrar un pueblo fantasma lleno de ecos y susurros del pasado. Una obra maestra del realismo mágico.",
        pages: 128,
        language: "Español",
        isbn: "978-8437604979",
        editorial: "Cátedra",
        reviews: [
            { user: "Manuel O.", rating: 5, comment: "Una obra maestra atemporal." },
            { user: "Isabel D.", rating: 5, comment: "Poética y misteriosa." }
        ]
    },
    {
        id: 14,
        title: "El Laberinto de la Soledad",
        author: "Octavio Paz",
        price: 18.99,
        image: "images/El Laberinto de la Soledad.jpg",
        featured: false,
        publishDate: "1950",
        description: "Un profundo ensayo sobre la identidad mexicana, explorando la historia, cultura y psicología del pueblo mexicano a través de sus máscaras, fiestas y rituales.",
        pages: 351,
        language: "Español",
        isbn: "978-8437504568",
        editorial: "Cátedra",
        reviews: [
            { user: "Raúl M.", rating: 5, comment: "Fundamental para entender México." },
            { user: "Teresa G.", rating: 4, comment: "Análisis profundo y revelador." }
        ]
    },
    {
        id: 15,
        title: "La Tregua",
        author: "Mario Benedetti",
        price: 20.99,
        image: "images/La Tregua.jpg",
        featured: false,
        publishDate: "1960",
        description: "A través del diario de Martín Santomé, un viudo próximo a jubilarse, se narra una historia de amor tardío y esperanza, explorando la rutina, la soledad y las segundas oportunidades.",
        pages: 192,
        language: "Español",
        isbn: "978-8420422543",
        editorial: "Alfaguara",
        reviews: [
            { user: "Patricia L.", rating: 5, comment: "Conmovedora y humana." },
            { user: "Diego R.", rating: 4, comment: "Una historia que toca el corazón." }
        ]
    }
];

let currentFeaturedIndex = 0;

// Función para mostrar libros destacados en el carrusel
function displayFeaturedBooks() {
    const featuredBooksList = document.getElementById('featuredBooksList');
    if (featuredBooksList) {
        // Limpiar el contenedor
        featuredBooksList.innerHTML = '';
        
        // Mostrar 3 libros empezando desde el índice actual
        for (let i = 0; i < 3; i++) {
            const bookIndex = (currentFeaturedIndex + i) % books.length;
            const book = books[bookIndex];
            
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card featured-book';
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                    ❤️ Añadir a favoritos
                </button>
            `;
            
            // Añadir animación de entrada
            bookElement.style.animation = `fadeIn 1s ease ${i * 0.5}s`;
            featuredBooksList.appendChild(bookElement);
        }
    }
}

// Función para rotar los libros destacados
function rotateFeaturedBooks() {
    currentFeaturedIndex = (currentFeaturedIndex + 3) % books.length;
    const featuredBooksList = document.getElementById('featuredBooksList');
    if (featuredBooksList) {
        // Añadir clase para animación de salida
        const currentBooks = featuredBooksList.children;
        Array.from(currentBooks).forEach(book => {
            book.style.animation = 'fadeOut 1s ease';
        });
        
        // Esperar a que termine la animación de salida antes de actualizar
        setTimeout(() => {
            displayFeaturedBooks();
        }, 1000);
    }
}

// Función para mostrar todos los libros
function displayAllBooks() {
    const bookList = document.getElementById('bookList');
    if (bookList) {
        bookList.innerHTML = books.map(book => `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                    ❤️ Añadir a favoritos
                </button>
            </div>
        `).join('');
    }
}

// Resto del código para favoritos y manejo del formulario permanece igual
function addToFavorites(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(bookId)) {
        favorites.push(bookId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('¡Libro añadido a favoritos!');
    } else {
        alert('Este libro ya está en tus favoritos');
    }
}

function displayFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    if (favoritesList) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteBooks = books.filter(book => favorites.includes(book.id));
        
        if (favoriteBooks.length === 0) {
            favoritesList.innerHTML = '<p>No tienes libros favoritos aún.</p>';
            return;
        }

        favoritesList.innerHTML = favoriteBooks.map(book => `
            <div class="book-card">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <button onclick="removeFromFavorites(${book.id})" class="favorite-btn">
                    💔 Eliminar de favoritos
                </button>
            </div>
        `).join('');
    }
}

function removeFromFavorites(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== bookId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Inicialización cuando el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            alert('¡Mensaje enviado! Gracias por contactarnos.');
            contactForm.reset();
        });
    }

    // Inicializar las páginas
    displayFeaturedBooks();
    displayAllBooks();
    displayFavorites();

    // Iniciar la rotación automática de libros destacados
    setInterval(rotateFeaturedBooks, 3000);
});
function displayFeaturedBooks() {
    const featuredBooksList = document.getElementById('featuredBooksList');
    if (featuredBooksList) {
        featuredBooksList.innerHTML = '';
        
        for (let i = 0; i < 3; i++) {
            const bookIndex = (currentFeaturedIndex + i) % books.length;
            const book = books[bookIndex];
            
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card featured-book';
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                    ❤️ Añadir a favoritos
                </button>
            `;
            
            // Añadir evento click para abrir modal
            bookElement.onclick = (e) => {
                if (!e.target.classList.contains('favorite-btn')) {
                    createBookModal(book.id);
                }
            };
            
            bookElement.style.animation = `fadeIn 1s ease ${i * 0.5}s`;
            featuredBooksList.appendChild(bookElement);
        }
    }
}

function displayAllBooks() {
    const bookList = document.getElementById('bookList');
    if (bookList) {
        bookList.innerHTML = books.map(book => `
            <div class="book-card" onclick="createBookModal(${book.id})">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <button onclick="event.stopPropagation(); addToFavorites(${book.id})" class="favorite-btn">
                    ❤️ Añadir a favoritos
                </button>
            </div>
        `).join('');
    }
}
// Función para crear y mostrar el modal del libro
function createBookModal(bookId) {
    // Encontrar el libro por ID
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    // Crear el elemento modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Construir el contenido del modal
    const detailedInfo = `
        <div class="modal-header">
            <h2>${book.title}</h2>
            <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
            <div class="book-details">
                <div class="book-image">
                    <img src="${book.image}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <p><strong>Autor:</strong> ${book.author}</p>
                    <p><strong>Precio:</strong> $${book.price}</p>
                    ${book.publishDate ? `<p><strong>Fecha de publicación:</strong> ${book.publishDate}</p>` : ''}
                    ${book.description ? `<p><strong>Descripción:</strong> ${book.description}</p>` : ''}
                    ${book.isbn ? `<p><strong>ISBN:</strong> ${book.isbn}</p>` : ''}
                    ${book.editorial ? `<p><strong>Editorial:</strong> ${book.editorial}</p>` : ''}
                    ${book.pages ? `<p><strong>Páginas:</strong> ${book.pages}</p>` : ''}
                </div>
            </div>
            ${book.reviews ? `
                <div class="book-reviews">
                    <h3>Reseñas</h3>
                    <div class="reviews-list">
                        ${book.reviews.map(review => `
                            <div class="review">
                                <p class="review-rating">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                                </p>
                                <p class="review-comment">${review.comment}</p>
                                <p class="review-user">- ${review.user}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            <div class="modal-actions">
                <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                    ❤️ Añadir a favoritos
                </button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = detailedInfo;
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Evitar scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Manejar el cierre del modal
    const closeButton = modalContent.querySelector('.close-modal');
    closeButton.onclick = () => {
        document.body.removeChild(modalOverlay);
        document.body.style.overflow = 'auto';
    };
    
    // Cerrar modal al hacer clic fuera de él
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
            document.body.style.overflow = 'auto';
        }
    };
}
// Función para crear y mostrar el modal del libro
function createBookModal(bookId) {
    // Encontrar el libro por ID
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    // Crear el elemento modal
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Construir el contenido del modal
    const detailedInfo = `
        <div class="modal-header">
            <h2>${book.title}</h2>
            <button class="close-modal">&times;</button>
        </div>
        <div class="modal-body">
            <div class="book-details">
                <div class="book-image">
                    <img src="${book.image}" alt="${book.title}">
                </div>
                <div class="book-info">
                    <p><strong>Autor:</strong> ${book.author}</p>
                    <p><strong>Precio:</strong> $${book.price}</p>
                    ${book.publishDate ? `<p><strong>Fecha de publicación:</strong> ${book.publishDate}</p>` : ''}
                    ${book.description ? `<p><strong>Descripción:</strong> ${book.description}</p>` : ''}
                    ${book.isbn ? `<p><strong>ISBN:</strong> ${book.isbn}</p>` : ''}
                    ${book.editorial ? `<p><strong>Editorial:</strong> ${book.editorial}</p>` : ''}
                    ${book.pages ? `<p><strong>Páginas:</strong> ${book.pages}</p>` : ''}
                </div>
            </div>
            ${book.reviews ? `
                <div class="book-reviews">
                    <h3>Reseñas</h3>
                    <div class="reviews-list">
                        ${book.reviews.map(review => `
                            <div class="review">
                                <p class="review-rating">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}
                                </p>
                                <p class="review-comment">${review.comment}</p>
                                <p class="review-user">- ${review.user}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            <div class="modal-actions">
            <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                ❤️ Añadir a favoritos
            </button>
            <button onclick="addToCart(${book.id})" class="cart-btn">
                🛒 Añadir al Carrito
                </button>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = detailedInfo;
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Evitar scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    
    // Manejar el cierre del modal
    const closeButton = modalContent.querySelector('.close-modal');
    closeButton.onclick = () => {
        document.body.removeChild(modalOverlay);
        document.body.style.overflow = 'auto';
    };
    
    // Cerrar modal al hacer clic fuera de él
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
            document.body.style.overflow = 'auto';
        }
    };
}

/*LOGIN*/
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const formTitle = document.getElementById('form-title');
    const toggleFormLink = document.getElementById('toggle-form');
    const errorMessage = document.getElementById('error-message');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const submitBtn = document.getElementById('submit-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    let isLoginMode = true;

    // Cargar usuarios desde localStorage
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');

    toggleFormLink.addEventListener('click', () => {
        isLoginMode = !isLoginMode;
        updateFormMode();
    });

    function updateFormMode() {
        if (isLoginMode) {
            formTitle.textContent = 'Iniciar Sesión';
            confirmPasswordInput.style.display = 'none';
            submitBtn.textContent = 'Iniciar Sesión';
            toggleFormLink.textContent = '¿No tienes cuenta? Registrarse';
        } else {
            formTitle.textContent = 'Registrarse';
            confirmPasswordInput.style.display = 'block';
            submitBtn.textContent = 'Registrarse';
            toggleFormLink.textContent = '¿Ya tienes cuenta? Iniciar Sesión';
        }
        errorMessage.textContent = '';
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        errorMessage.textContent = '';

        const username = usernameInput.value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!isLoginMode) {
            if (!username || !password || !confirmPassword) {
                errorMessage.textContent = 'Todos los campos son obligatorios';
                return;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = 'Las contraseñas no coinciden';
                return;
            }

            const userExists = users.some(u => u.username === username);
            if (userExists) {
                errorMessage.textContent = 'El nombre de usuario ya existe';
                return;
            }

            const newUser = { username, password };
            users.push(newUser);
            localStorage.setItem('registeredUsers', JSON.stringify(users));
            
            localStorage.setItem('currentUser', username);
            
            window.location.href = 'index.html';
        } else {
            const user = users.find(u => u.username === username && u.password === password);
            if (user) {
                localStorage.setItem('currentUser', username);
                
                window.location.href = 'index.html';
            } else {
                errorMessage.textContent = 'Credenciales incorrectas';
            }
        }
    });

    updateFormMode();
});

// index.html
document.addEventListener('DOMContentLoaded', () => {
    const usernameDisplay = document.getElementById('username-display');
    const logoutBtn = document.getElementById('logout-btn');

    const currentUser = localStorage.getItem('currentUser');

    // Iniciar Sesion
    if (currentUser && usernameDisplay) {
        usernameDisplay.textContent = currentUser;
    }

    // Cerrar Sesion
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const welcomeContainer = document.getElementById('welcome-container');
    const loginButtonContainer = document.getElementById('login-button-container');
    const logoutButtonContainer = document.getElementById('logout-button-container');

    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        welcomeContainer.innerHTML = `<h2>Bienvenido, ${currentUser}</h2>`;
        loginButtonContainer.style.display = 'none';
        logoutButtonContainer.innerHTML = `
            <button id="logout-btn" class="logout-btn">Cerrar Sesión</button>
        `;
        logoutButtonContainer.style.display = 'block';

        document.getElementById('logout-btn').addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    } else {
        welcomeContainer.innerHTML = `<h2>Bienvenido</h2>`;
        loginButtonContainer.innerHTML = `
            <a href="login.html" class="login-btn">Iniciar Sesión</a>
        `;
        loginButtonContainer.style.display = 'block';
        logoutButtonContainer.style.display = 'none';
    }
});
/* carrito */
let cart = [];

function renderBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>$${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Añadir al Carrito</button>
        `;
        booksContainer.appendChild(bookCard);
    });
}

function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    
    const existingBook = cart.find(item => item.id === bookId);
    
    if (existingBook) {
        existingBook.quantity += 1;
    } else {
        cart.push({...book, quantity: 1});
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');

    // Actualizar número de items
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Limpiar contenedor de items
    cartItemsContainer.innerHTML = '';

    // Renderizar items del carrito
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.title} x${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">X</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Actualizar precio total
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = total.toFixed(2);
}

function removeFromCart(bookId) {
    const index = cart.findIndex(item => item.id === bookId);
    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
    }
    updateCartDisplay();
}

function checkout() {
    if(cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    alert('¡Compra realizada con éxito! Total: $' + total.toFixed(2));
    
    cart = [];
    updateCartDisplay();
}

//Botón de checkout
document.getElementById('checkout-btn').addEventListener('click', checkout);

// Inicializar la página
renderBooks();
function displayFeaturedBooks() {
    const featuredBooksList = document.getElementById('featuredBooksList');
    if (featuredBooksList) {
        featuredBooksList.innerHTML = '';
        
        for (let i = 0; i < 3; i++) {
            const bookIndex = (currentFeaturedIndex + i) % books.length;
            const book = books[bookIndex];
            
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card featured-book';
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <div class="book-actions">
                    <button onclick="addToFavorites(${book.id})" class="favorite-btn">
                        ❤️ Añadir a favoritos
                    </button>
                    <button onclick="event.stopPropagation(); addToCart(${book.id})" class="cart-btn">
                        🛒 Añadir al Carrito
                    </button>
                </div>
            `;
            
            // Añadir evento click para abrir modal
            bookElement.onclick = (e) => {
                if (!e.target.classList.contains('favorite-btn') && !e.target.classList.contains('cart-btn')) {
                    createBookModal(book.id);
                }
            };
            
            bookElement.style.animation = `fadeIn 1s ease ${i * 0.5}s`;
            featuredBooksList.appendChild(bookElement);
        }
    }
}

function displayAllBooks() {
    const bookList = document.getElementById('bookList');
    if (bookList) {
        bookList.innerHTML = books.map(book => `
            <div class="book-card" onclick="createBookModal(${book.id})">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p class="price">$${book.price}</p>
                <div class="book-actions">
                    <button onclick="event.stopPropagation(); addToFavorites(${book.id})" class="favorite-btn">
                        ❤️ Añadir a favoritos
                    </button>
                    <button onclick="event.stopPropagation(); addToCart(${book.id})" class="cart-btn">
                        🛒 Añadir al Carrito
                    </button>
                </div>
            </div>
        `).join('');
    }
}