// src/dummyData.ts

export interface Food {
    id: number;
    name: string;
    type: string; // 음식점, 카페, 술집 등
    image: string;
    description: string;
  }
  
  export const foodListDummy: Food[] = [
    {
      id: 1,
      name: "한양김밥",
      type: "음식점",
      image: "/images/hanyangkimbap.jpg",
      description: "맛있는 김밥과 다양한 분식 메뉴를 판매합니다.",
    },
    {
      id: 2,
      name: "명진돈까스",
      type: "음식점",
      image: "/images/myeongjindonkkaseu.jpg",
      description: "두툼하고 바삭한 돈까스를 맛볼 수 있는 곳입니다.",
    },
    {
      id: 3,
      name: "00우동",
      type: "음식점",
      image: "/images/00udon.jpg",
      description: "깔끔한 국물과 쫄깃한 면발이 자랑인 우동집입니다.",
    },
  ];
  