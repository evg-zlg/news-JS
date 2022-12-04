import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '5546ad107b8940ef9aa501e30d3c9f3c', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
