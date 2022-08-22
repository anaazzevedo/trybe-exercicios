let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contator = 0;
let media = 0;
for(let index = 0;index< numbers.length; index+=1){
    contator= contator + numbers[index];
} 
media = contator/ numbers.length;
console.log(media);
if(media>20){
    console.log(media + " é maior que 20");
} else{
    console.log(media + " é menor ou igual a 20");
}