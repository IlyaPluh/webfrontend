import { Modal } from './Modal';

export class ArticleModal extends Modal {
    constructor(classes, { id, title, urlToImage, tags, content, data }) {
        super(classes);
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.content = content;
        this.data = data;
    }

    //Article Modal generator
    generateContent() {
        let template = '';
        let article = document.createElement('div');
        article.className = 'article-modal_content';

        this.urlToImage && //&& = if
        (template += `<img class="strategy_image" src=${this.urlToImage} alt="strategy">`)
        
        if (this.title || this.tags || this.content || this.data) {
            template += `<div class="strategy_content">`

            this.data &&
            (template += `<p class="strategy_data">${this.data}</p>`)
            
            this.title &&
            (template += `<h3 class="strategy_name">${this.title}</h3>`)

            this.content &&
            (template += `<h3 class="strategy_text">${this.content}</h3>`)

            if(this.tags) {
                template += `<div class="strategy_tags tags">`

                this.tags.map(tag => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })

                template += `</div>`
            }

            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }

    renderModal() {
        let content = this.generateContent();
        super.buildModal(content);
    }
}