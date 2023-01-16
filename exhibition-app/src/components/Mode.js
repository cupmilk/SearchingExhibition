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
    // 출현 횟수가 같은 요소들을 정렬하는 경우에 문제가 발생할 수 있습니다.
    //예를 들어, countArr 배열에 [["A", 5], ["B", 5], ["C", 3], ["D", 2]] 가 있을 경우,
    //"A"와 "B"의 출현 횟수가 같기 때문에, second[1] - first[1] 을 사용하면 0이 되며 정렬이 이루어지지 않습니다.

    if (first[1] === second[1]) {
      // 출현 횟수가 같을 경우, 알파벳 순서대로 내림차순 정렬
      return first[0] < second[0] ? 1 : -1;
    }

    return first[1] - second[1];
  });

  let repeatMode = 0; // 최빈값이 반복된 횟수
  let modes = []; //최빈값

  // 공백값일경우 제거
  const filteredArr = countArr.filter((element) => element[0] !== "");

  for (const item in filteredArr) {
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

  const result = {
    repeatMode,
    modes,
    filteredArr,
  };

  return result;
}

export default Mode;
