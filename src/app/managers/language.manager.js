export class Language {
    constructor($window, $log) {
        'ngInject'

        var ls = $window.localStorage;
        var spanish = 'spanish';

        this.currentLang = savedLang() || spanish;

        this.getText = where => this.texts[where][this.currentLang];

        this.setLang = lang => {
            ls.setItem('lang', lang);
            return this.currentLang = lang;
        }

        function savedLang() {
            let savedLang = ls.getItem('lang');
            $log.info(savedLang ? 'Saved language was ' + savedLang : 'No saved theme');
            return savedLang;
        }

        this.texts = {
            note_content_placeholder: {
                english: 'Write the content here', 
                spanish: 'Escribe el contenido aqui'
            }, 
            note_title_placeholder: {
                english: 'Title', 
                spanish: 'Titulo'
            }, 
            search_input_placeholder: {
                english: 'Search', 
                spanish: 'Buscar'
            }, 
            delete_note: {
                english: 'You are about to delete the note', 
                spanish: 'Estas por eliminar la nota'
            }, 
            search_no_results: {
                english: 'There are no results for this search', 
                spanish: 'No hay resultados para esta busqueda'
            }, 
            no_notes: {
                english: 'You have no notes yet', 
                spanish: 'Todavia no tienes notas'
            }, 
            untitled: {
                english: 'Untitled', 
                spanish: 'Sin titulo'
            }, 
            language: {
                english: 'Language', 
                spanish: 'Idioma'
            }, 
            theme: {
                english: 'Theme', 
                spanish: 'Tema'
            }, 
            light: {
                english: 'Light', 
                spanish: 'Claro'
            }, 
            dark: {
                english: 'Dark', 
                spanish: 'Oscuro'
            }, 
            font: {
                english: 'Font', 
                spanish: 'Fuente'
            }, 
            text_size: {
                english: 'Text size', 
                spanish: 'Tama&ntilde;o del texto'
            }, 
            big: {
                english: 'Big', 
                spanish: 'Grande'
            }
        };

        
    }
}