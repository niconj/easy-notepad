export class Language {
    constructor() {

        this.currentLanguage = 'spanish';

        this.getText = where => this.texts[where][this.currentLanguage];

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
            }
        };

        
    }
}