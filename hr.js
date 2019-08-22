{
  function repeatedString(s, n) {
    let aCountEach = 0;
    const arr = s.split('');
    arr.forEach(c => c === 'a' && aCountEach++);
    const repeats = Math.floor(n / s.length);
    const remainder = n % s.length;
    console.log(aCountEach, repeats, remainder);
    let aCountRemain = 0;
    if (remainder) {
      for (let i = 0; i < remainder; i++) {
        arr[i] === 'a' && aCountRemain++;
      }
    }
    const total = aCountEach * repeats + aCountRemain;
    console.log(total);
    return total;
  }

// repeatedString('aba', 10);
}

{
  function hourglassSum(arr) {
    let maxTotal;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const row1 = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
        const row2 = arr[i + 1][j + 1];
        const row3 = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
        const total = row1 + row2 + row3;
        i === 0 && j === 0 && (maxTotal = total);
        total > maxTotal && (maxTotal = total);
      }

    }
    console.log(maxTotal);
    return maxTotal;
  }

  const hourglassSumArr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];
// hourglassSum(hourglassSumArr);
}

{
  function rotLeft(a, d) {
    const result = [];
    a.forEach((item, index) => {
      let newIndex = index - d;
      if (newIndex < 0) {
        newIndex = a.length + newIndex;
      }
      result[newIndex] = item;
    })
    console.log(result);
    return result;
  }

  const rotLeftA = [1, 2, 3, 4, 5];
  const rotLeftD = 5;
// rotLeft(rotLeftA, rotLeftD);
}

{

  function minimumBribes(q) {
    let chaos = false; // flag in case of over 2 moves
    const moveCountPerNumber = [];

    // keep a highest number for the inner loop iteration limit
    let highest = 0;

    // loop through each number to find highest one
    for (let i = 0; i < q.length; i++) {
      const currentNumber = q[i];
      moveCountPerNumber[currentNumber] = 0; // initialize count

      if (currentNumber > highest) {
        highest = currentNumber;
      } else {
        // increase move count for all numbers greater than current number
        for (let i = currentNumber + 1; i <= highest; i++) {
          moveCountPerNumber[i]++;

          // check for chaos
          if (moveCountPerNumber[i] > 2) {
            chaos = true;
            break; // inner loop break
          }
        }
      }

      if (chaos) {
        break; // outer loop break
      }
    }
    // console.log(moveCountPerNumber);
    const result = moveCountPerNumber.reduce((acc, current) => current + acc, 0);
    chaos ? console.log('Too chaotic') : console.log(result);
  }

  // const q = [1, 2, 5, 3, 7, 8, 6, 4];
  // minimumBribes(q);
}

{
  function minimumSwaps(arr) {
    const result = [...arr];
    let steps = 0;

    result.forEach((item, index) => swap(item, index + 1));

    function swap(current, target) {

      while (current !== target) {
        const temp = result[current - 1];
        result[current - 1] = current;
        steps++;
        current = temp;
      }
    }

    console.log(steps);
    return steps;
  }

  let a = [7, 1, 3, 2, 4, 5, 6];
  // minimumSwaps(a)
}

{
  function arrayManipulation(n, queries) {
    const result = [];
    queries.forEach(q => {
      console.log(q);
      const begin = q[0];
      const end = q[1];
      const operation = q[2];
      result.push({ position: begin, weight: operation });
      result.push({ position: end, weight: -operation });
    });
    result.sort((a, b) => {
      if (a.position === b.position) {
        return b.weight - a.weight;
      }
      return a.position - b.position;
    });

    let highest = 0;
    let positionTotal = 0;
    result.forEach(item => {
      positionTotal += item.weight;
      positionTotal > highest && (highest = positionTotal);
    });
    console.log(result, highest);
    return highest;
  }


  const n = 10;
  const n2 = 5;
  const queries = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15],
  ];
  const queries2 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];
  // arrayManipulation(n, queries);
  // arrayManipulation(n2, queries2);
}
