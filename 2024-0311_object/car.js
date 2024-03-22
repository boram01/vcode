var car =[
    {
    name: "sonata",
    speed: 10,
    color: "white",
    door: 4,
    start: function(){
        return this.speed  //this는 car의 속성값
    }   
},
    {
    name: "carnival",
    speed: 10,
    color: "red",
    door: 4,
    start: function(){
        return this.speed  
    }   
},
    {
    name: "carnival1",
    speed: 10,
    color: "yello",
    door: 4,
    start: function(){
        return this.speed + 100;
    }   
},
    {
    name: "carnival2",
    speed: 10,
    color: "blue",
    door: 4,
    start: function(){
        return this.speed + 100;
    }   
},
    {
    name: "carnival3",
    speed: 10,
    color: "pink",
    door: 4,
    start: function(){
        return this.speed + 100;
    },   
},
];



// var cycle = [
//     1,2,3
// ]




export default car;
// export {car, cycle};