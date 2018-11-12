SET NAMES UTF8;
CREATE DATABASE qiche CHARSET=UTF8;
USE qiche;

/****首页轮播广告商品****/
CREATE TABLE qiche_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页轮播广告商品****/
INSERT INTO qiche_index_carousel VALUES
(NULL, 'img/ford/top3.jpg','轮播广告商品1','product_details.html?lid=28'),
(NULL, 'img/ford/top2.jpg','轮播广告商品2','product_details.html?lid=19'),
(NULL, 'img/ford/top1.jpeg','轮播广告商品3','lookforward.html'),
(NULL, 'img/ford/top4.jpeg','轮播广告商品4','lookforward.html'),
(NULL, 'img/ford/top5.jpg','轮播广告商品5','lookforward.html'),
(NULL, 'img/ford/top6.jpeg','轮播广告商品6','lookforward.html');



