const URL = 'http://notigram.com/wp-json/wp/v2/posts?per_page=30&page=1&_embed';

class API{

    async getDATA(){
        await fetch(URL).then((response)=>{
            return response.json()
        })
        console.log(response)

        return response
    }
    
}
export default API