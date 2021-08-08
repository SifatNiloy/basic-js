const arr1 = [25, 65, 98, 102, 78, 86, 92];
const greaterThan80 = arr1.values();
for (const numbers of greaterThan80) {
    if (numbers > 80) {
        console.log(numbers);
    }
}