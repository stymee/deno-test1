// denon setup
// https://deno.land/x/denon@2.4.5

await Deno.writeTextFile("hi.txt", "hello there! again ts");

const hiFileContents: string = await Deno.readTextFile("hi.txt");
console.log(hiFileContents);
