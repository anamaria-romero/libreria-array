//pila libros//
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
        idioma: "Frances", 
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
        dimensiones: "17 x 2.5 x 21 cm",
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
        dimensiones: "13.5 x 2 x 21 cm",
        peso: "97 Gramos"
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
        dimensiones: "12.5 x 1 x 19 cm",
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
        peso: "63 gramos"
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
        dimensiones: "12.5 x 1.9 x 19.5 cm",
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
        dimensiones: "12.5 x 1.4 x 19.5 cm",
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
        dimensiones: "13 x 4 x 20 cm",
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
        dimensiones: "12.5 x 3 x 19.5 cm",
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
        dimensiones: "12.5 x 2 x 19.5 cm",
        peso: "1 Kilo"
    }
];


//defina la logica para Agregar un libro encima de la pila usando el método push. //
function agregarLibro() {
    let nuevoLibro =  [
        {
        titulo: "Harry Potter",
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
    }
];

    pilaLibros.push.apply(nuevoLibro, pilaLibros);
    pilaLibros = nuevoLibro;
    console.log(" Agregado encima de la pila.");
    console.log(pilaLibros);
};


//Quitar un libro de encima de la pila.//
function quitarLibro() {
    if (pilaLibros.length === 0) {
        console.log("La pila de libros está vacía.");
    } else {
        let libroQuitado = pilaLibros.pop();
        console.log(" El libro ha sido eliminado.");
        console.log(libroQuitado)
    }
}


//Mostrar la pila actual de libros. //
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


//Diseña un menú en consola en el cual pueda llamar las funciones anteriormente mencionadas//
function mostrarMenu() {
    console.log("¡Bienvenido a la gestión de libros!");
    let opcion;
    do {
        opcion = prompt("Seleccione una opción (1-19): \n" + " 1. Agregar un libro. \n" + " 2. Quitar un libro. \n" + " 3. Mostrar la pila de libros. \n" + " 4. Listar los libros en 10 iteraciones diferentes. \n" + " 5. Agregar descuentos. \n" + " 6. Listado de libros con descuentos. \n" + " 7. Libros con un precio mayor a $50.000. \n" + " 8. Libros por numero mas alto de paginas. \n" + " 9. Libros por numero de paginas de mayor a menor. \n" + " 10. Libros caros por titulo mayores a $50.000. \n" + " 11. Libros que tengan menos de 200 paginas. \n" + " 12. Libros mayores a $100.000 de mayor a menor. \n" +  " 13. Buscar un objeto del array por titulo. \n" + " 14. Buscar un objeto del array por autor. \n" + " 15. Buscar un objeto del array por fecha publicacion. \n" + " 16. Buscar un objeto del array por genero. \n" + " 17. Buscar un objeto del array por idioma \n" + " 18. Crear 10 iteraciones diferentes de busqueda de libros en el sistema.\n" +" 19. Salir.");

        switch (opcion) {
            case "1":
                agregarLibro();
                break;
            case "2":
                quitarLibro();
                break;
            case "3":
                mostrarPila(Libro);
                break;
            case "4":
                console.table(lista1);
                console.table(lista2);
                console.table(lista3);
                console.table(lista4);
                console.table(lista5);
                console.table(lista6);
                console.table(lista7);
                console.table(lista8);
                console.table(lista9);
                console.table(lista10);
                break;
            case "5":
                console.log(libroDescuento);
                break;
            case "6":
                console.table(listaDescuento);
                break;
            case "7":
                console.log(librosCaros);
                break;
            case "8":
                console.table(filtrarDeMayorAMenor);
                break;
            case "9":
                console.log(listaDeMayorAMenor);
                break;
            case "10":
                console.table(librosCarosPorTitulo);
                break;
            case "11":
                console.table(librosMenoresDe200);
                break;
            case "12":
                console.table(librosCarosDeMayorAMenor);
                break;
            case "13":
                console.table(libroPorTitulo);
                break;
            case "14":
                console.table(libroPorAutor);
                break;
            case "15":
                console.table(libroPorFecha);
                break;
            case "16":
                console.table(libroPorGenero);
                break;
            case "17":
                console.table(libroPorIdioma);
                break;
            case "18":
                console.table(libroPorPrecio);
                console.table(libroPorIsbn);
                console.table(libroPorDescripcion);
                console.table(libroPorEditorial);
                console.table(libroPorUbicacion);
                console.table(libroPorPaginas);
                console.table(libroPorDimensiones);
                console.table(libroPorPeso);
                console.table(libroPorEstado);
                console.table(libroPorFormato);
                break;
            case "19":
                console.log("Salir");
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "19");
}


// Realizar uso del array Method .map y listar los libros por Titulo, Autor, Editorial y Precio; Crear 10 iteraciones diferentes manteniendo el atributo Titulo//
const lista1 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        editorial: Libro.editorial,
        precio: Libro.precio,
    };
});

const lista2 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        genero: Libro.genero,
        descripcion: Libro.descripcion,
    };
});

const lista3 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        idioma: Libro.idioma,
        formato: Libro.formato,
    };
});

const lista4 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        isbn: Libro.isbn,
        estado: Libro.estado,
    };
});

const lista5 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        ubicacion: Libro.ubicacion,
        fecha_publicacion: Libro.fecha_publicacion,
    };
});

const lista6 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        dimensiones: Libro.dimensiones,
        peso: Libro.peso,
    };
});

const lista7 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        paginas: Libro.paginas,
        idioma: Libro.idioma,
    };
});

const lista8 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        formato: Libro.formato,
        dimensiones: Libro.dimensiones,
    };
});

const lista9 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        precio: Libro.precio,
        ubicacion: Libro.ubicacion,
    };
});

const lista10 = pilaLibros.map((Libro) => {
    return {
        titulo: Libro.titulo,
        descripcion: Libro.descripcion,
        genero: Libro.genero,
    };
});


//Al array de objetos creado se debe agregar un atributo llamado descuento al cual tiene un valor del 20 porciento.//
const libroDescuento = pilaLibros.map ((Libro) => {
    return {
    ...Libro,
    descuento: 20,
    };
});


//Listar los libros por Titulo, Autor, Editorial, Precio y descuento.//
const listaDescuento = libroDescuento.map((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        editorial: Libro.editorial,
        precio: Libro.precio,
        descuento: Libro.descuento
    };
});


//Obtener un array con los libros que tengan un precio mayor a 50 dolares//
const librosCaros = pilaLibros.filter ((Libro) => {
    return Libro.precio > 50000;
});


//Realizar un array con el resumen de libros por numero mas alto de paginas mostrando, titulo, autor, editorial, paginas//
const filtrarDeMayorAMenor = pilaLibros.sort ((a, b) => b.paginas - a.paginas)
.map ((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        editorial: Libro.editorial,
        paginas: Libro.paginas
    };
});


//Ordenar los libros por numero de paginas de mayor a menor//
const listaDeMayorAMenor = pilaLibros.sort ((a, b) => b.paginas - a.paginas)
.map ((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        genero: Libro.genero,
        idioma: Libro.idioma,
        precio: Libro.precio,
        formato: Libro.formato,
        isbn: Libro.isbn,
        descripcion: Libro.descripcion,
        estado: Libro.estado,
        ubicacion: Libro.ubicacion,
        fecha_publicacion: Libro.fecha_publicacion,
        editorial: Libro.editorial,
        paginas: Libro.paginas,
        dimensiones: Libro.dimensiones,
        peso: Libro.peso
    };
});

//Obtener un array de libros caros por titulo mayores de 11 dolares, resumirlos por titulo, autor, precio. //
const librosCarosPorTitulo = pilaLibros.filter ((Libro) =>{
    return Libro.precio > 50000;
})
.map ((titulo)=> {
    return {
        titulo: titulo.titulo,
        autor: titulo.autor,
        precio: titulo.precio
    };
});


//Realiza un resumen de libros que tengan menos de 100 paginas resumirlos por titulo, autor, editorial y paginas.//
const librosMenoresDe200 = pilaLibros.filter ((Libro) =>{
    return Libro.paginas < 200;
})
.map ((titulo)=> {
    return {
        titulo: titulo.titulo,
        autor: titulo.autor,
        editorial: titulo.editorial,
        paginas: titulo.paginas
    };
});


//Realizar un resumen de libros caros mayores a $100.000 de mayor a menor resumirlos por titulo, autor, precio.//
const librosCarosDeMayorAMenor = pilaLibros.filter ((Libro) =>{
    return Libro.precio > 100000;
}) 
.map ((Libro) => {
    return {
        titulo: Libro.titulo,
        autor: Libro.autor,
        precio: Libro.precio,
    };
});
pilaLibros.sort ((a, b) => b.precio - a.precio)


//Buscar un objeto del array por titulo.//
let libroPorTitulo = pilaLibros.find((Libro) => {
    return Libro.titulo === "La mala hora";
  });


//Buscar un objeto del array por autor.//
let libroPorAutor = pilaLibros.find((Libro) => {
    return Libro.autor === "Abraham Stoker";
  });


//Buscar un objeto del array por fecha de publicación.//
let libroPorFecha = pilaLibros.find((Libro) => {
    return Libro.fecha_publicacion === "11 de julio de 1960";
  });


//Buscar un objeto del array por genero.//
let libroPorGenero = pilaLibros.find((Libro) => {
    return Libro.genero === "Realismo mágico";
  });


//Buscar un objeto del array por idioma.//
let libroPorIdioma = pilaLibros.find((Libro) => {
    return Libro.idioma === "Frances";
  });


//Crear 10 iteraciones diferentes de búsqueda de libros en el sistema.//
let libroPorPrecio = pilaLibros.find((Libro) => {
    return Libro.precio === 120000;
  });

  
let libroPorIsbn = pilaLibros.find((Libro) => {
    return Libro.isbn === "9780061120084";
  });


let libroPorDescripcion = pilaLibros.find((Libro) => {
    return Libro.descripcion === "Una novela que aborda temas de injusticia racial y moralidad a través de los ojos de una niña en el sur de Estados Unidos durante la década de 1930.";
  });


let libroPorEditorial = pilaLibros.find((Libro) => {
    return Libro.editorial === "Editorial Sudamericana";
  });


let libroPorUbicacion = pilaLibros.find((Libro) => {
    return Libro.ubicacion === "Amazon";
  });


let libroPorPaginas = pilaLibros.find((Libro) => {
    return Libro.paginas === 736;
  });


let libroPorDimensiones = pilaLibros.find((Libro) => {
    return Libro.dimensiones === "12.5 x 1 x 19 cm";
  });


let libroPorPeso = pilaLibros.find((Libro) => {
    return Libro.peso=== "90 Gramos";
  });


let libroPorEstado = pilaLibros.find((Libro) => {
  return Libro.estado === "Usado";
  });


let libroPorFormato = pilaLibros.find((Libro) => {
  return Libro.formato === "Versión Digital";
  });

mostrarMenu();