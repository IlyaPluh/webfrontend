import {Article} from './js/Article';
import {Modal} from './js/Modal';
 
const data = [
    {
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './image/image1.jpg',
        tags: ['Art', 'Design'], 
        content: 'Knowing yourself is the first, and a very critical step in the process of planing your future',
        data: '01.01.2021' 
    },
    {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './image/image2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planing your future',
        data: '01.01.2021'
    },
    {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './image/image3.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planing your future',
        data: '01.01.2021'
    },
    {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
        urlToImage: './image/image4.jpg',
        tags: ['Culture', 'Design', 'Art'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planing your future',
        data: '01.01.2021'
    },
    {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './image/image5.jpg',
        tags: ['Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planing your future',
        data: '01.01.2021'
    }
];

window.onload = function() {
    
    //Render Articles
    if (data) {
        renderArticlesToDom();
    }
    
    //Tags
    addTagsClickHandler();

    //Generate Base Modal from Modal Class
    addToolsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies_tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);
            if (clickedTag.innerText === 'All') {
                showAllStrategies();
            } else {
                filterStrategyBySelectedTag(clickedTag.innerText);
            }
            }
        })
    }


const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.strategies_tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
        tag.classList.add('tag_bordered');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag_bordered');
}

const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.remove('strategy_hidden');
    })
}

const filterStrategyBySelectedTag = (selectedTag) => {
    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');
    strategies.forEach(strategy => {
        strategy.classList.add('strategy_hidden');
        strategy.querySelectorAll('.tag').forEach(tag => {
            if(tag.innerText === selectedTag) {
                strategy.classList.remove('strategy_hidden');
            }
        })
    })
}

const renderArticlesToDom = () => {
    let strategiesWrapper = getStrategiesWrapper();
    generateArticles(data).forEach(article => {
        strategiesWrapper.append(article.generateArticle())
    });
}

const getStrategiesWrapper = () => {
    const strategiesConstainer = document.querySelector('.strategy-wrapper');
    strategiesConstainer.innerHTML = '';
    return strategiesConstainer;       
}

const generateArticles = (data) => {
    let articles = [];
    data.forEach(article => {
        articles.push(new Article(article))
    });
    return articles;
}

const addToolsClickHandler = () => {
    document.querySelector('.tools_button .button').addEventListener('click', () => {
        generateToolsModal();
    });
}

const generateToolsModal = () => {
    renderModalWindow('Test');
}

const renderModalWindow = (content) => {
    let modal = new Modal ('tools-modal');
    modal.buildModal(content);
}