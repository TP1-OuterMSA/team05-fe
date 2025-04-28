import Img1 from "../assets/images/team5/FoodListImg1.jpg";
import Img2 from "../assets/images/team5/FoodListImg2.jpg";
import Img3 from "../assets/images/team5/FoodListImg3.jpg";
import Img4 from "../assets/images/team5/FoodListImg4.jpg";
import Img5 from "../assets/images/team5/FoodListImg5.jpg";
import Img6 from "../assets/images/team5/FoodListImg6.jpg";
import Img7 from "../assets/images/team5/FoodListImg7.jpg";

export interface Food {
    id: number;
    name: string;
    type: string; // 음식점, 카페, 술집 등
    image: string;
    url: string;
    description: string;
  }
  
  export const foodListDummy: Food[] = [
    {
      id: 1,
      name: "엄마손 닭갈비",
      type: "음식점",
      image: Img1,
      url: "https://map.naver.com/p/search/%EC%97%84%EB%A7%88%EC%86%90%20%EB%8B%AD%EA%B0%88%EB%B9%84/place/1446124946?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh",
      description: "학교 주변 맛있는 닭갈비집!",
    },
    {
      id: 2,
      name: "애슐리퀸즈",
      type: "음식점",
      image: Img2,
      url: "https://map.naver.com/p/entry/place/1438847148?lng=126.9227251&lat=37.5794066&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
      description: "패밀리 레스토랑",
    },
    {
      id: 3,
      name: "가타쯔무리리",
      type: "음식점",
      image: Img3,
      url: "https://map.naver.com/p/search/%EB%AA%85%EC%A7%80%EB%8C%80%20%EB%A7%9B%EC%A7%91/place/36351814?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh",
      description: "쫄깃한 면발과 깔끔한 국물의 조화",
    },
    {
      id: 4,
      name: "주인백파스타",
      type: "음식점",
      image: Img4,
      url: "https://map.naver.com/p/entry/place/31161270?lng=126.9249008&lat=37.5795441&placePath=%2Fhome&searchType=place&c=15.00,0,0,0,dh",
      description: "맛있는 파스타와 풍성한 맛의 양",
    },
    {
      id: 5,
      name: "모래내곱창",
      type: "음식점",
      image: Img5,
      url: "https://map.naver.com/p/entry/place/13026619?lng=126.9236604&lat=37.5784187&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh",
      description: "부드럽고 냄새 없는 맛있는 곱창",
    },
    {
      id: 6,
      name: "이디야커피",
      type: "카페",
      image: Img6,
      url: "https://map.naver.com/p/search/%EC%9D%B4%EB%94%94%EC%95%BC%EC%BB%A4%ED%94%BC%20%EB%AA%85%EC%A7%80%EB%8C%80/place/18763492?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh",
      description: "공부하기 좋은 이디야 커피",
    },
    {
      id: 7,
      name: "투썸플레이스",
      type: "카페",
      image: Img7,
      url: "https://map.naver.com/p/search/%ED%88%AC%EC%8D%B8%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%20%EB%AA%85%EC%A7%80%EB%8C%80/place/1665675029?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh",
      description: "공부하기 좋은 투썸플레이스",
    },
  ];
  