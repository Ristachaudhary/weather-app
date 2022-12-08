const  cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp_real_value');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    const cityVal = cityName.value;
    if(cityVal===''){
        city_name.innerText = `Please enter the city name.` 
        datahide.classList.add('data_hide');
       
    }else{
        
         try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=05e5cd7839552684157ed9b8cdad266a`
         const response = await fetch(url);
         const data = await response.json();
         const arrData = [data];
         city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
         temp.innerText = arrData[0].main.temp;
         const tempMood = arrData[0].weather[0].main;

        //  condition to check weather icon.
        // debugger
        if(tempMood == "Haze"){
         temp_status.innerHTML = '<i class="fa-solid fa-smog" style="color: #AEB7BC;"></i>';
        } else if(tempMood == "Clouds"){
            temp_status.innerHTML = '<i class="fa-solid fa-cloud" style="color: white;"></i>';
        }
        else if(tempMood == "Clear"){
            temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #FFE87C;"></i>';
        }
        else if(tempMood == "Mist"){
            temp_status.innerHTML =' <i class="fa-solid fa-cloud-fog" style="color: #AEB7BC;"></i>';
        } else if(tempMood == "Rain"){
            temp_status.innerHTML = '<i class="fa-sharp fa-solid fa-cloud-rain" style="color: #C4D3DF;"></i>';
        } else if(tempMood == "Sun"){
            temp_status.innerHTML = '<i class="fa-solid fa-sun" style="color: #FFE87C;"></i>';
        }
        else {
            temp_status.innerHTML = '<i class="fa-solid fa-cloud"></i>';
        }
        datahide.classList.remove('data_hide');
         }catch{
            city_name.innerText = `Please enter the city name properly` 
            datahide.classList.add('data_hide');

         }
    }
} 

submitBtn.addEventListener('click', getInfo);