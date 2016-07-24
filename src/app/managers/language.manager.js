export class Language {
    constructor() {

        this.currentLanguage = 'english';

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
            }
        };

        this.getText = what => this.texts[what][this.currentLanguage];
        
    }
}