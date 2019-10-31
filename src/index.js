import "./styles.css";

const sanpham1 = {
  id: 1,
  name: "dong ho",
  price: 9,
  imageUlr: "https://salt.tikicdn.com/cache/280x280/ts/product/00/47/df/b02b462394bc3c59e5876ec0d9cb6ae8.jpg",
  isDiscount: 1,
}
if (sanpham1.price > 101) {
  console.log("Luxury Product")
} else if (sanpham1.price > 10) {
  console.log("Good Product")
} else {
  console.log("Good cheap")
}