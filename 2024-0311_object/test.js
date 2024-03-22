var car = {
    name: "sonata",
    speed: 10,
    color: "white",
    door: 4,
    start: function(){
        return this.speed  //this는 car의 속성값
    }   
}

console.log(car.name);