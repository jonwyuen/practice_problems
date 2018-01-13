function ransomNote(note, magazine) {
  let noteArr = note.split(" ");
  let magazineArr = magazine.split(" ");
  let magazineObj = {};

  magazineArr.forEach(word => {
    magazineObj[word] = (magazineObj[word] || 0) + 1;
  });

  for (let i = 0; i < noteArr.length; i++) {
    if (!magazineObj[noteArr[i]]) return false;
    magazineObj[noteArr[i]]--;
  }

  return true;
}
