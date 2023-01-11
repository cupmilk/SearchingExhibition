import theme from "./../styles/theme";

const resultCategoryInfo = [
  {
    value: "문화교양",
    img: "https://cdn.pixabay.com/photo/2018/09/25/11/45/pixel-cells-3702062_960_720.png",
    info: "끝없는 호기심을 가지고 있습니다. 배움에 있어서 어른과같은 겸허함과 어린아이와 같은 순수함을 지니고 있습니다. 그 속에 담겨진 지혜과 지식을 깨달았을때 기쁨을 알고있습니다.",
    enjoy:
      "자신과는 다른 새로운 시각에서 설명하는것들에 대해 흥미를 느낍니다. 새로운 지식으로 인해 자신의 세상이 넓어지는것을 추구합니다. 인문학적 지식들에 많은 관심이 있습니다.",
    character: "무슨 무슨 박사 이런거하면되지",
    color: {
      theme: `${theme.palette.deepGreen}`,
      element: `${theme.palette.green}`,
    },
  },
  {
    value: "전시",
    img: "https://cdn.pixabay.com/photo/2019/01/22/10/58/pixel-cells-3947915_960_720.png",
    info: "색깔을 통해 감정을 파악하고 형태을 통해 메세지를 읽는 능력이 뛰어납니다. 두눈에 담겨진 새로운 정보로 경험해보지 못한 다른 세상을 느낍니다.",
    enjoy:
      "눈으로 보이는 이미지에 강한 흥미를 느낍니다. 작품의 전반적인 배경을 이해하면서 즐기기도 하지만 때론 이해하지 못하더라도 작품의 느낌 그자체만으로 감동받기도 합니다.",
    character: "관찰자",
    color: {
      theme: `${theme.palette.deepBlue}`,
      element: `${theme.palette.blue}`,
    },
  },
  {
    value: "콘서트",
    img: "https://cdn.pixabay.com/photo/2018/09/26/09/13/pixel-cells-3704044_960_720.png",
    info: "사람과 사람간의 정서적인 교감을 소중히 여깁니다. 다른 사람의 감정에 귀기울이며 같이 기뻐하며 슬퍼합니다. 때론 이런것들이 힘들게 느껴지기도 합니다. 그럼에도 사람에 대한 희망과 사랑을 알기에 포기하지 않는 용기를 가지고 있습니다.",
    enjoy:
      "뮤지션 혹은 함께 참가한 참여자들간의 감정적 교류를 좋아합니다. 단순한 관람에서 끝나는것이 아닌 공연에 참여함으로써 더욱 큰 정서적 유대감을 얻습니다.  ",
    character: "감정공유기",
    color: {
      theme: `${theme.palette.deepYellow}`,
      element: `${theme.palette.yellow}`,
    },
  },
  {
    value: "뮤지컬",
    img: "https://cdn.pixabay.com/photo/2021/05/05/05/10/pixel-cells-6230200_960_720.png",
    // img: "https://cdn.pixabay.com/photo/2021/05/05/04/42/pixel-cells-6230153_960_720.png",
    info: "많은 요소들을 파악하여 하나로 만들 줄 압니다.노래, 춤, 이야기 모두 다 즐깁니다. 각각의 요소들을 하나로 만들어 이야기속 등장인물의 감정에 귀기울입니다.",
    enjoy:
      "시청각이 모두 자극받는 공연을 즐깁니다. 노래와 춤, 무대장치등을 통해 연출되는 극적인 장면들을 즐깁니다. 무대장치와 배우들이 이야기를 전해",
    character: "인물을 사랑하는 쉐익스피어?(극작가 느낌)",
    color: {
      theme: `${theme.palette.deepPink}`,
      element: `${theme.palette.pink}`,
    },
  },
  {
    value: "클래식",
    img: "https://cdn.pixabay.com/photo/2018/09/26/09/13/pixel-cells-3704046_960_720.png",
    info: "음식을 음미하는 미식가처럼 섬세한 음악을 즐기는 당신, 음 자체가 전달하는 의미를 알며 멜로디가 이끌어주는 대로 마음의 풍경을 그릴 줄 압니다.",
    enjoy:
      "오로지 청각을 통해 음악의 요소 하나하나를 즐깁니다. 음악에 대한 지식이 풍부하거나 알아가는것에 기쁨을 느낍니다. 추가로 해당 음악의 역사적 배경까지도 흥미진진해합니다. 혹자는 같은 곡이라도 지휘자에 따라 달라지는 차이를 느끼고 비교하며 즐기기도 합니다.",
    character: "음악을 사랑하는 음표 미식가",
    color: {
      theme: `${theme.palette.deepPurple}`,
      element: `${theme.palette.purple}`,
    },
  },
];

export default resultCategoryInfo;
