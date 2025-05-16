import { getProductList } from "./ArticleService.js";


class Product {
    constructor(name, description, price, tags, images, favoriteCount) {
        this.name = name
        this.description = description
        this.price = price
        this.tags = tags
        this.images = images
        this.favoriteCount = favoriteCount
    }
     favorite () {
        this.favoriteCount += 1
     }
}

class ElectronicProduct extends Product {
    constructor(name, description, price, tags, images, favoriteCount,manufacturer) {
        super(name, description, price, tags, images, favoriteCount)
        this.manufacturer = manufacturer
    }

}

class Article {
    constructor(title, content, writer, likeCount) {
        this.title = title
        this.content = content
        this.writer = writer
        this.likeCount = likeCount
    }
    like() {
        this.likeCount += 1
    }
}

const products = []
getProductList({
    
})