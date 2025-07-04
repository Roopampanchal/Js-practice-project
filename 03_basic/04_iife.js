// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`Connected to DB`);
})();

((name)=>{
    console.log(`connected to DB two ${name}`);
})('Roop')

