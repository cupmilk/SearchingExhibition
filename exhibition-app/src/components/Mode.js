function Mode(array) {
  // 1. 출연 빈도 구하기
  const counts = array.reduce((pv, cv) => {
    // 겹치는 값을 따로 넣을 수 있는 지 확인
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
  }, {});

  // 2. 요소와 개수를 표현하는 배열 생성 => [ [요소: 개수], [요소: 개수], ...]
  const countArr = [];
  for (let key in counts) {
    countArr.push([key, counts[key]]);
  }

  // 3. 출현 빈도별 정리하기
  countArr.sort((first, second) => {
    // second[1] - first[1] 숫자가 같게 변함 second[1] = first[1]이렇게 되버림 ? 왜그렇지 고장 나버림 이건 이유를 찾아서 확인 해봐야할듯
    //  first[1] - second[1] 이경우에만 정상적으로 작동 근데 왜 그렇게 되는지 모름
    return first[1] - second[1];
  });

  let repeatMode = 0; // 최빈값이 반복된 횟수
  let modes = []; //최빈값

  // 공백값일경우 제거
  const filteredArr = countArr.filter((element) => element[0] !== "");

  for (const item in filteredArr) {
    // 배열속 배열의 2번재값 = 2.의 개수

    if (filteredArr[item][1] > repeatMode) {
      // 가장 많이 반복된 횟수를 넣는다
      repeatMode = filteredArr[item][1];
      // 가장 많이 반복됫 회수의 요소를 집어 넣는다
      modes = [filteredArr[item][0]];
    } else if ((filteredArr[item][1] = repeatMode)) {
      // 가장 많이 반복된 횟수가 동일할경우 배열에 집어넣는다.
      modes.push(filteredArr[item][0]);
    }
  }
  console.log(filteredArr);

  const result = {
    repeatMode,
    modes,
    filteredArr,
  };

  return result;
}

export default Mode;
