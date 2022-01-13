

let weather={
    fetchWeather:function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=d8f916faa0fe228c60cc5a288f23db66")
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{speed}=data.wind;
        const{temp,humidity}=data.main;
        const{icon,description,main}=data.weather[0];
        console.log(data,speed);
  
        document.querySelector(".weather").innerHTML="Weather in "+name;
        document.querySelector("#degree").innerHTML=temp+"°C";
        document.querySelector(".desc").innerHTML=main;
        document.querySelector("#humidity").innerHTML="Humidity: "+humidity+"%";
        document.querySelector("#wind").innerHTML="Wind: "+speed+"km/h";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
        
        if(main=="Mist" || main=="Haze" || main=="Fog"){
            document.body.style.backgroundImage = "url('https://i.ibb.co/hcnZ9FM/mist.jpg')"; 
        }
        else if(main=="Clouds"){
            document.body.style.backgroundImage = "url('https://i.ibb.co/3078LwC/clouds.jpg')"; 
        }
        else if(main=="Clear"){
            document.body.style.backgroundImage = "url('https://i.ibb.co/jwyR7Wt/clear.jpg')"; 
        }
        else if(main=="Rain"){
            document.body.style.backgroundImage = "url('https://i.ibb.co/1RVd9KX/pexels-alex-pham-950223.jpg')"; 
            
        }
        else if(main=="Snow"){
            document.body.style.backgroundImage = "url('https://i.ibb.co/FYgjncz/a.jpg')"; 
            
        }
    },
    search:function(){
        this.fetchWeather(document.querySelector("#search_box").value)
    },
    find:function(){
        
        this.fetchWeather("coimbatore");
        var x="df";
        
    },
    
   
};

document.querySelector("#search_icon").addEventListener("click",function(){
weather.search();
document.getElementById("search_box").value="";
});

document.querySelector("#search_box").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
        document.getElementById("search_box").value="";
    }
})
weather.find();



