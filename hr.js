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
    });
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
    const result = moveCountPerNumber.reduce(
      (acc, current) => current + acc,
      0
    );
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
  const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
  const queries2 = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
  // arrayManipulation(n, queries);
  // arrayManipulation(n2, queries2);
}

{
  function checkMagazine(magazine, note) {
    const hashTable = {};
    magazine.forEach(word =>
      hashTable[word] ? hashTable[word]++ : (hashTable[word] = 1)
    );
    let result = 'Yes';
    for (let i = 0; i < note.length; i++) {
      const word = note[i];
      if (!hashTable[word]) {
        result = 'No';
        break;
      } else {
        hashTable[word]--;
      }
    }
    console.log(result);
  }
}

{
  function twoStrings(s1, s2) {
    const hashTable = {};
    let result = 'NO';
    for (let i = 0; i < s1.length; i++) {
      const letter = s1[i];
      hashTable[letter] = true;
    }
    for (let i = 0; i < s2.length; i++) {
      const letter = s2[i];
      if (hashTable[letter]) {
        result = 'YES';
      }
    }
    return result;
  }
}

{
  function sherlockAndAnagrams(s) {
    const table = {};
    // store all substrings in a table
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        const subS = s.slice(i, j + 1);
        console.log('i:', i, 'j+1:', j + 1, 'sub:', subS);
        const normalizeSubS = subS
          .split('')
          .sort()
          .join('');
        if (table[normalizeSubS]) {
          table[normalizeSubS]++;
        } else {
          table[normalizeSubS] = 1;
        }
      }
    }
    console.log(table);
    let result = 0;
    Object.keys(table).forEach(sub => {
      const count = table[sub];
      if (count > 1) {
        // 2 -> 1, 3 -> 3, 4 -> 6
        result = result + (count * (count - 1)) / 2;
      }
    });

    return result;
  }

  // console.log(sherlockAndAnagrams('kkkk'));
}

{
  function maximumToys(prices, k) {
    let count = 0;
    prices.sort((a, b) => a - b);
    for (let i = 0; i < prices.length; i++) {
      k = k - prices[i];
      if (k < 0) {
        break;
      }
      count++;
    }
    return count;
  }

  // console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))
}

{
  function makeAnagram(a, b) {
    const table = {};
    let matchCount = 0;
    a.split('').forEach(
      char => (table[char] = table[char] ? table[char] + 1 : 1)
    );
    b.split('').forEach(char => {
      if (table[char]) {
        table[char]--;
        matchCount++;
      }
    });
    const deleteCount = a.length + b.length - matchCount * 2;
    return deleteCount;
  }

  // console.log(makeAnagram('cde', 'abc'))
}
{
  function whatFlavors(cost, money) {
    let table = {};
    let resultArray;
    for (let i = 0; i < cost.length; i++) {
      const price = cost[i];
      if (table[money - price]) {
        resultArray = [table[money - price], i + 1];
        break;
      }
      table[price] = i + 1;
    }
    resultArray.sort((a, b) => a - b);
    console.log(resultArray.join(' '));
  }

  // whatFlavors([1, 4, 5, 3, 2], 4)
}
{
  function oddNumbers(l, r) {
    let i;
    if (l % 2 === 1) {
      i = l;
    } else {
      i = l + 1;
    }
    while (i <= r) {
      console.log(i);
      i = i + 2;
    }
  }

  // oddNumbers(1, 51)
}

{
  function reverseAll(str) {
    const resultArray = [];
    for (let i = 0; i < str.length; i++) {
      resultArray[str.length - 1 - i] = str[i];
    }
    return resultArray.join('');
  }

  // reverseAll('Foo bar baz quux');
}

{
  function reverseWords(str) {
    const words = str.split(' ');
    words.forEach((word, index) => {
      words[index] = reverseAll(word);
    });
    return words.join(' ');
  }

  // reverseWords('Foo bar baz quux')
}

{
  const countTriplets = (arr, r) => {
    const map2 = {};
    const map3 = {};
    let result = 0;
    arr.forEach(n => {
      // for each number:
      // check if the number is a 3rd element in any previous group projections, if so add the group count to result
      map3[n] && (result += map3[n]);

      // treat the number as the 2nd element in a group,
      // if it already exists in the 2nd-element project map, it means this element had 1st matching elements,
      // get the count of its 1st matching elements, this is the number of 1st - 2nd partial groups
      // then calculate its 3rd element value and add the count of partial groups to the 3rd-element projection map
      map2[n] && (map3[n * r] = map3[n * r] ? map2[n] + map3[n * r] : map2[n]);

      // treat the number as the 1st element in a group, calculate and add to the 2nd-element projection map
      map2[n * r] = (map2[n * r] || 0) + 1;
    });
    console.log(map2, map3);
    return result;
  };
  const allOnes = new Array(100);
  allOnes.fill(1);
  console.log(countTriplets([1, 3, 3, 9, 9, 27, 81], 3));
  console.log(countTriplets(allOnes, 1));
}
