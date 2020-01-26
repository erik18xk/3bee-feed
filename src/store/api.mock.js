const news = {
    "success": true,
    "feeds": [
        {
            "id": "5875fec344607288628a9249",
            "title": "3BEE feed example",
            "content": "Questo è un esempio di feed 3bee",
            "image": "https://www.lifegate.it/app/uploads/Ape-su-un-fiore.jpg"
        },
        {
            "id": "587601d344607dsad9628a9249",
            "title": "Another 3BEE feed example",
            "content": "Questo è un altro esempio di feed 3bee",
            "image": "https://www.3bee.it/wp-content/uploads/2019/11/Immagine-comunicato-stampa-Nutribees_senza-testo_Tavola-disegno-1-copia-2-2-1200x769.jpg"
        },
        {
            "id": "5875fec3446072das628a9249",
            "title": "Redux e Redux Saga",
            "content": "Introduzione alla tecnologia usata per questa applicazione",
            "image": "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
        },
        {
            "id": "587601d3dasdas46072e9628a9249",
            "title": "MOCKED TITLE",
            "content": "Cambia questo valore in ./store/api.mockjs.js",
            "image": "https://devblog.axway.com/wp-content/uploads/blog-572x320-ArrowDB-Mock-Data-Import.png"
        },
        {
            "id": "5875fec3dasd607288628a9249",
            "title": "MOCKED TITLE",
            "content": "Cambia questo valore in ./store/api.mockjs.js",
            "image": "https://devblog.axway.com/wp-content/uploads/blog-572x320-ArrowDB-Mock-Data-Import.png"
        },
        {
            "id": "587601d3446072edasdas28a9249",
            "title": "MOCKED TITLE",
            "content": "Cambia questo valore in ./store/api.mockjs.js",
            "image": "https://devblog.axway.com/wp-content/uploads/blog-572x320-ArrowDB-Mock-Data-Import.png"
        },
    ]
};

const getNews = async () => {
    return await news;
};

export default {
    getNews,
}

