export async function* asyncIterator(collection) {
  for (let i = 0; i < collection.length; i++) {
    await new Promise(resolve => resolve(collection));
    yield collection[i];
  }
}

// const generator = asyncIterator(await getAPIData());

// for await (let value of generator) {
//     console.log(value);
// }