export class Article {
    constructor({id, title, urlToImage, tags, ...rest}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
    }
  
    //Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.className = 'strategy block-shadowed';
        article.setAttribute('data-id', this.id);

        this.urlToImage && //&& = if
        (template += `<img class="strategy_image" src=${this.urlToImage} alt="strategy">`)
        
        if (this.title || this.tags) {
            template += `<div class="strategy_content">`

            this.title &&
            (template += `<h3 class="strategy_name">${this.title}</h3>`)

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
}