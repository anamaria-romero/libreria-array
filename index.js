let pilaLibros = [
    Libro = {
        titulo: "Dracula",
        autor: "Abraham Stoker",
        genero: "Terror, Ficcion Gotica",
        idioma: "Ingles",
        precio: 70000,
        formato: "Tapa Dura",
        isbn: "9780194790581",
        descripcion: "En la obra de Bram Stoker, la figura del vampiro, inspirada en una creencia popular, encontró su forma perfecta. El autor incorpora elementos de antiguas leyendas y tradiciones orales en una novela gótica fascinante. Con gran habilidad, coloca al vampiro de tiempos aparentemente pasados en la época moderna. ",
        estado: "Nuevo",
        ubicacion: "Mercado Libre",
        fecha_publicacion: "26 de mayo de 1897",
        editorial: "México, DF: Editorial Porrúa.",
        paginas: 576,
        dimensiones: "17 x 1.3 x 24 cm",
        peso: "50 Gramos"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopía",
        idioma: "Inglés",
        precio: 120000,
        formato: "Tapa Blanda",
        isbn: "9780451524935",
        descripcion: "Una novela clásica que explora un futuro distópico donde el gobierno totalitario controla todos los aspectos de la vida de las personas.",
        estado: "Nuevo",
        ubicacion: "Librería del Saber",
        fecha_publicacion: "8 de junio de 1949",
        editorial:"México, DF: Editorial Porrúa.",
        paginas: 328,
        dimensiones: "10.8 x 1.5 x 17.1 cm",
        peso: "159 Gramos"
    },
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 80000,
        formato: "Tapa Dura",
        isbn: "9780307474728",
        descripcion: "La historia épica de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo.",
        estado: "Usado",
        ubicacion: "Librería El Dorado",
        fecha_publicacion: "30 de mayo de 1967",
        editorial: "México, DF: Editorial Porrúa.",
        paginas: 417,
        dimensiones: "13.2 x 2.8 x 20.3 cm",
        peso: "340 Gramos"
    },
    {
        titulo: "To Kill a Mockingbird",
        autor: "Harper Lee",
        genero: "Ficción clásica",
        idioma: "Ingles",
        precio: 150000,
        formato: "Tapa Dura",
        isbn: "9780061120084",
        descripcion: "Una novela que aborda temas de injusticia racial y moralidad a través de los ojos de una niña en el sur de Estados Unidos durante la década de 1930.",
        estado: "Nuevo",
        ubicacion: "Librería Atticus Finch",
        fecha_publicacion: "11 de julio de 1960",
        editorial: "México, DF: Editorial Porrúa.",
        paginas: 336,
        dimensiones: "10.6 x 1.8 x 17.1 cm",
        peso: "159 Gramos"
    },
    { 
        titulo: "Romeo y Julieta", 
        autor: "William Shakespeare", 
        genero: "Tragedia", 
        idioma: "Francés", 
        precio: 25990, 
        formato: "Versión Digital", 
        isbn: "9789871101325", 
        descripcion: "La famosa historia de amor entre dos jóvenes de familias rivales en Verona", 
        estado: "Usado", 
        ubicacion: "Cúspide", 
        fecha_publicacion: "1597", 
        editorial: "México, DF: Editorial Porrúa.", 
        paginas: 180, 
        dimensiones: "13 x 20 cm", 
        peso: "65 Gramos"
    },
    {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        genero: "Terror, Ciencia Ficción",
        idioma: "Inglés",
        precio: 65000,
        formato: "Tapa Blanda",
        isbn: "9788491051179",
        descripcion: "La historia de Frankenstein sigue siendo una de las historias de terror más influyentes de todos los tiempos. Mary Shelley creó un personaje que se ha convertido en un icono cultural, explorando temas como la ambición desmedida y la moralidad científica.",
        estado: "Nuevo",
        ubicacion: "Amazon",
        fecha_publicacion: "1 de enero de 1818",
        editorial: "Penguin Clásicos",
        paginas: 352,
        dimensiones: "13 x 2 x 19.8 cm",
        peso: "200 Gramos"
    },
    
    {
        titulo: "Macbeth", 
        autor: "William Shakespeare", 
        genero: "Tragedia", 
        idioma: "Alemán", 
        precio: 30990, 
        formato: "Tapa blanda", 
        isbn: "9788433920673", 
        descripcion: "La historia del ambicioso lord Macbeth y su esposa, quienes desencadenan una serie de eventos trágicos al intentar acceder al trono de Escocia", 
        estado: "Nuevo", 
        ubicacion: "Feria Chilena del Libro", 
        fecha_publicacion: "1606", 
        editorial: "Penguin Clásicos", 
        paginas: 190, 
        dimensiones: "16 x 22 cm", 
        peso: "80 Gramos"
    },
    {
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 49900,
        formato: "Tapa dura",
        isbn: "9788408170690",
        descripcion: "La saga de la familia Trueba en un país sin nombre en América del Sur.",
        estado: "Nuevo",
        ubicacion: "Cúspide",
        fecha_publicacion: "1982",
        editorial: "Penguin Clásicos",
        paginas: 480,
        dimensiones: "14 x 2.5 x 21 cm",
        peso: "50 Gramos"
    },
    {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Ficción",
        idioma: "Español",
        precio: 90900,
        formato: "Tapa blanda",
        isbn: "9788408172175",
        descripcion: "Un joven descubre un libro que cambiará su vida en la Barcelona de la posguerra.",
        estado: "Nuevo",
        ubicacion: "Cúspide",
        fecha_publicacion: "2001",
        editorial: "Penguin Clásicos",
        paginas: 576,
        dimensiones: "14 x 3 x 21 cm",
        peso: "150 Gramos"
    },
    {
        titulo: "El amor en los tiempos del cólera",
        autor: "Gabriel García Márquez",
        genero: "Romántica",
        idioma: "Español",
        precio: 59900,
        formato: "Amazon",
        isbn: "9780307389732",
        descripcion: "Una historia de amor entre Fermina Daza y Florentino Ariza.",
        estado: "Usado",
        ubicacion: "Pasillo 3, Estante 2",
        fecha_publicacion: "1985",
        editorial: "Penguin Clásicos",
        paginas: 368,
        dimensiones: "13.5 x 2 x 20.5 cm",
        peso: "95 Gramos"
    },
    {
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        genero: "Ficción",
        idioma: "Español",
        precio: 54900,
        formato: "Tapa blanda",
        isbn: "9788437604947",
        descripcion: "Una novela experimental que puede leerse de múltiples maneras.",
        estado: "Nuevo",
        ubicacion: "Librería del Saber",
        fecha_publicacion: "1963",
        editorial: "RM Verlag",
        paginas: 736,
        dimensiones: "13.5 x 2.8 x 20.5 cm",
        peso: "78 Gramos"
    },
    {
        titulo: "Pedro Páramo",
        autor: "Juan Rulfo",
        genero: "Ficción",
        idioma: "Español",
        precio: 34900,
        formato: "Tapa dura",
        isbn: "9788420471976",
        descripcion: "Un hombre busca a su padre en un pueblo fantasma en México.",
        estado: "Usado",
        ubicacion: "Amazon",
        fecha_publicacion: "1955",
        editorial: "RM Verlag",
        paginas: 124,
        dimensiones: "12.5 x 1 x 19.5 cm",
        peso: "95 Gramos"
    },
    {
        titulo: "Los detectives salvajes",
        autor: "Roberto Bolaño",
        genero: "Ficción",
        idioma: "Español",
        precio: 69900,
        formato: "Tapa blanda",
        isbn: "9788433967763",
        descripcion: "Dos poetas buscan a una misteriosa autora en México y el mundo.",
        estado: "Nuevo",
        ubicacion: "Pasillo 8, Estante 3",
        fecha_publicacion: "1998",
        editorial: "RM Verlag",
        paginas: 608,
        dimensiones: "14 x 3 x 21 cm",
        peso: "60 Gramos"
    },
    {
        titulo: "El túnel",
        autor: "Ernesto Sabato",
        genero: "Ficción",
        idioma: "Español",
        precio: 54900,
        formato: "Tapa blanda",
        isbn: "9788432201912",
        descripcion: "Un pintor obsesionado narra su descenso a la locura.",
        estado: "Nuevo",
        ubicacion: "Pasillo 9, Estante 2",
        fecha_publicacion: "1948",
        editorial: "RM Verlag",
        paginas: 168,
        dimensiones: "13 x 1 x 20 cm",
        peso: "1 Kilo"
    },
    {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 30000,
        formato: "Versión Digital",
        isbn: "9781400034710",
        descripcion: "La crónica de un asesinato anunciado en un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Librería El Dorado",
        fecha_publicacion: "1981",
        editorial: "RM Verlag",
        paginas: 128,
        dimensiones: "12.5 x 1 x 19.5 cm",
        peso: "70 Gramos"
    },
    {
        titulo: "El coronel no tiene quien le escriba",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 21900,
        formato: "Tapa blanda",
        isbn: "9780307474727",
        descripcion: "La historia de un coronel que espera una pensión que nunca llega.",
        estado: "Nuevo",
        ubicacion: "Pasillo 2, Estante 2",
        fecha_publicacion: "1961",
        editorial: "Editorial Sudamericana",
        paginas: 96,
        dimensiones: "12.5 x 1 x 19.5 cm",
        peso: "80 Gramos"
    },
    {
        titulo: "El otoño del patriarca",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 60900,
        formato: "Tapa dura",
        isbn: "9781400034529",
        descripcion: "Una novela sobre un dictador solitario en su palacio desmoronado.",
        estado: "Usado",
        ubicacion: "Mercado Libre",
        fecha_publicacion: "1975",
        editorial: "Editorial Sudamericana",
        paginas: 272,
        dimensiones: "13 x 1.8 x 20 cm",
        peso: "49 Gramos"
    },
    {
        titulo: "La hojarasca",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 96000,
        formato: "Tapa blanda",
        isbn: "9781400034901",
        descripcion: "Una novela sobre la llegada de un médico a un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Pasillo 4, Estante 2",
        fecha_publicacion: "1955",
        editorial: "Editorial Sudamericana",
        paginas: 128,
        dimensiones: "12.5 x 1 x 19.5 cm",
        peso: "100 Gramos"
    },
    {
        titulo: "La mala hora",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 43000,
        formato: "Tapa dura",
        isbn: "9781400034918",
        descripcion: "Una novela sobre la violencia y la corrupción en un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Librería El Dorado",
        fecha_publicacion: "1962",
        editorial: "Editorial Sudamericana",
        paginas: 184,
        dimensiones: "12.5 x 1.2 x 19.5 cm",
        peso: "90 Gramos"
    },
    {
        titulo: "Ojos de perro azul",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: 82000,
        formato: "Tapa blanda",
        isbn: "9781400034871",
        descripcion: "Una colección de cuentos que exploran el realismo mágico.",
        estado: "Usado",
        ubicacion: "Mercado Libre",
        fecha_publicacion: "1972",
        editorial: "Editorial Sudamericana",
        paginas: 160,
        dimensiones: "12.5 x 1 x 19.5 cm",
        peso: "1 Kilo"
    }
];


function agregarLibro(Libro) {
    pilaLibros.push(Libro);
    console.log(Libro + " Agregado encima de la pila.");
}

function quitarLibro() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        let libroQuitado = pilaLibros.pop();
        console.log(libroQuitado + " El libro ha sido eliminado.");
    }
}

function mostrarPila() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        console.log("Pila actual de libros:");
        pilaLibros.forEach(Libro => {
            console.log(Libro);
        });
    }
}

function mostrarMenu() {
    console.log("¡Bienvenido a la gestión de libros!");
    let opcion;
    do {
        console.log("\nMenú:");
        console.log("1. Agregar un libro");
        console.log("2. Quitar un libro");
        console.log("3. Mostrar la pila de libros");
        console.log("4. Salir");

        opcion = prompt("Seleccione una opción (1-4): " + " 1. Agregar un libro." + " 2. Quitar un libro." + " 3. Mostrar la pila de libros." + " 4. Salir.");

        switch (opcion) {
            case "1":
                let nuevoLibro = prompt("Ingrese el título del nuevo libro:");
                agregarLibro(nuevoLibro);
                break;
            case "2":
                quitarLibro();
                break;
            case "3":
                mostrarPila(Libro);
                break;
            case "4":
                console.log("Saliendo de la libreria");
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "4");
}
mostrarMenu();


const titulo = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        precio: Libro.precio,
    };
});
console.table(titulo);

const genero = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        genero: Libro.genero,
        descripcion: Libro.descripcion,
    };
});
console.table(genero);

const idioma = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        idioma: Libro.idioma,
        formato: Libro.formato,
    };
});
console.table(idioma);

const isbn = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        isbn: Libro.isbn,
        estado: Libro.estado,
    };
});
console.table(isbn);

const ubicacion = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        ubicacion: Libro.ubicacion,
        fecha_publicacion: Libro.fecha_publicacion,
    };
});
console.table(ubicacion);

const dimensiones = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        dimensiones: Libro.dimensiones,
        peso: Libro.peso,
    };
});
console.table(dimensiones);

const paginas = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        paginas: Libro.paginas,
        idioma: Libro.idioma,
    };
});
console.table(paginas);

const formato = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        formato: Libro.formato,
        dimensiones: Libro.dimensiones,
    };
});
console.table(formato);

const precio = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        precio: Libro.precio,
        ubicacion: Libro.ubicacion,
    };
});
console.table(precio);

const descripcion = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        descripcion: Libro.descripcion,
        genero: Libro.genero,
    };
});
console.table(descripcion);


