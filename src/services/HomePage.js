import ApiServices from './Api';

class HomePageService extends ApiServices {
    getData = () => this.http.get('https://api.chucknorris.io/jokes/random');
}

export default new HomePageService();